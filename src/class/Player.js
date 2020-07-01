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

  viewInfo = () => {
    return {
      id: this.id,
      name: this.name,
      hand: this.hand,
    };
  };
}

//Player constructor
