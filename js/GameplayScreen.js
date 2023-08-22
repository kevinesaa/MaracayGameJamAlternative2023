const ID_GAMEPLAY_SECTION_COMPONENT = "game_play_container";
const ID_GAMEPLAY_IMAGE_COMPONENT = "image_game_play";
const ID_GAMEPLAY_VIDEO_COMPONENT = "video_game_play";

class GameplayScreen {
    
    gameplayOptionsController;
    gameplayTimerBarController;
    onBackToMenuScreenEventBus;
    onMovieEndEventBus;

    KEYBOARD_CODES = {  
        BACK_MENU_SCREEN:"ESCAPE" ,
        player1:{option0:"A",option1:"S",option2:"D" },
        player2:{option0:"J",option1:"K",option2:"L" },
        player3:{option0:"ARROWLEFT",option1:"ARROWDOWN",option2:"ARROWRIGHT" },
    };
    
    imageView;
    imageViewClassCss;
    
    shouldPlayVideo = false;
    videoView;
    videoViewClassCss;

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
        this.onMovieEndEventBus = new EventBus();
        this.gameplayOptionsController = new GameplayOptionsController();
        this.gameplayTimerBarController = new GameplayTimerBarController();
    }

    init() {
        this.gamePlayScreenSection = document.getElementById(ID_GAMEPLAY_SECTION_COMPONENT);
        this.gamePlayScreenSectionCcsClass = this.gamePlayScreenSection.style.display;
        this.imageView = document.getElementById(ID_GAMEPLAY_IMAGE_COMPONENT);
        this.imageViewClassCss = this.imageView.style.display;
        this.videoView = document.getElementById(ID_GAMEPLAY_VIDEO_COMPONENT);
        //https://github.com/elan-ev/opencast-studio/issues/581
        this.videoView.addEventListener("loadeddata",() => { 
            if(this.shouldPlayVideo) {
                this.videoView.play();
            }
        });

        this.videoViewClassCss = this.videoView.style.display;
        this.gameplayOptionsController.init();
        this.gameplayTimerBarController.init();
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
        if(TYPES.IMAGEN == scene.mediaType)
        {
            this.stopVideoGamePlay();
            this.videoView.style.display = HIDE_STYLE_CLASS;
            this.imageView.style.display = this.imageViewClassCss;
            this.imageView.src = scene.mediaPath;
        }

        if(TYPES.VIDEO == scene.mediaType)
        {
            this.imageView.style.display = HIDE_STYLE_CLASS;
            this.videoView.style.display = this.videoViewClassCss;
            this.videoView.src = scene.mediaPath;
            this.videoView.currentTime = 0;
            this.playVideoGamePlay();
        }
        
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
        this.gameplayOptionsController.showOptions(scene.children.map(c => c.text));
        this.gameplayTimerBarController.start(scene.timmerDuration);
    }

    hideOptions() {
        this.gameplayOptionsController.hideOptions();
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
        this.loadScene();
    }

    playVideoGamePlay() {
        this.shouldPlayVideo = true;
        this.videoView.load();
    }

    stopVideoGamePlay() {
        this.shouldPlayVideo = false;
        this.videoView.load();
    }

    stop() {
        console.log("detener todo antes de mandar al menu principal");
        if (!this.videoView.paused) {
            this.videoView.pause();
            this.videoView.currentTime = 0;
        }
        
        this.onBackToMenuScreenEventBus.dispatch();
    }

    onMovieEnd() {
        console.log("se termino la peli");
        this.onMovieEndEventBus.dispatch();
    }

    subscribeOnMovieEnd(func) {
        this.onMovieEndEventBus.subscribe(func);
    }

    unsubscribeOnMovieEnd(func) {
        this.onMovieEndEventBus.unsubscribe(func);
    }

    buildPlayerOption() {
        return {option0:false, option1:false, option2:false, defalutOption:true };
    }
}