import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import './shared-styles';

class MyNewView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">Sample</div>
        <h1>New Page</h1>
        <p>New Page View !</p>
      </div>
    `;
  }
}

window.customElements.define('my-new-view', MyNewView);
