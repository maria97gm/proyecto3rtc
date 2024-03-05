// header.js
import './header.css'

export const createHeader = () => {
  const header = document.querySelector('header')
  header.innerHTML = `
  <a href="https://mariagomez-proyecto3rtc.netlify.app/">
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="logo Pinterest">
</a>
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
}

const createNavLink = (text, href) =>
  href === '#'
    ? `<li><a href="${href}">${text}</a></li>`
    : `<li><a href="${href}" target="_blank">${text}</a></li>`
