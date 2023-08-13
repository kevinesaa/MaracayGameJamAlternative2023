const ID_CREDITS_SECTION_COMPONENT = "credits_container";

class CreditsScreen {
    
    onBackToMenuScreenEventBus;
    KEYBOARD_CODES = {  BACK_MENU_SCREEN:"B"};
    creditsSection;
    creditsSectionCssClass;

    constructor() {
        this.onBackToMenuScreenEventBus = new EventBus();
    }

    init() {
        this.creditsSection = document.getElementById(ID_CREDITS_SECTION_COMPONENT);
        this.creditsSectionCssClass = this.creditsSection.style.display;
    }
    
    showScreen() {
        this.creditsSection.style.display =  this.creditsSectionCssClass;
    }
    
    hideScreen() {
        this.creditsSection.style.display = HIDE_STYLE_CLASS;
    }

    onKeyButtonHandler(event) {
        const key = event.key.toUpperCase();
        if(key == this.KEYBOARD_CODES.BACK_MENU_SCREEN)
        {
            console.log("BACK TO MENU SCREEN")
        }
    }

    
}