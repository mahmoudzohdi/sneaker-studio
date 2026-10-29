# Build Sneaker Studio, step by step

A 3D sneaker you can turn, recolour and explore, built in six small steps. The finished version: https://mahmoudzohdi.github.io/sneaker-studio/

**Every step ends the same way: commit, push, open your live link.**

All the CSS is already in `style.css`, and the 3D model and the data are already in the repo. You only paste HTML and JavaScript. Every place to paste is marked in the files with a `Step N` comment.

## Before you start

1. On this repo, click **Use this template → Create a new repository**. Make it **Public** (GitHub Pages is free for public repos).
2. Edit your copy in the browser (press `.` on your repo to open github.dev), or clone it and use VS Code.

## Step 1: the simplest layout, then go live

In `index.html`, replace `<!-- Step 1: paste the studio here -->` with:

```html
<div class="studio">
  <div class="viewer">The 3D sneaker goes here</div>
  <aside class="panel">
    <h3>Colours</h3>
    <!-- Step 3: paste the buttons here -->
    <!-- Step 4: paste the info box here -->
  </aside>
</div>
```

Write your names in the **Team** section.

Then turn on GitHub Pages: **Settings → Pages → Branch**: pick your branch (there's only one) and `/ (root)` → **Save**. Your link appears there within a few minutes.

Commit, push, open your link.

## Step 2: the 3D sneaker

In `index.html`, replace the line `<div class="viewer">The 3D sneaker goes here</div>` with:

```html
<model-viewer
  id="shoe"
  class="viewer"
  src="models/shoe.glb"
  alt="A 3D model of a sneaker"
  camera-controls
  auto-rotate
  touch-action="pan-y"
  shadow-intensity="1">
  <!-- Step 4: paste the points here -->
</model-viewer>
```

Commit, push, open your link. You can turn and zoom the shoe.

> **Break it on purpose:** change `src="models/shoe.glb"` to `src="/models/Shoe.glb"`, push, and open your live link. No shoe. Open DevTools → **Console**: there's a 404. A path that starts with `/` points to the root of the site, and online `Shoe.glb` and `shoe.glb` are different files. Put it back, push again.

## Step 3: colours

In `index.html`, replace `<!-- Step 3: paste the buttons here -->` with:

```html
<div class="colors">
  <button data-variant="midnight">Blue</button>
  <button data-variant="beach">Pink</button>
  <button data-variant="street">Black</button>
</div>
<button id="spin">Stop turning</button>
```

In `app.js`, replace `// Step 3: paste the colours code here` with:

```js
const shoe = document.querySelector('#shoe')

// Colour buttons: each one picks a colourway that is built into the 3D model.
document.querySelectorAll('[data-variant]').forEach((button) => {
  button.addEventListener('click', () => {
    shoe.variantName = button.dataset.variant
  })
})

// Start and stop the turning.
const spin = document.querySelector('#spin')
spin.addEventListener('click', () => {
  shoe.autoRotate = !shoe.autoRotate
  spin.textContent = shoe.autoRotate ? 'Stop turning' : 'Start turning'
})
```

Commit, push, open your link. The buttons recolour the shoe and stop or start the turning.

## Step 4: points on the shoe

In `index.html`, replace `<!-- Step 4: paste the points here -->` with:

```html
<button class="hotspot" slot="hotspot-laces"
  data-position="0.013m 0.086m 0.024m" data-normal="0.305m 0.763m 0.570m"
  data-info="Laces: flat laces that stay tied all day.">1</button>
<button class="hotspot" slot="hotspot-heel"
  data-position="-0.115m 0.090m 0.017m" data-normal="-0.479m 0.584m 0.655m"
  data-info="Heel: a padded heel that holds your foot in place.">2</button>
<button class="hotspot" slot="hotspot-sole"
  data-position="-0.018m 0.020m 0.047m" data-normal="-0.346m 0.176m 0.922m"
  data-info="Sole: light foam that softens every step.">3</button>
```

Then replace `<!-- Step 4: paste the info box here -->` with:

```html
<p id="info" class="info">Tap a number on the shoe to see that part.</p>
```

In `app.js`, replace `// Step 4: paste the points code here` with:

```js
// Numbered points on the shoe: tap one to read about that part.
const info = document.querySelector('#info')
document.querySelectorAll('.hotspot').forEach((point) => {
  point.addEventListener('click', () => {
    info.textContent = point.dataset.info
  })
})
```

Commit, push, open your link. Tap a number on the shoe.

> To place points on your own model, open it at https://modelviewer.dev/editor/, click where you want a point, and copy its position.

## Step 5: data, animated

In `index.html`, replace `<!-- Step 5: paste the specs here -->` with:

```html
<div id="specs" class="specs"></div>
<p class="note">Example data, loaded from <code>data/sneaker.json</code>.</p>
```

In `app.js`, replace `// Step 5: paste the specs code here` with:

```js
// Specs from a file in this repo, drawn as bars. The animation itself is in style.css.
const specs = document.querySelector('#specs')

async function showSpecs() {
  const res = await fetch('data/sneaker.json')
  const sneaker = await res.json()
  specs.innerHTML = sneaker.specs
    .map((spec, i) => `
      <div class="spec" style="--score: ${spec.score}%; --i: ${i}">
        <span>${spec.label}</span>
        <strong>${spec.score}</strong>
        <div class="bar"><div></div></div>
      </div>`)
    .join('')
}

// Start the animation when the specs scroll into view, so people actually see it.
new IntersectionObserver((entries, observer) => {
  if (entries[0].isIntersecting) {
    specs.classList.add('show')
    observer.disconnect()
  }
}).observe(specs)

showSpecs()
```

Commit, push, open your link and scroll to **Specs**: the bars fill up. The animation is in `style.css` (look for `@keyframes fill`).

> `fetch()` loads `data/sneaker.json`. It works on your live link or a local server, not when you double-click `index.html`.

## Step 6: check it like a judge

- [ ] Open your live link on a phone, in a private window. Everything loads, with no login.
- [ ] On your laptop, open DevTools: switch to the phone view, and check the **Console** has no red errors.
- [ ] In `README.md`: your live link, your team, and how you used AI.

Commit, push. Done: you have a live link and a repo.
