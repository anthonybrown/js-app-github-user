import axios from 'axios'

const API_URL = `https://api.github.com/users`

class Form {
  constructor(addCard) {
    this.addCard = addCard;

    this.API_URL = ''

    this.searchTerm = ''
    this.searchInput = document.querySelector('input[name="search"]')
    this.searchInput.addEventListener('keyup', () => this.handleKeyUp(event))
    this.submitButton = document.querySelector('button[type="submit"]')
    this.submitButton.disabled = !this.searchTerm

    this.form = document.querySelector('form')
    this.form.addEventListener('submit', () => this.handleSubmit(event))
  }
  handleKeyUp(event) {
    this.searchTerm = event.target.value.trim()
    this.API_URL = `${API_URL}/${this.searchTerm}`
    this.submitButton.disabled = !this.searchTerm
  }

  handleSubmit(event) {
    event.preventDefault()
    // console.log(event)
    axios
      .get(this.API_URL)
      .then(({ data }) => this.addCard(data))
      .catch((err) => console.error('Promise rejected', err))
      
    this.form.reset()
  }
}

export default Form
