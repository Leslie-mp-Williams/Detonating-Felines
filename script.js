let actionCards = [
  {
    attack: "attack",
    future: "future",
    favor: "favor",
    shuffle: "shuffle",
    skip: "skip",
    nope: "nope",
  },
];
let pictureCards = [
  {
    zombie: "zombie",
    momma: "momma",
    schrod: "schrodinger",
    bikini: "bikini",
    shy: "shy",
  },
];
let specialCards = [
  {
    defuse: "defuse",
    explode: "explode",
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
