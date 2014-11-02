module.exports = findCallback;

var fn = function(err) { };

function findCallback(args) {
  if (!args.length) { return fn; }
  var lastArg = args[args.length - 1];
  var cb = typeof lastArg === 'function' ? lastArg : fn;
  return cb;
}