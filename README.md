# Find Callback

Finds and returns a node style callback from arguments or returns a noop if not found.

## Install
```
npm install find-callback
```

## Usage

```javascript
var findCb = require('find-callback');

function foo(arg1, optionalArg, done) {
  done = findCb(arguments);
  //etc
  someAsyncFn(function() {
    //etc
    done(); // may be arguments[1] if the `optionalArg` was not used
  });
}

foo('some arg', function() {
  //etc
});
```

### Parameters

#### args

Type: `Array` or `arguments object`

The arguments to search for a callback. The last argument that is a function will be chosen. Otherwise, a noop will be returned.