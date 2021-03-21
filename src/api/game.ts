import Team from './team';

export default class Game {

    id: String;
    name: String;
    status: Status;
    home_points: number;
    away_points: number;
    home_team: Team;
    away_team: Team;

    constructor(json_object) {
        this.id = json_object.id;
        this.name = json_object.title;
        this.status = json_object.status as Status;
        this.home_points = json_object.home_points;
        this.away_points = json_object.away_points;
        this.home_team = new Team(json_object.home);
        this.away_team = new Team(json_object.away);
    }

    get_winner = ():Team => {
        if (this.home_points >= this.away_points) {
            return this.home_team;
        }
        return this.away_team;
    }
 
}

export enum Status {

    CLOSED = "closed", 
    SCHEDULED = "scheduled", 
    TBD = "time-tbd"

}