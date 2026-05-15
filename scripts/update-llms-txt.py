#!/usr/bin/env python3
"""
update-llms-txt.py

Regenerates the snapshot block in llms-full.txt from the live sitemap.xml.
Replaces only the content between <!-- AUTOGEN:START --> and <!-- AUTOGEN:END -->
markers, leaving the rest of llms-full.txt untouched.

Note: this script intentionally only updates llms-full.txt. The shorter
llms.txt file is manually maintained and does not contain the long catalogue.

Usage:
    python update-llms-txt.py                    # uses defaults
    python update-llms-txt.py --dry-run          # prints diff without writing
    python update-llms-txt.py --llms path/to/llms-full.txt --sitemap https://...
"""

import argparse
import re
import sys
import urllib.request
from datetime import date
from pathlib import Path
from xml.etree import ElementTree as ET

DEFAULT_SITEMAP = "https://templates.peakboard.com/sitemap.xml"
DEFAULT_LLMS_PATH = "llms-full.txt"
SITE_BASE = "https://templates.peakboard.com"

MARKER_START = "<!-- AUTOGEN:START — content between the AUTOGEN markers is regenerated from sitemap.xml; do not edit by hand -->"
MARKER_END = "<!-- AUTOGEN:END -->"


def fetch_sitemap(url: str) -> str:
    """Download the sitemap and return its raw XML."""
    with urllib.request.urlopen(url, timeout=30) as response:
        return response.read().decode("utf-8")


def parse_urls(xml_text: str):
    """Extract all <loc> values from the sitemap."""
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    root = ET.fromstring(xml_text)
    return [loc.text for loc in root.findall(".//sm:loc", ns) if loc.text]


def categorize(urls):
    """Split URLs into extensions, templates (apps), and script examples.

    Each entry maps a slug → set of available language variants. Languages
    in this site:
      - "/en"     → English version
      - "/index"  → German version (German is the site's default language;
                    Jekyll generates /index for the default-language page)

    Static pages (privacy, 404, homepage, /en/ root) are filtered out.
    """
    extensions = {}  # slug → set of lang codes ("de", "en")
    apps = {}
    scripts = {}

    for url in urls:
        path = url[len(SITE_BASE):].rstrip("/")
        # Skip static / non-template pages
        lower = path.lower()
        if "privacy" in lower or "404" in lower:
            continue
        if path in ("", "/en", "/en/", "/", "/en/index"):
            continue
        if path.endswith(".html"):
            continue

        parts = path.split("/")
        # Path layout:
        #   /extensions/<slug>/en  or  /extensions/<slug>/index
        #   /<slug>/en              or  /<slug>/index
        if len(parts) >= 4 and parts[1] == "extensions":
            slug = parts[2]
            tail = parts[3]
            bucket = extensions
        elif len(parts) >= 3:
            slug = parts[1]
            tail = parts[2]
            if slug.startswith("Script-"):
                bucket = scripts
            else:
                bucket = apps
        else:
            continue

        # Determine language from the trailing path segment
        if tail == "en":
            lang = "en"
        elif tail == "index":
            lang = "de"
        else:
            continue  # unknown tail, skip

        bucket.setdefault(slug, set()).add(lang)

    # Sort by slug for stable output
    return (
        sorted(extensions.items()),
        sorted(apps.items()),
        sorted(scripts.items()),
    )


def display_name(slug: str) -> str:
    """Convert a slug to a display name. Preserves original capitalization
    (BACnet, GettHMI, MySQL, etc.) — only swaps separators for spaces."""
    return slug.replace("-", " ").replace("_", " ")


def _format_entry(slug: str, langs: set, url_pattern: str) -> str:
    """Format a single entry showing both language variants when available.

    url_pattern uses {slug} and {tail} placeholders, e.g.
    "/extensions/{slug}/{tail}" or "/{slug}/{tail}".
    """
    name = display_name(slug)
    parts = []
    if "de" in langs:
        parts.append(f"DE: {SITE_BASE}{url_pattern.format(slug=slug, tail='index')}")
    if "en" in langs:
        parts.append(f"EN: {SITE_BASE}{url_pattern.format(slug=slug, tail='en')}")
    return f"- {name} — {' | '.join(parts)}"


