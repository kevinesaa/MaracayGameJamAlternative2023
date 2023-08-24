const ID_BASE_AUDIO_CHANNEL = "audio-channel-0";

class AudioController {
    
    shouldPlay = [false, false, false, false];
    audioChannels = [0,0,0,0];
    onAudioChannelFinishEventBus;


    constructor() {
    }

    init() {

        for (let i = 0; i < this.audioChannels.length; i++) 
        {
            const channelId = `${ID_BASE_AUDIO_CHANNEL}${i}`;
            this.audioChannels[i] = document.getElementById(channelId);
            
            //https://github.com/elan-ev/opencast-studio/issues/581
            this.audioChannels[i].addEventListener("loadeddata",() => { 
                if(this.shouldPlay[i]) {
                    this.audioChannels[i].play();
                }
            });
        }
        
    }
    /** @param { channelIndex, path, loop } audioProperties  */
    play( audioProperties) {
        
        if(audioProperties.channelIndex != null) {
            const channel = this.audioChannels[audioProperties.channelIndex];
            this.shouldPlay[audioProperties.channelIndex] = true;
            channel.src = audioProperties.path;
            channel.loop = audioProperties.loop;
            channel.load();
        }
    }

    stopChannelByIndex(channelIndex) {
        
        this.shouldPlay[channelIndex] = false;
        this.audioChannels[channelIndex].load();
    }

    
    stopChannelByTrackPath(audioSrcPath) {
        
        for (let i = 0; i < this.audioChannels.length; i++) {

            if(this.audioChannels[i].src == audioSrcPath){
                this.stopChannelByIndex(i);
                break;
            }
        }
    }

    stopAllChannels() {
        
        for (let i = 0; i < this.audioChannels.length; i++) {
            this.stopChannelByIndex(i);
        }
    }

    getChannelsCount() {
        return this.audioChannels.length;
    }
    
}