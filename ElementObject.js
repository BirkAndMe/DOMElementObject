/*! MIT License - Copyright (c) 2016 Philip Birk-Jensen <philip@birk-jensen.dk> */

/*global module, define */

(function (scope) {
  'use strict';

  /**
   * A base class for classes that needs to be coupled with a DOMElement.
   *
   * @example
   * class MyClass extends ElementObject {
   *   constructor(state) {
   *     super();
   *     this.element = document.createElement('div');
   *   }
   * }
   *
   * var myObject = new MyClass();
   * console.log(myObject); // object
   * console.log(myObject.element); // DOMElement
   * console.log(ElementObject.get(myObject.element)); // object
   * console.log(myObject.element.eObject); //object
   */
  var ElementObject = function () {
    /**
     * The DOMElement holder variable.
     *
     * @type {DOMElement | false}
     * @private
     */
    var domElement = null;

    // Attach the getter and setter of the element property to the object.
    Object.defineProperty(this, 'element',
      {
        enumerable: true,

        /**
         * Getter for the DOMElement.
         *
         * @return {DOMElement}
         *   The DOMElement connected to the class.
         */
        get: function() {
          return domElement;
        },

        /**
         * Setter for the DOMElement
         *
         * @param {DOMElement | null} input
         *   The DOMElement to couple with this object.
         *   Using null will remove the connection between the current DOMEelement and
         *   the object.
         */
        set: function(input) {
          if (domElement && domElement.eObject) {
            delete domElement.eObject;
          }

          if (input) {
            input.eObject = this;
          }

          domElement = input;
        }
      }
    );
  };

  /**
   * Destroy
   */
  ElementObject.prototype.destroy = function (removeElement) {
    if (removeElement === true) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  };

  /**
   * Get the object of a DOMElement infused with ElementObject.
   *
   * @param {DOMElement} domElement
   *   The DOMElement.
   */
  ElementObject.get = function (domElement) {
    if (domElement && domElement.eObject) {
      return domElement.eObject;
    }

    return false;
  };

  /**
   * Execute the a function, for each of the elements connected to an objects.
   *
   * @param {Array} elements
   *   An array of elements.
   * @param {Function} callback
   *   The callback function.
   */
  ElementObject.eachObject = function (elements, callback) {
    var
      item, i,
      count = elements.length,
      items = [];

    if (typeof callback !== 'function') {
      callback = function () { };
    }

    for (i = 0; i < count; i++) {
      item = ElementObject.get(elements[i]);

      if (item !== false) {
        callback(item);
        items.push(item);
      }
    }

    return items;
  };

  // ---------------------------------------------------------------------------
  // Expose this to nodejs, AMD or any scope.
  // TODO Check if this works in an AMD environment.
  if (typeof module === 'object' && module.exports) {
    module.exports = ElementObject;
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return ElementObject; });
  } else {
    scope.ElementObject = ElementObject;
  }

}(this));
