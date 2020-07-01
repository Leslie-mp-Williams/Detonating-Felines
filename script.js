import { actionCards, actionCards2, pictureCards } from './metadata';
import Card from './src/class/Card';
import FullDeck from './src/class/FullDeck';
import Player from './src/class/Player';

const deck = new FullDeck();
const players = [];

const addPlayer = () => {
  const id = players.length;
  const name = document.getElementById('nameinput').value;
  const newPlayer = new Player(name, id);

  newPlayer.addCardsToHand(deck.dealCards());
  players.push({ ...newPlayer });
};

const newGame = () => {
  addPlayer();
  console.log(players[0].viewHand());
};

let btnEvtHandler = () => {
  addPlayer(name);
};

let newGameBtnEvtHandler = () => {
  newGame();
};

window.addEventListener('load', () => {
  deck.addCards(Card, actionCards);
  deck.addCards(Card, pictureCards);
  deck.addExtras(Card, actionCards2);
  deck.shuffle();

  document
    .getElementById('button')
    .addEventListener('click', btnEvtHandler, false);
  document
    .getElementById('newGame')
    .addEventListener('click', newGameBtnEvtHandler, false);
});
