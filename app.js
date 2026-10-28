// Shows one NASA data element from a file in this repo.
// fetch() works on your live link or a local preview, not when you double-click index.html.
async function showNasaData() {
  const card = document.querySelector('#nasa-card')
  try {
    const res = await fetch('data/apod.json')
    const apod = await res.json()
    card.innerHTML = `
      <img src="${apod.image}" alt="${apod.title}">
      <h3>${apod.title}</h3>
      <p>${apod.explanation}</p>
      <p class="credit">Image: ${apod.credit}. <a href="${apod.source}">Source</a></p>
    `
  } catch (error) {
    card.textContent = 'Could not load data/apod.json. Open the page from its live link or a local preview.'
  }
}

showNasaData()
