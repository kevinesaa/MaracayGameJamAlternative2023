const ID_MENU_SECTION_COMPONENT = "main_menu_container";

class MenuScreen {
    
    onStartGameEventBus;
    onShowCreditsEventBus;

    KEYBOARD_CODES = {  
        START_GAME:"ENTER",
        GO_TO_CREDITS:"C",
        PLAYER_ONE_JOIN:"1",
        PLAYER_TWO_JOIN:"2",
        PLAYER_THREE_JOIN:"3",
    };

    menuScreenSection;
    menuScreenSectionCcsClass;

    constructor() {
        this.onStartGameEventBus = new EventBus();
        this.onShowCreditsEventBus = new EventBus();
    }

    init() {
        this.menuScreenSection = document.getElementById(ID_MENU_SECTION_COMPONENT);
        this.menuScreenSectionCcsClass = this.menuScreenSection.style.display;
    }

    showScreen() {
        this.menuScreenSection.style.display = this.menuScreenSectionCcsClass;
    }
    
    hideScreen() {
        this.menuScreenSection.style.display = HIDE_STYLE_CLASS;
    }

    onKeyButtonHandler(event) {
        
        const key = event.key.toUpperCase();
        if(key == this.KEYBOARD_CODES.PLAYER_ONE_JOIN)
        {
            console.log("PLAYER ONE JOIN/UNJOIN")
        }
        if(key == this.KEYBOARD_CODES.PLAYER_TWO_JOIN)
        {
            console.log("PLAYER TWO JOIN/UNJOIN")
        }
        if(key == this.KEYBOARD_CODES.PLAYER_THREE_JOIN)
        {
            console.log("PLAYER THREE JOIN/UNJOIN")
        }

        if(key == this.KEYBOARD_CODES.GO_TO_CREDITS)
        {
            this.onOnShowCredits();
        }

        if(key == this.KEYBOARD_CODES.START_GAME)
        {
            console.log("START GAME")
        }
    }

    subscribeOnShowCredits(func) {
        this.onShowCreditsEventBus.subscribe(func);
    }

    unsubscribeOnShowCredits(func) {
        this.onShowCreditsEventBus.unsubscribe(func);
    }

    onOnShowCredits() {
        this.onShowCreditsEventBus.dispatch();
    }
}