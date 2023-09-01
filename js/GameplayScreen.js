const ID_GAMEPLAY_SECTION_COMPONENT = "game_play_container";
const ID_GAMEPLAY_IMAGE_COMPONENT = "image_game_play";
const ID_GAMEPLAY_VIDEO_COMPONENT = "video_game_play";
const GAME_PLAY_SONG="./res/gameplay/song.mp3";


class GameplayScreen {
    
    abstractVotingSystem;
    audioController;
    gameplaySubtitlesController;
    gameplayOptionsController;
    gameplayTimerBarController;
    onBackToMenuScreenEventBus;
    onMovieEndEventBus;

    KEYBOARD_CODES = {  
        BACK_MENU_SCREEN:"ESCAPE" ,
        player0:{"0":"A","1":"S","2":"D" },
        player1:{"0":"J","1":"K","2":"L" },
        player2:{"0":"ARROWLEFT","1":"ARROWDOWN","2":"ARROWRIGHT" },
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
    
    
    playersIds;
    gamePlayScreenSection;
    gamePlayScreenSectionCcsClass;

    showOptionsRunnableWrapper;
    changeSceneRunnableWrapper;
    endMovieRunnableWrapper;
    
    constructor(gameplayScreenSetup) {
        this.abstractVotingSystem = gameplayScreenSetup.votingSystem;
        this.onBackToMenuScreenEventBus = new EventBus();
        this.onMovieEndEventBus = new EventBus();
        this.gameplayOptionsController = new GameplayOptionsController();
        this.audioController = new AudioController();
        this.gameplayTimerBarController = new GameplayTimerBarController();
        this.gameplaySubtitlesController = new GameplaySubtitlesController();
        this.showOptionsRunnableWrapper = new DelayTimeRunnableWrapper(()=>{ this.showOptions(); });
        this.changeSceneRunnableWrapper = new DelayTimeRunnableWrapper(()=>{ this.countVotes(); });
        this.endMovieRunnableWrapper = new DelayTimeRunnableWrapper(()=>{ this.onMovieEnd(); });
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
        this.audioController.init();
        this.gameplayOptionsController.init();
        this.gameplayTimerBarController.init();
        this.gameplaySubtitlesController.init();
        //this.gameplayTimerBarController.
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

        for(let player of this.playersIds) {
            const playerKeyboard = this.KEYBOARD_CODES[player];
            let option = null;
            for(let k of Object.keys(playerKeyboard)) {
                if(playerKeyboard[k] == keyboardKey) {
                    option = k;
                    break;
                }
            }
            
            if(option != null) {
                
                this.abstractVotingSystem.vote(player,option);
                break;
            }
        }
    }

    loadScene() {
        const scene = this.scenes[this.currentSceneIndex];
        console.log("scena by name: ");
        console.log(scene.name);
        console.log("scena by id: ");
        console.log(scene.id);
        console.log("scena by index: ");
        console.log(scene.index);
        
        this.gameplaySubtitlesController.reset();
        this.gameplaySubtitlesController.start(scene.substitles.map(c => c.text + "<br>"), 500);
        
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
        
        this.isOptionsOnScreen = false;
        this.isCountingVotes = false;
        this.hideOptions();
        if(scene.children == null) {
            
            this.endMovieRunnableWrapper.execute(scene.sceneDuration);
            return;
        }
        
        
        this.abstractVotingSystem.setVotingOptions(scene.children.length);
        this.showOptionsRunnableWrapper.execute(scene.timmerStartAt);
        this.changeSceneRunnableWrapper.execute(scene.sceneDuration);
    }
    
    showOptions() {
        this.isOptionsOnScreen = true;
        console.log("mostrando opciones");
        const scene = this.scenes[this.currentSceneIndex];
        this.gameplayOptionsController.showOptions(scene.children.map(c => c.text));
        this.gameplayTimerBarController.reset();
        this.gameplayTimerBarController.start(scene.timmerDuration);
    }

    hideOptions() {
        this.gameplayOptionsController.hideOptions();
    }

    countVotes() {
        console.log("contando votos");
        this.isCountingVotes = true;
        
        const currentScene = this.scenes[this.currentSceneIndex];
        let winnerOption = this.abstractVotingSystem.getWinnerOption();
        if(winnerOption != -1) {
            winnerOption = currentScene.children[winnerOption];
        }
        else {
            winnerOption = currentScene.defalutOption;
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
    
    start(data) {
        console.log("inicia la peli");
        this.currentSceneIndex = 0;
        this.scenes = data.scenes;
        this.playersIds = data.players;
        this.abstractVotingSystem.setPlayers(data.players);
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
        this.stopVideoGamePlay();
        this.showOptionsRunnableWrapper.interrupt();
        this.changeSceneRunnableWrapper.interrupt();
        this.endMovieRunnableWrapper.interrupt();
        this.gameplaySubtitlesController.stop();
        this.audioController.stopAllChannels();
        this.onBackToMenuScreenEventBus.dispatch();
    }

    onMovieEnd() {
        console.log("se termino la peli");
        this.showOptionsRunnableWrapper.interrupt();
        this.changeSceneRunnableWrapper.interrupt();
        this.gameplaySubtitlesController.stop();
        this.audioController.stopAllChannels();
        this.onMovieEndEventBus.dispatch();
    }

    subscribeOnMovieEnd(func) {
        this.onMovieEndEventBus.subscribe(func);
    }

    unsubscribeOnMovieEnd(func) {
        this.onMovieEndEventBus.unsubscribe(func);
    }

    
}