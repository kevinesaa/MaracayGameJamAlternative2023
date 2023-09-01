
class SimpleVotingSystem {
    
    optionsLength;
    playerVotesStatus;
    players;
    votes;
    maxVoted;

    constructor() {

    }
    
    static get DEFAULT_OPTION() {
        return -1;
    }
    
    setPlayers(players) {
        /** ["player0","player1","player2"] */
        this.players = players;
    }

    getPlayers() {
        return this.players;
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
                if(option < 0 && option >= this.optionsLength) {
                    console.log(`not valid index option`);
                }
                else {
                    this.playerVotesStatus[player] = option;
                    if(!this.votes.hasOwnProperty(option)) {
                        this.votes[option] = 0;
                    }
                    this.votes[option]++;
                    this.votes[SimpleVotingSystem.DEFAULT_OPTION]--;
                    if(this.maxVoted.index == SimpleVotingSystem.DEFAULT_OPTION) {
                        this.maxVoted.vote--;
                    }
                    
                    if(this.votes[option] > this.maxVoted.vote) {
                        
                        this.maxVoted = {
                            index: option, 
                            votes: this.votes[option]
                        };
                    }
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
        this.playerVotesStatus = {};
        this.votes = {};
        this.votes[SimpleVotingSystem.DEFAULT_OPTION] = this.players.length;
        this.maxVoted = { index: SimpleVotingSystem.DEFAULT_OPTION, votes: this.players.length };
        this.optionsLength = parseInt(optionsArrayLenght);
        for(let i = 0; i < this.players.length; i++) {
            const p = this.players[i];
            this.playerVotesStatus[p] = SimpleVotingSystem.DEFAULT_OPTION;
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    getWinnerOption() {
        
        const votes = Object.entries(this.votes)
            .map( (pair) => { return { key:pair[0], value:pair[1]} })
            .filter(el => el.value == this.maxVoted.votes);
        
        const winnerOption = votes[ this.getRandomInt(votes.length) ];
        
        return winnerOption.key;
    }
}