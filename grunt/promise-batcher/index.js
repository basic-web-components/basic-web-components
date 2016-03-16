//
// Execute a serialized promise loop, where each loop executes
// a chain of promises of length batchSize. The array parameter
// holds the values against which the promise loop executes, with
// fn being the execution callback written by the promise-batcher
// consumer. The paramsObj parameter holds whatever common parameter
// needs to be passed into the fn callback.
//
// fn has a signature of fn(arrayItem, paramsObj)
//
function batch(batchSize, array, paramsObj, fn) {
  return startAtIndex(0, batchSize, array, paramsObj, fn);
}

function startAtIndex(index, batchSize, array, paramsObj, fn) {
  var promises = [];

  if (!array || (index >= array.length)) {
    return new Promise(function(resolve, reject) {
      resolve();
    });
  }

  for (var i = 0; (i < batchSize) && (index + i < array.length); i++) {
    var item = array[index + i];

    var promise = fn(item, paramsObj);
    promises.push(promise);
  }

  return Promise.all(promises)
    .then(function() {
      return startAtIndex(index + batchSize, batchSize, array, paramsObj, fn);
    });
}

function setLoggerLevel(level) {
  logger.level(level);
}

module.exports = {
  batch: batch
};