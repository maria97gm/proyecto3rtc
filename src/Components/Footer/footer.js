import { arrayFooter } from '../../../utils/arrayFooter'
import './footer.css'

export const createFooter = () => {
  const myFooter = document.querySelector('footer')
  for (const element of arrayFooter) {
    const elementFooter = document.createElement('a')
    elementFooter.textContent = element.item
    elementFooter.href = element.url
    elementFooter.target = '_blank'
    myFooter.appendChild(elementFooter)
  }
}

createFooter()
