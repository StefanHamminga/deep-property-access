# Deep Property Access
Deep property access function. Access properties by path. For arrays just
include the index in the path (see example, property 4).

## Usage
Use the library like this:
```bash
npm install --save deep-property-access
```


```javascript
var DeepPropertyAccess = require('deep-property-access');
```

Retrieve a value from an arbitrary depth property:

```javascript
var value = DeepPropertyAccess('path.to.my.key');
```

or

```javascript
var value = DeepPropertyAccess( ['path', 'to', 'my', 'key' ] );
```

If the path cannot be resolved to a valid key the return value is `undefined`.


## Example
Running the included example file
```javascript
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
```

will result in this:

```javascript
Object:
{ key1: { subkey1: 'Some string', subkey2: true },
  key2: { subkey3: { subsubkey1: 42 } },
  key3: [ 24, -10, true ] }

Property 'key1.subkey2': true
Property '[ 'key2', 'subkey3', 'subsubkey1' ]': 42
Property 'key2': { subkey3: { subsubkey1: 42 } }
Property 'key3.1': -10
```

## License
This project is licensed as [LGPLv3](http://www.gnu.org/licenses/lgpl-3.0.html), the license file is included in the project directory.

Find this project on: [GitHub](https://github.com/StefanHamminga/deep-property-access) or [npm](https://www.npmjs.com/package/deep-property-access)

Copyright 2015 [Stefan Hamminga](stefan@prjct.net) - [prjct.net](https://prjct.net)
