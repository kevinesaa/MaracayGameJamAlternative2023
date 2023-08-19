const ID_GAMEPLAY_SECTION_COMPONENT = "game_play_container";

class GameplayScreen {
    
    onBackToMenuScreenEventBus;

    KEYBOARD_CODES = {  
        BACK_MENU_SCREEN:"ESCAPE" ,
        player1:{option0:"A",option1:"S",option3:"D" },
        player2:{option0:"J",option1:"K",option3:"L" },
        player3:{option0:"ARROWLEFT",option1:"ARROWDOWN",option3:"ARROWRIGHT" },
    };
    
    scenes=[{
            name:"escena0",
            sceneDuration: 10000, 
            timmerStartAt: 6000, 
            timmerDuration: 4000,
        },{
            name:"escena1",
            sceneDuration: 10000, 
            timmerStartAt: 6000, 
            timmerDuration: 4000,
        },{
            name:"escena2",
            sceneDuration: 10000, 
            timmerStartAt: 6000, 
            timmerDuration: 4000,
        },{
            name:"escena3",
            sceneDuration: 10000, 
            timmerStartAt: 6000, 
            timmerDuration: 4000,
        },{
            name:"escena4",
            sceneDuration: 10000, 
            timmerStartAt: 6000, 
            timmerDuration: 4000,
        }];

    isCountingVotes;
    currentSceneIndex;
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
        
        if(this.isCountingVotes) {
            console.log("NO SE ACEPTAN MÁS VOTOS");
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

                if(this.playerVotes[player]) {
                    console.log(`ya el ${player} voto`);
                }
                else {
                    this.playerVotes[player] = true;
                    this.players[player][option] = true;
                    this.players[player].defalutOption = false;
                }
            }
        }
    }

    loadScene() {
        const scene = this.scenes[this.currentSceneIndex];
        this.isCountingVotes = false;
        window.setTimeout(()=>{ this.showOptions(); },scene.timmerStartAt);
        window.setTimeout(()=>{ this.countVotes(); },scene.sceneDuration);
    }
    
    showOptions() {
        this.isCountingVotes = true;
        console.log("mostrando opciones");
    }

    countVotes() {
        console.log("contando votos");
        this.isCountingVotes = false;

        
    }

    subscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.subscribe(func);
    }

    unsubscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.unsubscribe(func);
    }

    start(data) {
        console.log("inicia la peli");
        this.currentSceneIndex = 0;
        this.players =  {};
        this.playerVotes = {};
        this.playersKeyMapping = data.players;
        for(let value of data.players) {
            this.players[value] = this.buildPlayerOption();
            this.playerVotes[value] = false;
        }
        this.loadScene();
    }

    stop() {
        console.log("detener todo antes de mandar al menu principal");
        this.onBackToMenuScreenEventBus.dispatch();
    }

    buildPlayerOption() {
        return {option0:false, option1:false, option2:false, defalutOption:true };
    }
}