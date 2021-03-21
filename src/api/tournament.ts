import Round from './round';

export default class TournamentManager {

    json;
    rounds: Round[] = [];

    constructor(json_object) {
        this.json = json_object;

        let rounds = json_object.rounds;
        for (let i = 0; i<rounds.length; i++) {
            let round = new Round(rounds[i]);
            this.rounds.push(round);
        }

    }

}