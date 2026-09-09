---
layout: extension
title: Local AI
title_text: Local AI
by: Peakboard
description:
  - Local AI answers prompts using a language model running on the Peakboard Box or PC itself. Nothing is sent anywhere – no cloud service, no API key, no network call at inference time.

  - It is the offline counterpart to the GPT extension. GPT is far more capable and needs an OpenAI account; this one is weaker and needs neither. Use it where data cannot leave the machine, where there is no internet, or where per-call cost rules out a hosted model.

  - Good for classifying a fault code, extracting fields from a machine message, rewriting a status into a fixed sentence, summarising a handful of readings. Give it a shop-floor prompt and it answers in a few seconds.

  - Not a chatbot replacement. On Box hardware a two-sentence answer takes about ten seconds. Prompt length dominates the wait.

  - The model is not included — it is 1–3 GB and depends on your hardware. The README gives a one-command conversion. Any ONNX Runtime GenAI model works – Qwen, Llama, Phi, Gemma, Mistral.
lang: en
weight: 80
isDraft: false
ref: Local_AI
image: Local_AI_Extension_Logo.png
image_thumbnail: Local_AI_Extension_Logo.png
repository: https://github.com/Peakboard/PeakboardExtensions/tree/master/LocalAI/Binary
download: LocalAI.zip
extension_category:
  - All
  - AI

version_history:
  - Version 1.0 on 09 September 2026 | Initial release
---
