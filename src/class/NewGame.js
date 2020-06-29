import Player from "./Player";

//This adds player to playerlist array-----------------
export default class NewGame {
  constructor() {
    this.playerList = [];
  }
  addPlayer = (playerName) => {
    const playerId = this.playerList.length;
    this.playerList.push(new Player(playerName, playerId, Player));
    console.log(this.playerList);
  };
}
