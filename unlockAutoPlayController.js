const HIDE_STYLE_CLASS = "none";
const AUDIO_WHITE_PATH = "./res/audio_white.ogg";
const ID_BASE_AUDIO_CHANNEL = "audio-channel-0";

const ID_VIDEO_SECTION_COMPONENT = "unlock_auto_play_container";
const ID_VIDEO_PLAYER_COMPONENT = "my-video-player";

const KEYBOARD_CODES = {  BAR_SPACE:" "};
let videoSection;
let videoPlayer;
let audioChannels = [0,0,0,0];

function onLoadEventHandler() {
    
    videoSection = document.getElementById(ID_VIDEO_SECTION_COMPONENT);
    videoPlayer = document.getElementById(ID_VIDEO_PLAYER_COMPONENT);
    for (i = 0; i < audioChannels.length; i++) 
    {
        const channelId = ID_BASE_AUDIO_CHANNEL + i;
        audioChannels[i] = document.getElementById(channelId);
    }
    
    window.addEventListener("keydown",onKeyButtonHandler);
    videoPlayer.addEventListener("ended",onVideoFininish);
}

function onKeyButtonHandler(event) {
    
    if(event.key == KEYBOARD_CODES.BAR_SPACE)
    {
        videoPlayer.currentTime = 0;
        videoPlayer.play();
        audioChannels.forEach( channel => {
            channel.src = AUDIO_WHITE_PATH;
            channel.play();
        });
    }

}

function onVideoFininish(event) {
    videoSection.style.display = HIDE_STYLE_CLASS;
}

window.onload = onLoadEventHandler;