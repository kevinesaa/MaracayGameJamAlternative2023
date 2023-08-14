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
            const player1Check = document.getElementById("player1_check");
            player1Check.checked = !player1Check.checked;
            console.log("PLAYER ONE JOIN/UNJOIN")
        }
        if(key == this.KEYBOARD_CODES.PLAYER_TWO_JOIN)
        {
            const player2Check = document.getElementById("player2_check");
            player2Check.checked = !player2Check.checked;
            console.log("PLAYER TWO JOIN/UNJOIN")
        }
        if(key == this.KEYBOARD_CODES.PLAYER_THREE_JOIN)
        {
            const player3Check = document.getElementById("player3_check");
            player3Check.checked = !player3Check.checked;
            console.log("PLAYER THREE JOIN/UNJOIN")
        }

        if(key == this.KEYBOARD_CODES.GO_TO_CREDITS)
        {
            this.onShowCredits();
        }

        if(key == this.KEYBOARD_CODES.START_GAME)
        {
            this.onStartGame();
        }
    }

    subscribeOnShowCredits(func) {
        this.onShowCreditsEventBus.subscribe(func);
    }

    unsubscribeOnShowCredits(func) {
        this.onShowCreditsEventBus.unsubscribe(func);
    }

    onShowCredits() {
        this.onShowCreditsEventBus.dispatch();
    }

    subscribeOnStartGame(func) {
        this.onStartGameEventBus.subscribe(func);
    }

    unsubscribeOnStartGame(func) {
        this.onStartGameEventBus.unsubscribe(func);
    }

    onStartGame() {
        //todo
        /**validar que la cantidad de jugadores sea mayor a 0 */
        this.onStartGameEventBus.dispatch({test:{}}/** enviar los jugadore que se unieron */);
    }
}