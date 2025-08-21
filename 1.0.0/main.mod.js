import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.1/PolyModLoader.js";

class nostalgia extends PolyMod { 
    loadresources = true;
    init = function(polyModLoader) {
        polyModLoader.registerFuncMixin("pl", MixinType.INSERT, `{`, `
        if (loadresources) {
          ActivePolyModLoader.getMod("nostalgia").loadresources = false;
          const loadResource = function(e, t) {
              ml(this, nl, "f").addResource(),
              ml(this, tl, "m", dl).call(this, t, (t => {
                  ml(this, nl, "f").loadedResource(),
                  null == t ? (console.warn('Audio "' + e + '" failed to load'),
                  ml(this, il, "f").set(e, null)) : ml(this, il, "f").set(e, t)
              }
              ))
          }
          loadResource("oldmusic, "https://github.com/DoraChad/nostalgia/raw/refs/heads/main/assets/gathu.flac");
        }
        `);
        polyModLoader.registerFuncMixin("pl", MixinType.REPLACE, `const e = this.getBuffer("music");`, `const e = this.getBuffer("oldmusic");`);
    };
}

export let polyMod = new nostalgia();
