import { mostrarImagenes, realizarBusqueda } from '../../../main'

const numRandomImages = 15
const accesKey = 'Bg7gJeqZ0d-Nlux2CMLwLDhIdO2Wqf0x-J6cDEmJM-4'

export const cargarImagenesAleatorias = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=${numRandomImages}&client_id=${accesKey}`
    )
    const imagenesAleatorias = await response.json()
    mostrarImagenes(imagenesAleatorias)
  } catch (error) {}
}

cargarImagenesAleatorias()

export const busqueda = () => {
  const input = document.querySelector('.input-ppal')

  input.placeholder = `¿Qué estás buscando?`

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const textoBusqueda = input.value
      const divImg = document.querySelector('#busqueda')
      divImg.innerHTML = ''

      if (textoBusqueda === '') {
        cargarImagenesAleatorias()
      } else {
        realizarBusqueda(textoBusqueda)
      }
    }
  })

  const header = document.querySelector('header')
  header.appendChild(input)
}

export const busquedaFallida = () => {
  const aviso = document.createElement('h3')
  const divImg = document.querySelector('#busqueda')

  aviso.textContent = `No se encontraron resultados para tu búsqueda.  Vuelve a intentarlo por ejemplo con "perritos"`
  divImg.appendChild(aviso)
}
