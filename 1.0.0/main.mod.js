import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class nostalgia extends PolyMod { 
    audioURLS = ["https://github.com/DoraChad/nostalgia/blob/main/assets/gathu.flac"];
    musicBuffer = null;
    getAudioBuffer(url) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioCOntext.decodeAudioData(arrayBuffer);

            return audioBuffer
        } catch (error) {
            console.error(error)
        }
    }


    
    init = function(polyModLoader) {
        this.getAudioBuffer("https://github.com/DoraChad/nostalgia/blob/main/assets/gathu.flac").then((ab) => {
            this.musicBuffer = ab;
        })
        polyModLoader.registerFuncMixin("pl" , MixinType.RELPACE, 'const e = this.getBuffer("music");', `const e = ActivePolyModLoader.getMod("nostalgia").musicBuffer`);
    };
}

export let polyMod = new nostalgia();
