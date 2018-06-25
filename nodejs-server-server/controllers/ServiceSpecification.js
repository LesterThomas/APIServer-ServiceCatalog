'use strict';

var utils = require('../utils/writer.js');
var ServiceSpecification = require('../service/ServiceSpecificationService');

module.exports.listServiceSpecification = function listServiceSpecification (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var name = req.swagger.params['name'].value;
  var lifecycleStatus = req.swagger.params['lifecycleStatus'].value;
  ServiceSpecification.listServiceSpecification(fields,name,lifecycleStatus)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.retrieveServiceSpecification = function retrieveServiceSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceSpecification.retrieveServiceSpecification(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
