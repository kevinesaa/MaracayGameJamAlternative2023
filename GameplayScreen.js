const ID_GAMEPLAY_SECTION_COMPONENT = "game_play_container";

class GameplayScreen {
    
    onBackToMenuScreenEventBus;

    KEYBOARD_CODES = {  BACK_MENU_SCREEN:"ESCAPE"};

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
        console.log("procesar boton en game play");
        console.log(event);
        const key = event.key.toUpperCase();
        if(key == this.KEYBOARD_CODES.BACK_MENU_SCREEN)
        {
            this.stop();
        }
    }

    subscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.subscribe(func);
    }

    unsubscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.unsubscribe(func);
    }

    start(players) {
        console.log("inicia la peli");
        console.log("recuerda inicializar todo");
        console.log(players);
    }

    stop() {
        console.log("detener todo antes de mandar al menu principal");
        this.onBackToMenuScreenEventBus.dispatch();
    }
}