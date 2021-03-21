import Game from './game';

export default class Bracket {

    id: String;
    name: String;
    rank: number;
    games: Game[] = [];

    constructor(json_object) {
        let bracket = json_object.bracket;
        this.id = bracket.id;
        this.name = bracket.name;
        this.rank = bracket.rank;

        let games = json_object.games;
        for (let i = 0; i<games.length; i++) {
            let game = new Game(games[i]);
            this.games.push(game);
        }

    }

}