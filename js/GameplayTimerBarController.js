const ID_GAMEPLAY_TIMER_PROGRESS =  "game_play_timer_progress_bar";

class GameplayTimerBarController {
    progressBar;
    interval;
    timeToFill;
    progress;

    constructor() {
        this.progress = 0;
    }
    
    init() {
        this.progressBar = document.getElementById(ID_GAMEPLAY_TIMER_PROGRESS);
    }
    
    start(timeToFill) {
        const startTime = new Date().getTime();
        const endTime = startTime + timeToFill;
    
        this.interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const elapsedTime = currentTime - startTime;
          const progressPercent = (elapsedTime / timeToFill) * 100;
          console.log(progressPercent)
          
          this.progress = Math.min(progressPercent, 100);
          this.progressBar.style.width = this.progress + "%";
    
          if (currentTime >= endTime) {
            this.stop();
          }
        }, 100);
    }
    
    stop() {
        clearInterval(this.interval);
    }

    reset() {
        this.stop();
        this.progress = 0;
        this.progressBar.style.width = '0%';
    }
}
