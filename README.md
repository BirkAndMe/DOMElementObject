# ElementObject
A base class that helps with connecting your class to a DOMElement.


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

## Note
There's nothing that forces this to be used with a DOMElement, in theory it can
be used with any object.
