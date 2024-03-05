import {
  cargarImagenesAleatorias,
  busqueda,
  busquedaFallida
} from './src/Components/Main/main'
import { arrayFooter } from './utils/arrayFooter'
import { createFooter } from './src/Components/Footer/footer'
import { createHeader } from './src/Components/Header/header'

const accesKey = 'Bg7gJeqZ0d-Nlux2CMLwLDhIdO2Wqf0x-J6cDEmJM-4'

export const realizarBusqueda = (textoBusqueda) => {
  fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${textoBusqueda}&client_id=${accesKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.results || data.results.length === 0) {
        busquedaFallida()
        
      } else {
        mostrarImagenes(data.results)
      }
    })
    .catch((error) => {})
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
