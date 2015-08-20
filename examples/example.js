var util = require('util');
var deep = require('../');

var testObject = {
  key1: {
    subkey1: "Some string",
    subkey2: true
  },
  key2: {
    subkey3: {
      subsubkey1: 42
    }
  },
  key3: [ 24, -10, true ]
}

console.log("Object:\n" + util.inspect(testObject, { depth: 8, colors: true }) + "\n");

var property1 = "key1.subkey2";
var property2 = [ "key2", "subkey3", "subsubkey1" ];
var property3 = "key2";
var property4 = "key3.1";

console.log("Property '" + property1 + "': " + deep(testObject, property1));
console.log("Property '[ '" + property2.join("', '") + "' ]': " + deep(testObject, property2));
console.log("Property '" + property3 + "': " + util.inspect(deep(testObject, property3), { depth: 8, colors: true }));
console.log("Property '" + property4 + "': " + deep(testObject, property4));
