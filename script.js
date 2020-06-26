let actionCards = [
  {
    type: "action", name: "attack",
    type: "action", name: "future",
    type: "action", name: "favor",
    type: "action", name: "shuffle",
    type: "action", name: "skip",
    type: "action", name: "nope",
  },
];
let pictureCards = [
  {
    type: "picture", name: "zombie",
    type: "picture", name: "momma",
    type: "picture", name: "schrodinger",
    type: "picture", name: "bikini",
    type: "picture", name: "shy",
  },
];
let specialCards = [
  {
    type: "special" name: "defuse",
    type: "special" name: "explode",
  },
];

let fullDeck = actionCards.concat(specialCards, pictureCards);

let startGame = new newGame();
let player1 = new addPlayer("Jim");
let player2 = new addPlayer("Steve");

let newGame = () => {
  this.numberOfPlayers = [];
};

newGame.prototype.pushPlayer = (addPlayer) => {
  this.numberOfPlayers.push(addPlayer);
  addPlayer.id = this.numberOfPlayers.length;
  return this;
};

let addPlayer = (name) => {
  this.name = name;
  this.handSize = 0;
  this.id = null;
  return alert("Player " + this.name + " has been created");
};

startGame.pushPlayer(player1);
