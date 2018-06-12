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

module.exports.listServiceCandidate = function listServiceCandidate (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var version = req.swagger.params['version'].value;
  var lastUpdate = req.swagger.params['lastUpdate'].value;
  var name = req.swagger.params['name'].value;
  var isBundle = req.swagger.params['isBundle'].value;
  var lifecycleStatus = req.swagger.params['lifecycleStatus'].value;
  var validForStartDateTime = req.swagger.params['validForStartDateTime'].value;
  var validForEndDateTime = req.swagger.params['validForEndDateTime'].value;
  var serviceSpecificationVersion = req.swagger.params['serviceSpecificationVersion'].value;
  var serviceSpecificationName = req.swagger.params['serviceSpecificationName'].value;
  var serviceSpecificationType = req.swagger.params['serviceSpecificationType'].value;
  var serviceCandidateVersion = req.swagger.params['serviceCandidateVersion'].value;
  var serviceCandidateName = req.swagger.params['serviceCandidateName'].value;
  var categoryVersion = req.swagger.params['categoryVersion'].value;
  var categoryName = req.swagger.params['categoryName'].value;
  var resourceCandidateVersion = req.swagger.params['resourceCandidateVersion'].value;
  var resourceCandidateName = req.swagger.params['resourceCandidateName'].value;
  var bundledServiceCandidateLifecycleStatus = req.swagger.params['bundledServiceCandidateLifecycleStatus'].value;
  var bundledServiceCandidateName = req.swagger.params['bundledServiceCandidateName'].value;
  var serviceCandidateTermName = req.swagger.params['serviceCandidateTermName'].value;
  var serviceCandidateTermDuration = req.swagger.params['serviceCandidateTermDuration'].value;
  ServiceCandidate.listServiceCandidate(fields,version,lastUpdate,name,isBundle,lifecycleStatus,validForStartDateTime,validForEndDateTime,serviceSpecificationVersion,serviceSpecificationName,serviceSpecificationType,serviceCandidateVersion,serviceCandidateName,categoryVersion,categoryName,resourceCandidateVersion,resourceCandidateName,bundledServiceCandidateLifecycleStatus,bundledServiceCandidateName,serviceCandidateTermName,serviceCandidateTermDuration)
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

module.exports.updateServiceCandidate = function updateServiceCandidate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceCandidate = req.swagger.params['serviceCandidate'].value;
  ServiceCandidate.updateServiceCandidate(id,serviceCandidate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateServiceCandidatePatch = function updateServiceCandidatePatch (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceCandidate = req.swagger.params['serviceCandidate'].value;
  ServiceCandidate.updateServiceCandidatePatch(id,serviceCandidate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
