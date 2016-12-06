# ElementObject
A simple base class that helps with connecting your class to a DOMElement.


## Installation
```
npm install element-object
```
Or simply use the `dist/ElementObject.js` file.


## Usage
```js
import ElementObject from 'element-object';

// Extend a class with the ElementObject class
class SomeClass extends ElementObject {
  // Note that you don't need to set element property in the constructor, it's
  // just done for convenience in this example.
  constructor(someElement) {
    super();

    // Set the element property.
    this.element = someElement;
  }
}

let
  someElement = document.createElement('div'),
  someObject = new SomeClass(someElement);

// Get the DOMElement.
console.log(someObject.element);
// Get the object.
console.log(ElementObject.get(someElement));

// Calling the destroy function will remove the references to and from the
// DOMElement.
someObject.destroy();
```

Use the `eachObject()` function to run through a list of elements:
```js
let elements = this.element.querySelectorAll('.selector');

// This returns a list of all the elements that have objects connected.
// So it can also be used to "filter" DOMElements without a connected object.
ElementObject.eachObject(elements, item => {
  // Logs the actual object, and not the DOMElement.
  console.log(item);
});
```

## Note
There's nothing that forces this to be used with a DOMElement, in theory it can
be used with any object.
