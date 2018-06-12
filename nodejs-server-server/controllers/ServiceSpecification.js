'use strict';

var utils = require('../utils/writer.js');
var ServiceSpecification = require('../service/ServiceSpecificationService');

module.exports.createServiceSpecification = function createServiceSpecification (req, res, next) {
  var serviceSpecification = req.swagger.params['serviceSpecification'].value;
  ServiceSpecification.createServiceSpecification(serviceSpecification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listServiceSpecification = function listServiceSpecification (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var version = req.swagger.params['version'].value;
  var lastUpdate = req.swagger.params['lastUpdate'].value;
  var name = req.swagger.params['name'].value;
  var type = req.swagger.params['type'].value;
  var isBundle = req.swagger.params['isBundle'].value;
  var lifecycleStatus = req.swagger.params['lifecycleStatus'].value;
  var validForStartDateTime = req.swagger.params['validForStartDateTime'].value;
  var validForEndDateTime = req.swagger.params['validForEndDateTime'].value;
  var serviceNumber = req.swagger.params['serviceNumber'].value;
  var relatedPartyRole = req.swagger.params['relatedPartyRole'].value;
  var relatedPartyName = req.swagger.params['relatedPartyName'].value;
  var serviceSpecCharacteristicName = req.swagger.params['serviceSpecCharacteristicName'].value;
  var serviceSpecCharacteristicValueType = req.swagger.params['serviceSpecCharacteristicValueType'].value;
  var serviceSpecCharacteristicConfigurable = req.swagger.params['serviceSpecCharacteristicConfigurable'].value;
  var serviceSpecificationName = req.swagger.params['serviceSpecificationName'].value;
  var serviceSpecificationVersion = req.swagger.params['serviceSpecificationVersion'].value;
  var serviceSpecificationRelationshipType = req.swagger.params['serviceSpecificationRelationshipType'].value;
  var resourceSpecificationName = req.swagger.params['resourceSpecificationName'].value;
  var resourceSpecificationVersion = req.swagger.params['resourceSpecificationVersion'].value;
  var attachmentType = req.swagger.params['attachmentType'].value;
  var attachmentUrl = req.swagger.params['attachmentUrl'].value;
  var bundledServiceSpecificationLifecycleStatus = req.swagger.params['bundledServiceSpecificationLifecycleStatus'].value;
  var bundledServiceSpecificationName = req.swagger.params['bundledServiceSpecificationName'].value;
  ServiceSpecification.listServiceSpecification(fields,version,lastUpdate,name,type,isBundle,lifecycleStatus,validForStartDateTime,validForEndDateTime,serviceNumber,relatedPartyRole,relatedPartyName,serviceSpecCharacteristicName,serviceSpecCharacteristicValueType,serviceSpecCharacteristicConfigurable,serviceSpecificationName,serviceSpecificationVersion,serviceSpecificationRelationshipType,resourceSpecificationName,resourceSpecificationVersion,attachmentType,attachmentUrl,bundledServiceSpecificationLifecycleStatus,bundledServiceSpecificationName)
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

module.exports.updateServiceSpecification = function updateServiceSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceSpecification = req.swagger.params['serviceSpecification'].value;
  ServiceSpecification.updateServiceSpecification(id,serviceSpecification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateServiceSpecificationPatch = function updateServiceSpecificationPatch (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceSpecification = req.swagger.params['serviceSpecification'].value;
  ServiceSpecification.updateServiceSpecificationPatch(id,serviceSpecification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
