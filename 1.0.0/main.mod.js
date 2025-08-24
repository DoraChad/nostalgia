import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class nostalgia extends PolyMod { 
    init = function(polyModLoader) {
        polyModLoader.registerClassMixin("gl.prototype", "load", MixinType.INSERT, `{`, `
            if (e === "music") {t = ["https://raw.githubusercontent.com/DoraChad/nostalgia/main/assets/gathu.flac"]};   
        `);
    };
}

export let polyMod = new nostalgia();
