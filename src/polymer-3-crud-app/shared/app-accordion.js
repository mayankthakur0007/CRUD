import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

import '../../../node_modules/@polymer/iron-collapse/iron-collapse.js';


/**
 * @customElement
 * @polymer
 */
class AccordianComp extends PolymerElement {
    static get template() {
      return html`
    <style>
    button {
        height: 60px;
        width: 200px;
        text-align: center;
    }
    #content{
        height:100px;
        padding:5px;
    }
</style>

 

<!-- Card header -->

<button on-click="open">
    <slot name="mainContent"></slot>
</button>

<!-- Card body -->
<iron-collapse id="creditCard">
    <div class="card-body" id="content">
        <slot name="contentBody"></slot>
    </div>
</iron-collapse>`
  };
  open() {
    this.$.creditCard.toggle();

}
}

window.customElements.define('accordian-comp', AccordianComp);

