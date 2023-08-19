const AUDIO_WHITE_PATH = "./res/opening/audio_white.ogg";
const INTRO_VIDEO_PATH = "./res/opening/robocop.mp4";
const ID_VIDEO_SECTION_COMPONENT = "unlock_auto_play_container";
const ID_VIDEO_PLAYER_COMPONENT = "my-video-player";

class UnloadAutoPlayScreen {

    onFinishVideoEventBus;
    KEYBOARD_CODES = {  START_VIDEO:" "};
    videoSection;
    videoSectionCcsClass;
    videoPlayer;
    audioChannels = [0,0,0,0];

    constructor(){
        this.onFinishVideoEventBus = new EventBus();
    }

    init() {

        this.videoSection = document.getElementById(ID_VIDEO_SECTION_COMPONENT);
        this.videoPlayer = document.getElementById(ID_VIDEO_PLAYER_COMPONENT);
        this.videoSectionCcsClass =  this.videoSection.style.display;
        for (let i = 0; i < this.audioChannels.length; i++) 
        {
            const channelId = ID_BASE_AUDIO_CHANNEL + i;
            this.audioChannels[i] = document.getElementById(channelId);
        }
        
        this.videoPlayer.addEventListener("ended",() => { this.onVideoFinish(); });
    
    }

    showScreen() {
        this.videoSection.style.display = this.videoSectionCcsClass;
    }
    
    hideScreen() {
        this.videoSection.style.display = HIDE_STYLE_CLASS;
    }

    onKeyButtonHandler(event) {
    
        if(event.key == this.KEYBOARD_CODES.START_VIDEO)
        {
            this.videoPlayer.currentTime = 0;
            this.videoPlayer.src = INTRO_VIDEO_PATH;
            this.videoPlayer.play();
            this.audioChannels.forEach( channel => {
                channel.src = AUDIO_WHITE_PATH;
                channel.play();
            });
        }
    }

    subscribeOnFinishVideo(func) {
        this.onFinishVideoEventBus.subscribe(func);
    }

    unsubscribeOnFinishVideo(func) {
        this.onFinishVideoEventBus.unsubscribe(func);
    }

    onVideoFinish() {
        this.onFinishVideoEventBus.dispatch();
    }
}