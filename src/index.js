import Form from './Form';
import CardList from './CardList';
class App {
  constructor() {
    this.cards = [];
    this.addCard = this.addCard.bind(this);
  }

  addCard(data) {
    this.cards = [...this.cards, data];

    CardList(this.cards);
  }
}

const app = new App();
const form = new Form(app.addCard);

export const render = (html, node) => (node.innerHTML = html);
