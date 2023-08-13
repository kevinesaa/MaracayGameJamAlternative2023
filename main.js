


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

function screenToShow(screen) {

    currentScreen.screenObject.hideScreen();
    currentScreen =  screen;
    currentScreen.screenObject.showScreen();
}

function onIntroFinish() {
    
    SCREENS.INIT.screenObject.unsubscribeOnFinishVideo(onIntroFinish);
    screenToShow(SCREENS.MENU);
}

function showCredits() {
    screenToShow(SCREENS.CREDITS);
}

function mainInit() {
        
    Object.values(SCREENS).forEach(val => {
        val.screenObject.init();
        val.screenObject.hideScreen();
    }); 
    screenToShow(SCREENS.INIT);
    SCREENS.INIT.screenObject.subscribeOnFinishVideo(onIntroFinish);
    SCREENS.MENU.screenObject.subscribeOnShowCredits(showCredits);
    //SCREENS.CREDITS.screenObject.
    //SCREENS.GAME_PLAY.screenObject.
}



window.addEventListener("keydown",mainOnKeyButtonHandler);
window.onload = mainInit;