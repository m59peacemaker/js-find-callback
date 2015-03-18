# Find Callback

Finds and returns a node style callback from arguments or returns a noop if not found.

## Install
```
npm install find-callback
```

## Usage

```javascript
var findCb = require('find-callback');

function foo(arg1, optionalArg, cb) {
  cb = findCb(arguments);
  //etc
  someAsyncFn(function() {
    //etc
    cb(); // may be arguments[1] if the `optionalArg` was not used
  });
}

foo('some arg', function() {
  //etc
});
```

### noop.isNoop

If no callback was found, a noop will be returned. You can identify the noop by its property `noop.isNoop`.

```javascript
cb = findCb(arguments);
if (cb.isNoop) {
  // etc
}
```

### Parameters

#### args

Type: `Array` or `arguments object`

The arguments to search for a callback. The last argument that is a function will be chosen. Otherwise, a noop will be returned.
