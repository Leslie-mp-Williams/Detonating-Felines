export default class FullDeck {
  constructor() {
    this.deck = [];
  }

  addCards = (Card, cardData) => {
    times(4)(() =>
      cardData.map((cardObj) => {
        const id = this.deck.length;
        const newCard = new Card(
          id,
          cardObj.type,
          cardObj.name,
          cardObj.amount
        );
        this.deck.push(newCard);
      })
    );
  };

  addExtras = (Card, cardData) => {
    cardData.map((cardObj) => {
      const id = this.deck.length;
      const newCard = new Card(id, cardObj.type, cardObj.name, cardObj.amount);
      this.deck.push(newCard);
    });
  };
}

const times = (x) => (f) => {
  if (x > 0) {
    f();
    times(x - 1)(f);
  }
};
