'use strict';

var utils = require('../utils/writer.js');
var ServiceCategory = require('../service/ServiceCategoryService');

module.exports.createServiceCategory = function createServiceCategory (req, res, next) {
  var serviceCategory = req.swagger.params['serviceCategory'].value;
  ServiceCategory.createServiceCategory(serviceCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServiceCategory = function deleteServiceCategory (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceCategory.deleteServiceCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listServiceCategory = function listServiceCategory (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var name = req.swagger.params['name'].value;
  var type = req.swagger.params['type'].value;
  var schemalLocation = req.swagger.params['@schemalLocation'].value;
  var baseType = req.swagger.params['@baseType'].value;
  var version = req.swagger.params['version'].value;
  var validForStartDateTime = req.swagger.params['validForStartDateTime'].value;
  var validForEndDateTime = req.swagger.params['validForEndDateTime'].value;
  var lifecycleStatus = req.swagger.params['lifecycleStatus'].value;
  var lastUpdate = req.swagger.params['lastUpdate'].value;
  var parentId = req.swagger.params['parentId'].value;
  var isRoot = req.swagger.params['isRoot'].value;
  var relatedPartyRole = req.swagger.params['relatedPartyRole'].value;
  var relatedPartyName = req.swagger.params['relatedPartyName'].value;
  var serviceCandidateVersion = req.swagger.params['serviceCandidateVersion'].value;
  var serviceCandidateName = req.swagger.params['serviceCandidateName'].value;
  var serviceCandidateType = req.swagger.params['serviceCandidateType'].value;
  var categoryVersion = req.swagger.params['categoryVersion'].value;
  var categoryName = req.swagger.params['categoryName'].value;
  var categoryType = req.swagger.params['categoryType'].value;
  ServiceCategory.listServiceCategory(fields,name,type,schemalLocation,baseType,version,validForStartDateTime,validForEndDateTime,lifecycleStatus,lastUpdate,parentId,isRoot,relatedPartyRole,relatedPartyName,serviceCandidateVersion,serviceCandidateName,serviceCandidateType,categoryVersion,categoryName,categoryType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchServiceCategory = function patchServiceCategory (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceCategory = req.swagger.params['serviceCategory'].value;
  ServiceCategory.patchServiceCategory(id,serviceCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveServiceCategory = function retrieveServiceCategory (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceCategory.retrieveServiceCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
