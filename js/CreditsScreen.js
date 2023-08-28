const ID_CREDITS_SECTION_COMPONENT = "credits_container";
const CREDITS_PATH_SONG = "./res/credits/song.mp3"; 
const CREDITS_SOUND  = "./res/credits/audio_white.lnk"; 


class CreditsScreen {
    
    onBackToMenuScreenEventBus;
    KEYBOARD_CODES = {  BACK_MENU_SCREEN:"B"};
    creditsSection;
    creditsSectionCssClass;
    audioController;

    constructor() {
        this.onBackToMenuScreenEventBus = new EventBus();
        this.audioController = new AudioController();
    }

    init() {
        this.creditsSection = document.getElementById(ID_CREDITS_SECTION_COMPONENT);
        this.creditsSectionCssClass = this.creditsSection.style.display;
        this.audioController.init();
    }
    
    showScreen() {
        this.creditsSection.style.display = this.creditsSectionCssClass;
    }
    
    hideScreen() {
        this.creditsSection.style.display = HIDE_STYLE_CLASS;
        this.audioController.stopAllChannels();
    }

    onKeyButtonHandler(event) {
        const key = event.key.toUpperCase();
        if(key == this.KEYBOARD_CODES.BACK_MENU_SCREEN)
        {
            setTimeout(()=>{this.onBackToMenuScreen();}, 2000);
        }
    }

    subscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.subscribe(func);
    }

    unsubscribeOnBackToMenuScreen(func) {
        this.onBackToMenuScreenEventBus.unsubscribe(func);
    }

    onBackToMenuScreen() {
        this.onBackToMenuScreenEventBus.dispatch();
    }
    
}