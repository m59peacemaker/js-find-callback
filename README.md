# Find Callback

Finds and returns a node-style callback (function that is the last argument) from given array or returns `undefined` if not found.

## Install
```
npm install find-callback
```

## Usage

```javascript
var findCb = require('find-callback')

function foo(arg1, optionalArg, cb) {
  cb = findCb(arguments)
  //etc
  someAsyncFn(function() {
    //etc
    cb() // may be arguments[1] if the `optionalArg` was not used
  })
}

foo('some arg', function() {
  //etc
})
```

### Parameters

#### array

Type: `Array` or `arguments object`

The array to search for a node-style callback. The last item in the array will be returned if it is a function.
