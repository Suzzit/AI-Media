import WebFont from "webfontloader";

function fontLoader(){
    WebFont.load({
        google: {
          families: ['Sofia Sans', 'Aboreto', 'Explora', 'Lato']
        }
      });
}

export {fontLoader}