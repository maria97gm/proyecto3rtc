import { cargarImagenesAleatorias } from './src/Components/Main/main'
import { arrayFooter } from './utils/arrayFooter'
import { createFooter } from './src/Components/Footer/footer'
import { createHeader } from './src/Components/Header/header'

const accesKey = 'Bg7gJeqZ0d-Nlux2CMLwLDhIdO2Wqf0x-J6cDEmJM-4'

const realizarBusqueda = (textoBusqueda) => {
  fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${textoBusqueda}&client_id=${accesKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      mostrarImagenes(data.results)
    })
    .catch((error) => {})
}

const busqueda = () => {
  const input = document.querySelector('.input-ppal')

  input.placeholder = `¿Qué estás buscando?`

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const textoBusqueda = input.value
      const divImg = document.querySelector('#busqueda')
      divImg.innerHTML = ''

      if (textoBusqueda === '') {
        const aviso = document.createElement('h3')
        aviso.textContent =
          'No has realizado ninguna búsqueda. Vuelve a intentarlo por ejemplo con "perritos"'
        divImg.appendChild(aviso)
      } else {
        realizarBusqueda(textoBusqueda)
      }
    }
  })

  const header = document.querySelector('header')
  header.appendChild(input)

  return input
}

// Función para mostrar las imágenes cuando alguien hace una búsqeda
export const mostrarImagenes = (imagenes) => {
  const divImg = document.querySelector('#busqueda')

  divImg.innerHTML = ''

  imagenes.forEach((imagen) => {
    const imgElement = document.createElement('img')
    imgElement.src = imagen.urls.regular
    imgElement.alt = imagen.alt_description

    divImg.appendChild(imgElement)
  })
}

createHeader()
busqueda()
