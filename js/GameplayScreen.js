const ID_GAMEPLAY_SECTION_COMPONENT = "game_play_container";

class GameplayScreen {
    
    onBackToMenuScreenEventBus;

    KEYBOARD_CODES = {  
        BACK_MENU_SCREEN:"ESCAPE" ,
        player1:{option0:"A",option1:"S",option3:"D" },
        player2:{option0:"J",option1:"K",option3:"L" },
        player3:{option0:"ARROWLEFT",option1:"ARROWDOWN",option3:"ARROWRIGHT" },
    };
    
    scenes = [];
    isOptionsOnScreen;
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

        if(!this.isOptionsOnScreen) {
            console.log("TODAVIA NO HA EMPEZADO LA VOTACION");
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
        console.log(scene.name);
        this.isCountingVotes = false;
        this.isOptionsOnScreen = false;
        this.hideOptions();
        if(scene.children == null) {
            // cancelar set timeout cuando se haga un stop, cómo se hace???
            window.setTimeout(()=>{ this.onMovieEnd(); },scene.sceneDuration);
            return;
        }
        
        for(let player of this.playersKeyMapping) {
            this.players[player] = this.buildPlayerOption();
            this.playerVotes[player] = false;
        }
        // cancelar set timeout cuando se haga un stop, cómo se hace???
        window.setTimeout(()=>{ this.showOptions(); },scene.timmerStartAt);
        window.setTimeout(()=>{ this.countVotes(); },scene.sceneDuration);
    }
    
    showOptions() {
        this.isOptionsOnScreen = true;
        console.log("mostrando opciones");
        const scene = this.scenes[this.currentSceneIndex];
        console.log(scene.children[0].text);
        console.log(scene.children[1].text);
        console.log(scene.children[2].text);
    }

    hideOptions() {
        console.log("ocultar opciones");
    }

    countVotes() {
        console.log("contando votos");
        this.isCountingVotes = true;
        let votes = {};
        let maxVoteCount = 0;
        //contando votos
        for(let player of this.playersKeyMapping) {

            for(let opcion of Object.keys(this.players[player]) ) {
                
                if(!votes.hasOwnProperty(opcion)) {
                    votes[opcion] = 0;
                }

                if(this.players[player][opcion]){
                    votes[opcion]++;
                    if(votes[opcion] > maxVoteCount)
                    {
                        maxVoteCount = votes[opcion];
                    }
                    break;
                }
            }
        }

        
        votes = Object.entries(votes)
            .map( (pair) => { return { key:pair[0], value:pair[1]} })
            .filter(el => el.value == maxVoteCount);
        
        let winnerOption = votes[ this.getRandomInt(votes.length) ];
        //si es la opción por default
        const currentScene = this.scenes[this.currentSceneIndex];
        if(currentScene[winnerOption.key] != null) {
            winnerOption = currentScene[winnerOption.key];
        }
        else {

            let childIndex =  winnerOption.key.charAt(winnerOption.key.length - 1);
            childIndex = parseInt(childIndex);
            winnerOption = currentScene.children[childIndex];
        }
        this.currentSceneIndex = winnerOption.index;
        this.loadScene();
    }

    subscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.subscribe(func);
    }

    unsubscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.unsubscribe(func);
    }
    
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    start(data) {
        console.log("inicia la peli");
        this.scenes = data.scenes;
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

    onMovieEnd() {
        console.log("se termino la peli");
        //this.onBackToMenuScreenEventBus.dispatch();
    }

    buildPlayerOption() {
        return {option0:false, option1:false, option2:false, defalutOption:true };
    }
}