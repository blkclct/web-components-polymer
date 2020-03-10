import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class CustomButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host([clicked]) button {
          background-color: #666;
        }
        :host([clicked]) button:hover {
          background-color: #666;
          color: #fff
        }
      </style>

      <button
        type$="[[buttonType]]"
        name="button"
        on-click="toggle"
      >
        [[buttonText]]
      </button>
    `
  }
  static get properties() {
    return {
      buttonText: {
        type: String
      },
      buttonType: {
        type: String
      },
      clicked: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      }
    };
  }
  constructor() {
    super()
    this.addEventListener('click', this.toggle.bind(this));
  }
  toggle() {
    this.clicked = !this.clicked;
  }
}

customElements.define('custom-button', CustomButton);
