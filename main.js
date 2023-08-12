


const SCREENS =  Object.freeze({  
    INIT:{name:"init", screenObject: new UnloadAutoPlayScreen() },
    MENU:{name:"menu", screenObject: new MenuScreen() },
    CREDITS:{name:"credits", screenObject: new CreditsScreen() }, 
    GAME_PLAY:{name:"gamePlay", screenObject: new GameplayScreen() },
});

let currentScreen = SCREENS.INIT;

function mainOnKeyButtonHandler(event) {

    const screen = currentScreen.screenObject
    screen.onKeyButtonHandler(event);
}

function onIntroFinish() {
    SCREENS.INIT.screenObject.unsubscribeOnFinishVideo(onIntroFinish);
    currentScreen =  SCREENS.MENU;
}

function mainInit() {
        
    Object.values(SCREENS).forEach(val => {
        val.screenObject.init();
    }); 
    
    SCREENS.INIT.screenObject.subscribeOnFinishVideo(onIntroFinish);
}



window.addEventListener("keydown",mainOnKeyButtonHandler);
window.onload = mainInit;