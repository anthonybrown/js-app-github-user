import axios from 'axios';

const API_URL = `https://api.github.com/users`;

class Form {
  constructor(addCard, clearCards) {
    this.addCard = addCard;
    this.clearCards = clearCards;
    this.API_URL = '';
    this.searchTerm = '';
    this.searchInput = document.querySelector('input[name="search"]');
    this.searchInput.addEventListener('keyup', () => this.handleKeyUp(event));
    this.submitButton = document.querySelector('button[type="submit"]');
    this.submitButton.disabled = !this.searchTerm;

    this.clearButton = document.querySelector('button[type="button"]');
    this.clearButton.addEventListener('click', () => this.clearCards());

    this.form = document.querySelector('form');
    this.form.addEventListener('submit', () => this.handleSubmit(event));
  }
  handleKeyUp(e) {
    this.searchTerm = e.target.value.trim();
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    this.submitButton.disabled = !this.searchTerm;
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(event)
    axios
      .get(this.API_URL)
      .then(({ data }) => this.addCard(data))
      .catch((err) => this.formatError('Promise rejected', err));

    this.form.reset();
  }

  formatError(err) {
    console.error(err);
    const errorText = document.createElement('p');
    errorText.style.color = 'red';
    errorText.style.fontSize = '2rem';
    errorText.style.fontStyle = 'bold';
    errorText.innerText = 'No user found';
    this.form.appendChild(errorText);
    setTimeout(() => this.form.removeChild(errorText), 5000);
  }
}

export default Form;
