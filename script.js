import { actionCards, actionCards2, pictureCards } from './metadata';
import NewGame from './src/class/NewGame';
import Card from './src/class/Card';
import FullDeck from './src/class/FullDeck';
import Player from './src/class/Player';

const newGame = new NewGame();
const deck = new FullDeck();
const newPlayer = new Player();

//Takes input from textbox, turns it into username
let nameInput = document.getElementById('nameinput');

window.addEventListener('load', () => {
  document
    .getElementById('button')
    .addEventListener('click', btnEvtHandler, false);
});
//Button to add username and join game
let btnEvtHandler = () => {
  const playerName = nameInput.value;
  newGame.addPlayer(playerName);
};

deck.addCards(Card, actionCards);
deck.addCards(Card, pictureCards);
deck.addExtras(Card, actionCards2);
deck.shuffle();

//This is where I am currently, 4 cards spliced from FullDeck
console.log(deck.dealCards());

newPlayer.addCardsToHand(deck.dealCards());
console.log('Our Hand!!!!', newPlayer.viewHand());
