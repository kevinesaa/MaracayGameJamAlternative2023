const ID_MENU_SECTION_COMPONENT = "main_menu_container";
const ID_PLAYER_CHECK_BASE = 'player_check_';
const PLAYER_ONE_JOIN_SOUND  = "./res/mainMenu/player_one_join.wav"; 
const MAIN_MENU_PATH_SONG = "./res/mainMenu/song.mp3"; 
const MAX_PLAYER_SUPPORT = 3;

class MenuScreen {
    
    onStartGameEventBus;
    onShowCreditsEventBus;

    KEYBOARD_CODES = {  
        START_GAME:"ENTER",
        GO_TO_CREDITS:"C",
        PLAYER_ONE_JOIN:"1",
        PLAYER_TWO_JOIN:"2",
        PLAYER_THREE_JOIN:"3",
    };

    playerChecks = Array.from({length: MAX_PLAYER_SUPPORT}).fill(0);
    menuScreenSection;
    menuScreenSectionCcsClass;
    audioController;

    constructor() {
        this.onStartGameEventBus = new EventBus();
        this.onShowCreditsEventBus = new EventBus();
        this.audioController = new AudioController();
    }

    init() {
        this.menuScreenSection = document.getElementById(ID_MENU_SECTION_COMPONENT);
        for(let i = 0; i < this.playerChecks.length; i++) {
            const playerHtmlId = `${ID_PLAYER_CHECK_BASE}${i}`;
            this.playerChecks[i] = document.getElementById(playerHtmlId);
        }
        
        this.menuScreenSectionCcsClass = this.menuScreenSection.style.display;
        this.audioController.init();
    }

    showScreen() {
        this.menuScreenSection.style.display = this.menuScreenSectionCcsClass; 
    }
    
    hideScreen() {
        this.menuScreenSection.style.display = HIDE_STYLE_CLASS;
        
    }

    onKeyButtonHandler(event) {
        
        const key = event.key.toUpperCase();
        if(key == this.KEYBOARD_CODES.PLAYER_ONE_JOIN)
        {
            const player1Check = this.playerChecks[0];
            player1Check.checked = !player1Check.checked;
            console.log("PLAYER ONE JOIN/UNJOIN")
            if(player1Check.checked) {
                this.audioController.play({path:PLAYER_ONE_JOIN_SOUND});
            }
            
        }
        if(key == this.KEYBOARD_CODES.PLAYER_TWO_JOIN)
        {
            const player2Check = this.playerChecks[1];
            player2Check.checked = !player2Check.checked;
            console.log("PLAYER TWO JOIN/UNJOIN")
            if(player2Check.checked) {
                this.audioController.play({ path:PLAYER_ONE_JOIN_SOUND });
            }
        }
        if(key == this.KEYBOARD_CODES.PLAYER_THREE_JOIN)
        {
            const player3Check = this.playerChecks[2];
            player3Check.checked = !player3Check.checked;
            console.log("PLAYER THREE JOIN/UNJOIN")
            if(player3Check.checked) {
                this.audioController.play({path:PLAYER_ONE_JOIN_SOUND});
            }
        }

        if(key == this.KEYBOARD_CODES.GO_TO_CREDITS)
        {
            this.onShowCredits();
            this.audioController.play({ path:PLAYER_ONE_JOIN_SOUND });
        }

        if(key == this.KEYBOARD_CODES.START_GAME)
        {
            this.onStartGame();
        }
    }

    subscribeOnShowCredits(func) {
        this.onShowCreditsEventBus.subscribe(func);
    }

    unsubscribeOnShowCredits(func) {
        this.onShowCreditsEventBus.unsubscribe(func);
    }

    onShowCredits() {
        this.onShowCreditsEventBus.dispatch();
    }

    subscribeOnStartGame(func) {
        this.onStartGameEventBus.subscribe(func);
    }

    unsubscribeOnStartGame(func) {
        this.onStartGameEventBus.unsubscribe(func);
    }

    onStartGame() {
        
        const players = [];
        
        for(let i = 0; i < this.playerChecks.length; i++) {
            const playerCheck = this.playerChecks[i];
            if(playerCheck.checked) {
                
                players.push(`player${i}`);
                playerCheck.checked = false;
            }
        }

        if(players.length <= 0) {
            console.log("NO HAY JUGADORES EN LA PARTIDA")
        }
        else {
            this.audioController.stopAllChannels();
            this.onStartGameEventBus.dispatch({players:players}/** enviar los jugadore que se unieron */);
        }

    }
}