import {Application} from 'pixi.js';

const DEFAULTS = {
    nbgFg: "000000",
    nbgBg: "ffffff"
}

class NetworkBackground {
    app: Application;
    constructor(element: HTMLElement) {
        this.app = new Application({
            resizeTo: element
        });
        element.appendChild(this.app.view);

        let parameters = Object.assign({}, DEFAULTS, element.dataset);
        this.app.renderer.backgroundColor = parseInt(parameters.nbgBg, 16);
    }

    readParameters(element: HTMLElement) {
        
    }
}

let nbg = [];
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-nbg-element]').forEach(element => {
        if (!(element instanceof HTMLElement)) return;
        nbg.push(new NetworkBackground(element));
    });
});
