const AUDIO_WHITE_PATH = "./res/opening/audio_white.ogg";
const INTRO_VIDEO_PATH = "./res/opening/intro.mp4";
const ID_VIDEO_SECTION_COMPONENT = "unlock_auto_play_container";
const ID_VIDEO_PLAYER_COMPONENT = "my-video-player";

class UnloadAutoPlayScreen {

    onFinishVideoEventBus;
    KEYBOARD_CODES = {  START_VIDEO:" "};
    videoSection;
    videoSectionCcsClass;
    videoPlayer;
    audioController;
    

    constructor(){
        this.onFinishVideoEventBus = new EventBus();
        this.audioController = new AudioController();
    }

    init() {

        this.videoSection = document.getElementById(ID_VIDEO_SECTION_COMPONENT);
        this.videoPlayer = document.getElementById(ID_VIDEO_PLAYER_COMPONENT);
        this.videoSectionCcsClass =  this.videoSection.style.display;
        this.audioController.init();
        
        this.videoPlayer.addEventListener("ended",() => { this.onVideoFinish(); });
        //https://github.com/elan-ev/opencast-studio/issues/581
        this.videoPlayer.addEventListener("loadeddata",() => { 
            this.videoPlayer.play();
        });
    
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
            this.videoPlayer.load();
            const channelLenght = this.audioController.getChannelsCount();
            for(let i=0; i < channelLenght; i++) {
                this.audioController.play({
                    channelIndex:i, 
                    path:AUDIO_WHITE_PATH, 
                    loop:false
                });
            }
            this.audioController.stopAllChannels();
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