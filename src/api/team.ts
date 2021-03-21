export default class Team {

    name: String;
    alias: String;
    id: String;
    seed: number;

    constructor(json_object) {
        this.name = json_object.name;
        this.alias = json_object.alias;
        this.id = json_object.id;
        this.seed = json_object.seed;
    }

}
