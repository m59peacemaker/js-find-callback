var test = require('tape')
var findCb = require('../')

test('returns callback when all arguments present', function(t) {
  t.plan(1)
  function foo(arg, optionalArg, cb) {
    cb = findCb(arguments)
    t.equal(cb(), 123)
  }
  foo('some arg', 'optional arg', function() {
    return 123
  })
})

test('returns callback when optional argument not present', function(t) {
  t.plan(1)
  function foo(arg, optionalArg, cb) {
    cb = findCb(arguments)
    t.equal(cb(), 123)
  }
  foo('some arg', function() {
    return 123
  })
})

test('returns `undefined` when callback not present', function(t) {
  t.plan(1)
  function foo(arg, optionalArg, cb) {
    cb = findCb(arguments)
    t.equal(cb, undefined)
  }
  foo('some arg', 'optional arg')
})

test('returns `undefined` when no arguments present', function(t) {
  t.plan(1)
  function foo() {
    var cb = findCb(arguments)
    t.equal(cb, undefined)
  }
  foo()
})