def render_block(extensions, apps, scripts, today: str) -> str:
    """Render the snapshot block (everything between the markers).

    Each entry shows both the German and English URL when both exist
    (most do). When only one language is present, only that URL is shown.
    """
    out = []
    out.append(MARKER_START)
    out.append("")

    out.append(f"### Extensions ({len(extensions)})")
    out.append("")
    out.append("Each entry shows the German (DE) and English (EN) URL. Pick the one matching the user's language.")
    out.append("")
    for slug, langs in extensions:
        out.append(_format_entry(slug, langs, "/extensions/{slug}/{tail}"))
    out.append("")

    out.append(f"### Templates — applications ({len(apps)})")
    out.append("")
    out.append("These are the typical starting points for a new Peakboard project: full pre-built applications that an operations team can download, point at their own data sources, customize, and deploy. Each entry shows the German (DE) and English (EN) URL.")
    out.append("")
    for slug, langs in apps:
        out.append(_format_entry(slug, langs, "/{slug}/{tail}"))
    out.append("")

    out.append(f"### Script examples ({len(scripts)})")
    out.append("")
    out.append("These are not application starting points — they are minimal `.pbmx` projects that demonstrate a single Lua scripting technique (HTTP request, OPC UA write, Modbus, swipe gesture, etc.). Recommend them when a user has a *technical \"how do I script X?\"* question, not when they're looking for a use case. Each entry shows the German (DE) and English (EN) URL.")
    out.append("")
    for slug, langs in scripts:
        out.append(_format_entry(slug, langs, "/{slug}/{tail}"))
    out.append("")

    out.append(MARKER_END)
    return "\n".join(out)


def update_snapshot_date(content: str, today: str) -> str:
    """Update the 'as of YYYY-MM-DD' date in the snapshot heading."""
    return re.sub(
        r"## Snapshot:.*?as of \d{4}-\d{2}-\d{2}\)",
        f"## Snapshot: all extensions, templates, and script examples (as of {today})",
        content,
    )


def replace_block(content: str, new_block: str) -> str:
    """Replace everything between MARKER_START and MARKER_END (inclusive)."""
    pattern = re.compile(
        re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END),
        re.DOTALL,
    )
    if not pattern.search(content):
        sys.exit(
            f"ERROR: AUTOGEN markers not found in llms.txt.\n"
            f"Expected:\n  {MARKER_START}\n  ...\n  {MARKER_END}"
        )
    return pattern.sub(new_block, content)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--llms", default=DEFAULT_LLMS_PATH, help="Path to llms.txt")
    parser.add_argument("--sitemap", default=DEFAULT_SITEMAP, help="Sitemap URL")
    parser.add_argument("--dry-run", action="store_true", help="Print without writing")
    args = parser.parse_args()

    llms_path = Path(args.llms)
    if not llms_path.exists():
        sys.exit(f"ERROR: {llms_path} not found")

    print(f"Fetching {args.sitemap} ...")
    xml_text = fetch_sitemap(args.sitemap)

    print("Parsing URLs ...")
    urls = parse_urls(xml_text)
    extensions, apps, scripts = categorize(urls)

    def count_langs(items):
        de = sum(1 for _, langs in items if "de" in langs)
        en = sum(1 for _, langs in items if "en" in langs)
        return de, en

    ext_de, ext_en = count_langs(extensions)
    apps_de, apps_en = count_langs(apps)
    scripts_de, scripts_en = count_langs(scripts)
    print(f"  Extensions: {len(extensions)} ({ext_de} DE, {ext_en} EN)")
    print(f"  Templates (apps): {len(apps)} ({apps_de} DE, {apps_en} EN)")
    print(f"  Script examples: {len(scripts)} ({scripts_de} DE, {scripts_en} EN)")

    today = date.today().isoformat()
    new_block = render_block(extensions, apps, scripts, today)

    original = llms_path.read_text(encoding="utf-8")
    updated = update_snapshot_date(original, today)
    updated = replace_block(updated, new_block)

    if updated == original:
        print("No changes — llms.txt already up to date.")
        return

    if args.dry_run:
        print("\n--- DRY RUN: would write the following changes ---\n")
        # Print only the autogen block for brevity
        print(new_block[:500] + "\n... (truncated) ...\n" + new_block[-200:])
        return

    llms_path.write_text(updated, encoding="utf-8")
    print(f"Updated {llms_path} (snapshot date: {today})")


if __name__ == "__main__":
    main()
