export default class Player {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.hand = [];
  }

  addCardsToHand = (cards) => {
    this.hand.push(...cards);
  };

  viewHand = () => {
    return this.hand;
  };
}

//Player constructor
