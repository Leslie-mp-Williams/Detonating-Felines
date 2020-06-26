let actionCards = [
  {
    action: "attack",
    action: "future",
    action: "favor",
    action: "shuffle",
    action: "skip",
    action: "nope",
  },
];
let pictureCards = [
  {
    picture: "zombie",
    picture: "momma",
    picture: "schrodinger",
    picture: "bikini",
    picture: "shy",
  },
];
let specialCards = [
  {
    special: "defuse",
    special: "explode",
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
