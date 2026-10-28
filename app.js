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
