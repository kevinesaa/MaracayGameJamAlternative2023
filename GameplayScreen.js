const ID_GAMEPLAY_SECTION_COMPONENT = "game_play_container";

class GameplayScreen {
    

    gamePlayScreenSection;
    gamePlayScreenSectionCcsClass;
    
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
    }
}