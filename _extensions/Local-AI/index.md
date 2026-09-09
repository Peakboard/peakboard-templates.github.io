---
layout: extension
title: Lokale KI
title_text: Lokale KI
by: Peakboard
description:
 - Local AI beantwortet Prompts mithilfe eines Sprachmodells, das direkt auf der Peakboard Box oder dem PC selbst läuft. Es wird nichts übertragen – kein Cloud-Dienst, kein API-Schlüssel, kein Netzwerkaufruf während der Inferenz.

 - Es ist das Offline-Pendant zur GPT-Erweiterung. GPT ist deutlich leistungsfähiger und erfordert ein OpenAI-Konto; dieses Modell ist schwächer, benötigt jedoch beides nicht. Nutzen Sie es dort, wo Daten das Gerät nicht verlassen dürfen, wo kein Internet vorhanden ist oder wo Kosten pro Aufruf ein gehostetes Modell ausschließen.

 - Gut geeignet zum Klassifizieren von Fehlercodes, Extrahieren von Feldern aus Maschinenmeldungen, Umformulieren eines Status in einen festen Satz oder Zusammenfassen weniger Messwerte. Geben Sie ihm einen Prompt aus der Fertigung und es antwortet in wenigen Sekunden.

 - Kein Ersatz für einen Chatbot. Auf der Box-Hardware dauert eine Antwort aus zwei Sätzen etwa zehn Sekunden. Die Länge des Prompts bestimmt maßgeblich die Wartezeit.

 - Das Modell ist nicht enthalten – es ist 1–3 GB groß und hängt von Ihrer Hardware ab. Die README-Datei enthält eine Befehlszeile zur Konvertierung. Jedes ONNX Runtime GenAI-Modell funktioniert – Qwen, Llama, Phi, Gemma, Mistral.

lang: de
weight: 80
isDraft: false
ref: Local_AI
image: Local_AI_Extension_Logo.png
image_thumbnail: Local_AI_Extension_Logo.png
repository: https://github.com/Peakboard/PeakboardExtensions/tree/master/LocalAI/Binary
download: LocalAI.zip
extension_category:
  - Alle
  - KI

version_history:
  - Version 1.0 on 09 September 2026 | Initial release
---




