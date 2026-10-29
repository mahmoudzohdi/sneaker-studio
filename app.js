// The code for steps 3 to 5 goes here. Copy each block from STEPS.md.

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

// Numbered points on the shoe: tap one to read about that part.
const info = document.querySelector('#info')
document.querySelectorAll('.hotspot').forEach((point) => {
  point.addEventListener('click', () => {
    info.textContent = point.dataset.info
  })
})

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
