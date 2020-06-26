export default class NewGame {
  constructor() {
    this.numberOfPlayers = [];
  }
  addPlayer = (playerName) => {
    const playerId = this.numberOfPlayers.length;
    this.numberOfPlayers.push(new Player(playerName, playerId));
    console.log(this.numberOfPlayers);
  };
}
