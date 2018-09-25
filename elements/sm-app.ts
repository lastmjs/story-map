import {html, render} from 'lit-html';

class SMApp extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        render(html`
            It works!
        `, this);
    }
}

window.customElements.define('sm-app', SMApp);