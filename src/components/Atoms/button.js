import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class CustomButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        button {
          color: blue;
        }
      </style>
      <button type="button">Button</button>
    `
  }
  constructor() {
    super()
  }
}

customElements.define('custom-button', CustomButton);
