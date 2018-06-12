'use strict';


/**
 * Register a listener
 * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
 *
 * data EventSubscriptionInput Data containing the callback endpoint to deliver the information
 * returns EventSubscription
 **/
exports.registerListener = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "query" : "query",
  "callback" : "callback",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unregister a listener
 * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
 *
 * id String The id of the registered listener
 * no response value expected for this operation
 **/
exports.unregisterListener = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

