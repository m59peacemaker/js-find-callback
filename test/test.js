var test = require('tape');
var findCb = require(__dirname+'/../');

function fooFactory(t) {
  function foo(arg1, optionalArg, done) {
    done = findCb(arguments);
    t.assert(typeof done === 'function');
  }
  return foo;
}

test('returns callback when all arguments present', function(t) {
  t.plan(1);
  fooFactory(t)('some arg', 'optional arg', function() {});
});

test('returns callback when optional argument not present', function(t) {
  t.plan(1);
  fooFactory(t)('some arg', function() {});
});

test('returns callback when callback not present', function(t) {
  t.plan(1);
  fooFactory(t)('some arg', function() {});
});

test('returns callback when no arguments present', function(t) {
  t.plan(1);
  fooFactory(t)();
});