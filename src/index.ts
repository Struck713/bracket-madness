import { get_data } from './util/utils'
import env from '../env.json'
import TournamentManager from './api/tournament';
import { Status } from './api/game';

main();

async function main() {
    let data = await get_data();
    let tm: TournamentManager = new TournamentManager(data);

    tm.rounds.forEach(round => {
        console.log(`${round.name}:`);
        round.brackets.forEach(bracket => {
            console.log(`- ${bracket.name}`);
            bracket.games.forEach(game => {
                if (game.status === Status.CLOSED) {
                    console.log(`  - ${game.name} > ${game.home_team.name} vs. ${game.away_team.name}: ${game.get_winner().name} won.`);
                    return;
                }

                console.log(`  - ${game.name} > This game has yet to be played. (${game.status})`);
            })
        })
    })

}