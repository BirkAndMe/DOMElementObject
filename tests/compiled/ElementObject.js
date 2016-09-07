'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*jshint esversion:6*/

(function (scope) {

  var document = require('global/document'),
      test = require('tape'),
      ElementObject = require('../../src/ElementObject');

  test('Extending the class.', function (assert) {
    var SomeClass = function (_ElementObject) {
      _inherits(SomeClass, _ElementObject);

      function SomeClass() {
        _classCallCheck(this, SomeClass);

        return _possibleConstructorReturn(this, (SomeClass.__proto__ || Object.getPrototypeOf(SomeClass)).apply(this, arguments));
      }

      return SomeClass;
    }(ElementObject);

    var div = document.createElement('div'),
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
})(undefined);