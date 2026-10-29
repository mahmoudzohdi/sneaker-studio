# Sneaker Studio

A 3D sneaker you can turn, zoom and recolour in the browser. The code-along demo for the NASA Space Apps Cairo 2026 web development workshop.

**Live link:** https://mahmoudzohdi.github.io/sneaker-studio/

## What it does

Photos show a shoe from one angle, in one colour. Sneaker Studio shows it in 3D: turn and zoom it, switch between three colours, tap the numbered points to read about each part, and watch its specs animate in.

## Our web path

A static page (HTML, CSS and JavaScript) on GitHub Pages. The 3D viewer is [model-viewer](https://modelviewer.dev), loaded from a CDN link. No build step, no framework.

## Code along

Start from the [`empty-template`](https://github.com/mahmoudzohdi/sneaker-studio/tree/empty-template) branch: click **Use this template**, then follow its [STEPS.md](https://github.com/mahmoudzohdi/sneaker-studio/blob/empty-template/STEPS.md). Everything is ready except each step's code.

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

Extra: [`extras/ball.html`](https://mahmoudzohdi.github.io/sneaker-studio/extras/ball.html) wraps a texture image around a sphere with three.js, the same technique as a planet map.

To open a step on your laptop: `git checkout step-3`, and `git checkout main` to come back.

## Run it on your laptop

Double-clicking `index.html` opens it as a file, and browsers block `fetch()` for files, so the 3D model and the specs won't load. Open it from a small local server instead, whichever you have:

- **Node.js:** run `npx serve` in this folder, then open the address it prints (http://localhost:3000).
- **VS Code:** install the *Live Server* extension, then click **Go Live**.
- **Python:** run `python -m http.server 8000`, then open http://localhost:8000.

Or skip it: commit, push, and check your live link.

## Data and credits

- 3D model: [Materials Variants Shoe](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/MaterialsVariantsShoe) by Shopify, CC BY 4.0, from the Khronos glTF Sample Assets
- 3D viewer: [model-viewer](https://modelviewer.dev) by Google
- Extra: [three.js](https://threejs.org); the ball texture was drawn for this demo
- Specs: example data written for this demo, in `data/sneaker.json`

## AI tools we used

- Claude (Anthropic): helped write the code and this README. Every step was tested in a browser and on a phone-size screen before it was pushed.

## Team

- Mahmoud Zohdi
