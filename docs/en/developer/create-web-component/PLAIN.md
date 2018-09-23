# Creating a plain web component

Web components can be created without the need for any framework.

## Advantages

- Compact and fast, no abstraction overhead

## Trade offs

- No framework abstractions

## Guides

- <https://developers.google.com/web/fundamentals/web-components/customelements>
- <https://www.webcomponents.org/introduction#custom-elements>

## Example

_example-component.js_

```javascript
class ExampleComponent extends HTMLElement {
  constructor() {
    super();
    this.doSomething();
  }

  doSomething() {
    ...
  }
}

customElements.define('app-drawer', AppDrawer);
window.customElements.define('example-component', ExampleComponent);
```

_index.html_

```html
<script src="example-component.js"></script>
<example-component></example-component>
```
