


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
    showMainMenu();
}

function showCredits() {
    screenToShow(SCREENS.CREDITS);
}

function showMainMenu() {
    screenToShow(SCREENS.MENU);
}

function startGame(data) {
    screenToShow(SCREENS.GAME_PLAY);
    currentScreen.screenObject.subscribeOnBackToMenuScreen(showMainMenuFromGamePlay);
    currentScreen.screenObject.start(data);
}
function showMainMenuFromGamePlay() {
    currentScreen.screenObject.unsubscribeOnBackToMenuScreen(showMainMenuFromGamePlay);
    screenToShow(SCREENS.MENU);
}

function mainInit() {
        
    Object.values(SCREENS).forEach(val => {
        val.screenObject.init();
        val.screenObject.hideScreen();
    }); 
    screenToShow(SCREENS.INIT);
    SCREENS.INIT.screenObject.subscribeOnFinishVideo(onIntroFinish);
    SCREENS.CREDITS.screenObject.subscribeOnBackToMenuScreen(showMainMenu);
    SCREENS.MENU.screenObject.subscribeOnShowCredits(showCredits);
    SCREENS.MENU.screenObject.subscribeOnStartGame(startGame);
}



window.addEventListener("keydown",mainOnKeyButtonHandler);
window.onload = mainInit;
