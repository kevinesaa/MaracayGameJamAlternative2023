
class SimpleVotingSystem {
    
    optionsLength;
    playerVotesStatus;
    players;

    constructor() {

    }

    setPlayers(players) {
        /** ["player0","player1","player2"] */
        this.players = players;
        this.playerVotesStatus = {};
        
    }

    vote(player,option) {
        console.log("opcion seleccionada");
        console.log(`${player}: ${option}`);
        const status = this.playerVotesStatus[player];
        if(status >= 0 ) {
            console.log(`ya el player con id '${player}' voto`);
        }
        else {
            try {
                
                option = parseInt(option)
                if(option >= this.optionsLength) {
                    console.log(`not valid index option`);
                }
                else {
                    this.playerVotesStatus[player] = option;
                }
            }
            catch(err) {
                console.error("Fallo al intentar parsear la opcion seleccionada");
                console.error(err);
            }
        }
    }

    setVotingOptions(optionsArrayLenght) {
        /** 3 */
        this.optionsLength = parseInt(optionsArrayLenght);
        for(let i = 0; i < this.players.length; i++) {
            const p = this.players[i];
            this.playerVotesStatus[p] = -1;
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    getWinnerOption() {
        let votes = {};
        let max = 0;
        for(let i = 0; i < this.players.length; i++) {
            /** player */
            const p = this.players[i];
            /** vote */
            const v = this.playerVotesStatus[p];
            if(!votes.hasOwnProperty(v)) {
                votes[v] = 0;
            }
            votes[v]++;
            if(votes[v] > max)
            {
                max = votes[v];
            }
        }

        votes = Object.entries(votes)
            .map( (pair) => { return { key:pair[0], value:pair[1]} })
            .filter(el => el.value == max);
        
        const winnerOption = votes[ this.getRandomInt(votes.length) ];
        
        return winnerOption.key;
    }
}