module.exports = findCallback;

function findCallback(array) {
  if (!array.length) { return undefined }
  var lastItem = array[array.length - 1]
  return typeof lastItem === 'function' ? lastItem : undefined
}
