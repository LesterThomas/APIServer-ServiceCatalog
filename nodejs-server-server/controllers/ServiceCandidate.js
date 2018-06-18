'use strict';

var utils = require('../utils/writer.js');
var ServiceCandidate = require('../service/ServiceCandidateService');

module.exports.createServiceCandidate = function createServiceCandidate (req, res, next) {
  var serviceCandidate = req.swagger.params['serviceCandidate'].value;
  ServiceCandidate.createServiceCandidate(serviceCandidate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServiceCandidate = function deleteServiceCandidate (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceCandidate.deleteServiceCandidate(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listServiceCandidate = function listServiceCandidate (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var name = req.swagger.params['name'].value;
  var type = req.swagger.params['type'].value;
  var schemaLocation = req.swagger.params['@schemaLocation'].value;
  var baseType = req.swagger.params['@baseType'].value;
  var version = req.swagger.params['version'].value;
  var validForStartDateTime = req.swagger.params['validForStartDateTime'].value;
  var validForEndDateTime = req.swagger.params['validForEndDateTime'].value;
  var lastUpdate = req.swagger.params['lastUpdate'].value;
  var lifecycleStatus = req.swagger.params['lifecycleStatus'].value;
  var categoryVersion = req.swagger.params['categoryVersion'].value;
  var categoryName = req.swagger.params['categoryName'].value;
  var categoryType = req.swagger.params['categoryType'].value;
  var serviceSpecificationVersion = req.swagger.params['serviceSpecificationVersion'].value;
  var serviceSpecificationName = req.swagger.params['serviceSpecificationName'].value;
  var serviceSpecificationType = req.swagger.params['serviceSpecificationType'].value;
  ServiceCandidate.listServiceCandidate(fields,name,type,schemaLocation,baseType,version,validForStartDateTime,validForEndDateTime,lastUpdate,lifecycleStatus,categoryVersion,categoryName,categoryType,serviceSpecificationVersion,serviceSpecificationName,serviceSpecificationType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchServiceCandidate = function patchServiceCandidate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceCandidate = req.swagger.params['serviceCandidate'].value;
  ServiceCandidate.patchServiceCandidate(id,serviceCandidate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveServiceCandidate = function retrieveServiceCandidate (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceCandidate.retrieveServiceCandidate(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
