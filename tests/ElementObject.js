/*jshint esversion:6*/

(function (scope) {

  const
    document = require('global/document'),
    test = require('tape'),
    ElementObject = require('../ElementObject');

  test('Extending the class.', function (assert) {
    class SomeClass extends ElementObject {
      constructor(newElement) {
        super();
        this.element = newElement;
      }
    }

    const
      div = document.createElement('div'),
      someObject = new SomeClass(div);

    assert.equal(someObject.element, div);
    assert.equal(ElementObject.get(div), someObject);

    someObject.destroy();
    assert.equal(someObject.element, null);
    assert.equal(ElementObject.get(div), false);

    someObject.element = div;
    assert.equal(someObject.element, div);
    assert.equal(ElementObject.get(div), someObject);


    assert.end();
  });
}(this));
