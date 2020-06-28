import {
  actionCards,
  actionCards2,
  pictureCards,
  specialCards,
} from "./metadata";
import NewGame from "./src/class/NewGame";
import Card from "./src/class/Card";
import Player from "./src/class/Player";
import FullDeck from "./src/class/FullDeck";
import PlayerHand from "./src/class/PlayerHand";

const newGame = new NewGame();
const deck = new FullDeck();

let nameInput = document.getElementById("nameinput");

window.addEventListener("load", () => {
  document
    .getElementById("button")
    .addEventListener("click", btnEvtHandler, false);
});

let btnEvtHandler = () => {
  const playerName = nameInput.value;
  newGame.addPlayer(playerName);
};

deck.addCards(Card, actionCards);
deck.addCards(Card, pictureCards);
deck.addExtras(Card, actionCards2);
