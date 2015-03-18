module.exports = findCallback;

function noop() {}
noop.isNoop = true;

function findCallback(args) {
  if (!args.length) { return noop; }
  var lastArg = args[args.length - 1];
  var cb = typeof lastArg === 'function' ? lastArg : noop;
  return cb;
}
