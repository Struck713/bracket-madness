import Bracket from './bracket';

export default class Round {

    id: String;
    name: String;
    sequence: number;
    brackets: Bracket[] = [];

    constructor(json_object) {
        this.id = json_object.id;
        this.sequence = json_object.sequence;
        this.name = json_object.name;

        let bracketed = json_object.bracketed;
        for (let i = 0; i<bracketed.length; i++) {
            let bracket = new Bracket(bracketed[i]);
            this.brackets.push(bracket);
        }

    }

}