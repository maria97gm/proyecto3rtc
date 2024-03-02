// header.js
import './header.css'

export const createHeader = () => {
  const header = document.querySelector('header')
  header.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="logo Pinterest">
    <input type="text" class="input-ppal">
    <nav>
      <ul>
        ${createNavLink('Explorar', 'https://www.pinterest.es/ideas/')}
        ${createNavLink('Hoy en pinterest', 'https://www.pinterest.es/today/')}
        ${createNavLink('Registro', '#')}
        ${createNavLink('Iniciar sesión', '#')}
      </ul>
    </nav>
  `

  return header
}

const createNavLink = (text, href) => {
  return `<li><a href="${href}" target="_blank">${text}</a></li>`
}
