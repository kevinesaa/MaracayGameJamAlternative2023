const AUDIO_WHITE_PATH = "./res/audio_white.ogg";
const INTRO_VIDEO_PATH = "./res/robocop.mp4";
const ID_BASE_AUDIO_CHANNEL = "audio-channel-0";
const ID_VIDEO_SECTION_COMPONENT = "unlock_auto_play_container";
const ID_VIDEO_PLAYER_COMPONENT = "my-video-player";

class UnloadAutoPlayScreen {

    eventBus;
    KEYBOARD_CODES = {  BAR_SPACE:" "};
    videoSection;
    videoPlayer;
    audioChannels = [0,0,0,0];

    constructor(){
        this.eventBus = new EventBus();
    }

    init() {

        this.videoSection = document.getElementById(ID_VIDEO_SECTION_COMPONENT);
        this.videoPlayer = document.getElementById(ID_VIDEO_PLAYER_COMPONENT);
        
        for (let i = 0; i < this.audioChannels.length; i++) 
        {
            const channelId = ID_BASE_AUDIO_CHANNEL + i;
            this.audioChannels[i] = document.getElementById(channelId);
        }
        
        this.videoPlayer.addEventListener("ended",() => { this.onVideoFinish(); });
    
    }

    onKeyButtonHandler(event) {
    
        if(event.key == this.KEYBOARD_CODES.BAR_SPACE)
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
        this.eventBus.subscribe(func);
    }

    unsubscribeOnFinishVideo(func) {
        this.eventBus.unsubscribe(func);
    }

    onVideoFinish() {
        this.videoSection.style.display = HIDE_STYLE_CLASS;
        this.eventBus.dispatch();
    }
}