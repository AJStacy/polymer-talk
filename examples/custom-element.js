// Define a custom element
class MyElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    // Let's make a child for MyElement
    let gap = document.createElement('span');
    gap.innerText = "Build a bridge.";

    // Now we'll apply it to MyElement's Shadow DOM
    shadow.appendChild(gap);
  }
}
// Now we'll add MyElement to the registry
customElements.define('my-element', MyElement);
