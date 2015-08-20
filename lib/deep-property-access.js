/**
 * Deep property access tool - Takes a path, either in the form of a string, for example: "myObj.childObj.someProperty" or a pre-split array.
 * @method DeepPropertyAccess
 * @param  {Object}       base  Root object reference.
 * @param  {string|Array} path  Dot separated path to property to return.
 * @return {*}                  Returns matched property or undefined.
 */
var DeepPropertyAccess = function(base, path) {
  "use strict";
  if (! (path instanceof Array)) {
    path = path.split(".");
  }
  if (path.length > 0) {
    var validPath = true;
    var retval = base;
    while (path.length > 0) {
      retval = retval[path.shift()];
      if (typeof retval === 'undefined') {
        return undefined;
      }
    }
    return retval;
  } else {
    return undefined;
  }
};

module.exports = DeepPropertyAccess;

// Test code
// var util = require('util');
// var testObj = {
//   child1: {
//     grandchild1: "test",
//     grandchild2: 26.433
//   },
//   child2: true,
//   child3: {
//     grandchild3: {
//       myvar: "somestring"
//     }
//   },
//   child4: [ "array index 0", "array index 1" ]
// };
// console.log(util.inspect(testObj, { color: true, depth: 8 }));
// console.log(DeepPropertyAccess(testObj, "child4.1"));
