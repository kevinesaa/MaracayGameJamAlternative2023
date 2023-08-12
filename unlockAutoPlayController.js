const HIDE_STYLE_CLASS = "none";

const VIDEO_SECTION_COMPONENT_ID = "unlock_auto_play_container";
const VIDEO_PLAYER_COMPONENT_ID = "my-video-player";

const KEYBOARD_CODES = {  BAR_SPACE:" "};
let videoSection;
let videoPlayer;

function onLoadEventHandler() {
    
    videoSection = document.getElementById(VIDEO_SECTION_COMPONENT_ID);
    videoPlayer = document.getElementById(VIDEO_PLAYER_COMPONENT_ID);
    
    window.addEventListener("keydown",onKeyButtonHandler);
    videoPlayer.addEventListener("ended",onVideoFininish);
}

function onKeyButtonHandler(event) {
    
    
    if(event.key == KEYBOARD_CODES.BAR_SPACE)
    {
        videoPlayer.currentTime = 0;
        videoPlayer.play();
    }

}

function onVideoFininish(event) {
    console.log("se acabo")
    
}

window.onload = onLoadEventHandler;