export default class FullDeck {
  constructor() {
    this.deck = [];
  }
  addCards = (Card, cardData) => {
    cardData.map((cardObj) => {
      const id = this.deck.length();
      const newCard = new Card(cardObj.name, id);

      this.deck.push(newCard);
    });
  };
}
