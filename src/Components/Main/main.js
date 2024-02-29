import { mostrarImagenes } from '../../../main'

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

// document.addEventListener('DOMContentLoaded', cargarImagenesAleatorias);
