import NewGame from "./NewGame";
import Player from "./Player";

export default class FullDeck {
  constructor() {
    this.deck = [];
  }
  //Adds cards with quantity of 4 to deck
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
  //Adds extra cards (one of each) with quantity of 5 to deck
  addExtras = (Card, cardData) => {
    cardData.map((cardObj) => {
      const id = this.deck.length;
      const newCard = new Card(id, cardObj.type, cardObj.name, cardObj.amount);
      this.deck.push(newCard);
    });
  };
  //Shuffles the deck
  shuffle = () => {
    var m = this.deck.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
  };

  //This is the splice from the FullDeck to give initial handsize of 4
  dealCards = () => {
    return this.deck.splice(0, 4);
  };
}

//Algorithm for the shuffle
const times = (x) => (f) => {
  if (x > 0) {
    f();
    times(x - 1)(f);
  }
};

///deal cards to players, splicing from deck and pushing to new player arrays
