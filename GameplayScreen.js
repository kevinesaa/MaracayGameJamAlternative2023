const ID_GAMEPLAY_SECTION_COMPONENT = "game_play_container";

class GameplayScreen {
    
    onBackToMenuScreenEventBus;

    KEYBOARD_CODES = {  
        BACK_MENU_SCREEN:"ESCAPE" ,
        player1:{option0:"A",option1:"S",option3:"D" },
        player2:{option0:"J",option1:"K",option3:"L" },
        player3:{option0:"ARROWLEFT",option1:"ARROWDOWN",option3:"ARROWRIGHT" },
    };
    
    players;
    playerVotes;
    playersKeyMapping;
    gamePlayScreenSection;
    gamePlayScreenSectionCcsClass;
    
    constructor() {
        this.onBackToMenuScreenEventBus = new EventBus();
    }

    init() {
        this.gamePlayScreenSection = document.getElementById(ID_GAMEPLAY_SECTION_COMPONENT);
        this.gamePlayScreenSectionCcsClass = this.gamePlayScreenSection.style.display;
    }

    showScreen() {
        this.gamePlayScreenSection.style.display = this.gamePlayScreenSectionCcsClass;
    }
    
    hideScreen() {
        this.gamePlayScreenSection.style.display = HIDE_STYLE_CLASS;
    }

    onKeyButtonHandler(event) {
        const keyboardKey = event.key.toUpperCase();
        if(keyboardKey == this.KEYBOARD_CODES.BACK_MENU_SCREEN)
        {
            this.stop();
            return;
        }
        
        for(let player of this.playersKeyMapping) {
            const playerKeyboard = this.KEYBOARD_CODES[player];
            let option = null;
            for(let k of Object.keys(playerKeyboard)) {
                if(playerKeyboard[k] == keyboardKey) {
                    option = k;
                    break;
                }
            }
            
            if(option != null) {
                console.log("opcion seleccionada");
                console.log(`${player}: ${option}`);
            }
        }
    }

    subscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.subscribe(func);
    }

    unsubscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.unsubscribe(func);
    }

    start(data) {
        console.log("inicia la peli");
        console.log("recuerda inicializar todo");
        console.log(data);
        this.players =  {};
        this.playerVotes = {};
        this.playersKeyMapping = data.players;
        for(let value of data.players) {
            this.players[value] = this.buildPlayerOption();
            this.playerVotes[value] = false;
        }
        
    }

    stop() {
        console.log("detener todo antes de mandar al menu principal");
        this.onBackToMenuScreenEventBus.dispatch();
    }

    buildPlayerOption() {
        return {option0:false, option1:false, option2:false, defalutOption:true };
    }
}