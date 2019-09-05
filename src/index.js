import { LitElement, html } from 'lit-element';
import qrcode from 'qrcode'


// Extend the LitElement base class
class MyElement extends LitElement {
    static get properties() {
      return { 
        data: { type: Object }
      };
    }

    constructor() {
      // Always call super() first
      super();
      this.data = {};
    }

  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    if(!this.data.url){
        return html``;
    }

    return html`
      <!-- template content -->
        <canvas id="canvas"></canvas>
    `;
  }
  updated(changedProperties) {
    if(this.data.url){
        var canvas = this.shadowRoot.getElementById('canvas');
        qrcode.toCanvas(canvas, this.data.url, function (error) {})
    }
  }
}
// Register the new element with the browser.
customElements.define('qr-code', MyElement);

