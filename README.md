# Sneaker Studio

A 3D sneaker you can turn, zoom and recolour in the browser. The code-along demo for the NASA Space Apps Cairo 2026 web development workshop.

**Live link:** https://mahmoudzohdi.github.io/sneaker-studio/

## What it does

Photos show a shoe from one angle, in one colour. Sneaker Studio shows it in 3D: turn and zoom it, switch between three colours, tap the numbered points to read about each part, and watch its specs animate in.

## Our web path

A static page (HTML, CSS and JavaScript) on GitHub Pages. The 3D viewer is [model-viewer](https://modelviewer.dev), loaded from a CDN link. No build step, no framework.

## Built step by step

Each step is one commit with a tag, and each one went live before the next started.

| Tag | What it adds |
| --- | --- |
| [`step-1`](https://github.com/mahmoudzohdi/sneaker-studio/tree/step-1) | The simplest layout, published on GitHub Pages |
| [`step-2`](https://github.com/mahmoudzohdi/sneaker-studio/tree/step-2) | The 3D sneaker, with one `<model-viewer>` tag |
| [`step-3`](https://github.com/mahmoudzohdi/sneaker-studio/tree/step-3) | Colour buttons and a turning switch |
| [`step-4`](https://github.com/mahmoudzohdi/sneaker-studio/tree/step-4) | Numbered points on the shoe that show each part |
| [`step-5`](https://github.com/mahmoudzohdi/sneaker-studio/tree/step-5) | Specs from `data/sneaker.json`, animated with CSS |
| [`step-6`](https://github.com/mahmoudzohdi/sneaker-studio/tree/step-6) | This README, after checking the live link like a judge |

To open a step on your laptop: `git checkout step-3`, and `git checkout main` to come back.

## Run it on your laptop

`fetch()` doesn't work when you double-click `index.html`, so start a small local server in this folder:

```sh
python -m http.server 8000
```

Then open http://localhost:8000.

## Data and credits

- 3D model: [Materials Variants Shoe](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/MaterialsVariantsShoe) by Shopify, CC BY 4.0, from the Khronos glTF Sample Assets
- 3D viewer: [model-viewer](https://modelviewer.dev) by Google
- Specs: example data written for this demo, in `data/sneaker.json`

## AI tools we used

- Claude (Anthropic): helped write the code and this README. Every step was tested in a browser and on a phone-size screen before it was pushed.

## Team

- Mahmoud Zohdi
