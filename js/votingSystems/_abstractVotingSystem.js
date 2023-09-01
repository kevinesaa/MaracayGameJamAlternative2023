
class VotingSystemAbstract {

    players;

    constructor() {
        if (new.target === VotingSystemAbstract) {
            throw new TypeError("Cannot construct AbstractClass instances directly");
        }
    }

    static get DEFAULT_OPTION() {
        return -1;
    }

    /** ["player0","player1","player2"] */
    setPlayers(players) {
        this.players = players;
    }

    getPlayers() {
        return this.players;
    }

    vote(player,option) {
        throw new Error("You must implement the abstractMethod");
    }

    setVotingOptions(optionsArrayLenght) {
        throw new Error("You must implement the abstractMethod");
    }

    getWinnerOption() {
        throw new Error("You must implement the abstractMethod");
    }
}