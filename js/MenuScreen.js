const ID_MENU_SECTION_COMPONENT = "main_menu_container";
const MAIN_MENU_PATH_SONG = "./res/mainMenu/SONG.mp3"; 

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
        this.menuScreenSectionCcsClass = this.menuScreenSection.style.display;
        this.audioController.init();
    }

    showScreen() {
        this.menuScreenSection.style.display = this.menuScreenSectionCcsClass;
        this.audioController.play({ 
            channelIndex:0,
            path:MAIN_MENU_PATH_SONG,
            loop: true
        });
    }
    
    hideScreen() {
        this.menuScreenSection.style.display = HIDE_STYLE_CLASS;
        this.audioController.stopChannelByIndex(0);
    }

    onKeyButtonHandler(event) {
        
        const key = event.key.toUpperCase();
        if(key == this.KEYBOARD_CODES.PLAYER_ONE_JOIN)
        {
            const player1Check = document.getElementById("player1_check");
            player1Check.checked = !player1Check.checked;
            console.log("PLAYER ONE JOIN/UNJOIN")
        }
        if(key == this.KEYBOARD_CODES.PLAYER_TWO_JOIN)
        {
            const player2Check = document.getElementById("player2_check");
            player2Check.checked = !player2Check.checked;
            console.log("PLAYER TWO JOIN/UNJOIN")
        }
        if(key == this.KEYBOARD_CODES.PLAYER_THREE_JOIN)
        {
            const player3Check = document.getElementById("player3_check");
            player3Check.checked = !player3Check.checked;
            console.log("PLAYER THREE JOIN/UNJOIN")
        }

        if(key == this.KEYBOARD_CODES.GO_TO_CREDITS)
        {
            this.onShowCredits();
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
        
        for(let i=0; i < 3; i++)
        {
            const k = i+1;
            const playerKey = `player${k}_check`;
            const playerCheck = document.getElementById(playerKey);
            if(playerCheck.checked) {
                
                players.push(`player${k}`);
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