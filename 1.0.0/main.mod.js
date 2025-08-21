import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class nostalgia extends PolyMod { 
    audioURLS = ["https://github.com/DoraChad/nostalgia/blob/main/assets/gathu.flac"];
    init = function(polyModLoader) {
        polyModLoader.registerClassMixin("gl.prototype", "load", MixinType.INSERT, '{', `ActivePolyModLoader.getMod("nostalgia").audioURLS.forEach(t => {
            console.log(t);        
        })`);
    };
}

export let polyMod = new nostalgia();
