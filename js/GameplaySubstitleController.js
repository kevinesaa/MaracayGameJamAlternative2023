const ID_GAMEPLAY_SUBTITLES = "game_play_subtitles";

class GameplaySubtitlesController {
    subtitlesDiv;
    interval;
    message;
    index;
    shouldExecute = false;

    constructor() {
        this.index = 0;
    }
    
    init() {
        this.subtitlesDiv = document.getElementById(ID_GAMEPLAY_SUBTITLES);
    }
    
    start(message, time) {
        this.shouldExecute = true;
        this.message = message;
        this.interval = setInterval(() => {
            if (this.shouldExecute) {
                if (this.index < this.message.length) {
                this.subtitlesDiv.innerHTML += this.message[this.index];
                    this.index++;
                } else {
                    this.stop();
                }
            }
        }, time);
    }
    
    stop() {
        this.shouldExecute = false;
        clearInterval(this.interval);
    }
    
    reset() {
        this.stop();
        this.subtitlesDiv.innerHTML = "";
        this.index = 0;
    }
}