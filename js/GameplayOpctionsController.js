
const ID_GAMEPLAY_OPTIONS_COMPONENT =  "game_play_options_container";
const ID_BASE_GAMEPLAY_OPTION_TEXT = "game_play_option_text_";
const MAX_OPTIONS_BOX_SUPPORT = 3;

class GameplayOptionsController {


    optionsSection;
    optionsSectionClassCss;
    optionTexts = Array.from({length: MAX_OPTIONS_BOX_SUPPORT}).fill(0);

    constructor() {

    }
    
    init() {
        this.optionsSection = document.getElementById(ID_GAMEPLAY_OPTIONS_COMPONENT);
        this.optionsSectionClassCss = this.optionsSection.style.display;
        for(let i = 0; i < this.optionTexts.length; i++) {
            const key = `${ID_BASE_GAMEPLAY_OPTION_TEXT}${i}`;
            this.optionTexts[i] = document.getElementById(key);
        }
    }
    
    hideOptions() {
        this.optionsSection.style.display = HIDE_STYLE_CLASS;
        for(let i = 0; i < this.optionTexts.length; i++) {
            this.optionTexts[i].innerText = "";
        }
    }

    showOptions(optionsTextArray) {
        this.optionsSection.style.display = this.optionsSectionClassCss;
        for(let i = 0; i < this.optionTexts.length; i++) {
            const text = optionsTextArray[i];
            this.optionTexts[i].innerText = text;
        }
    }
}