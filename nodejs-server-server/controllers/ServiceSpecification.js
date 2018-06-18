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

module.exports.deleteServiceSpecification = function deleteServiceSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceSpecification.deleteServiceSpecification(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listServiceSpecification = function listServiceSpecification (req, res, next) {
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
  var isBundle = req.swagger.params['isBundle'].value;
  var resourceSpecificationVersion = req.swagger.params['resourceSpecificationVersion'].value;
  var resourceSpecificationName = req.swagger.params['resourceSpecificationName'].value;
  var resourceSpecificationType = req.swagger.params['resourceSpecificationType'].value;
  var attachmentName = req.swagger.params['attachmentName'].value;
  var attachmentType = req.swagger.params['attachmentType'].value;
  var attachmentUri = req.swagger.params['attachmentUri'].value;
  var attachmentMimeType = req.swagger.params['attachmentMimeType'].value;
  var serviceSpecCharacteristicName = req.swagger.params['serviceSpecCharacteristicName'].value;
  var serviceSpecCharacteristicValueType = req.swagger.params['serviceSpecCharacteristicValueType'].value;
  var serviceSpecCharacteristicConfigurable = req.swagger.params['serviceSpecCharacteristicConfigurable'].value;
  var serviceSpecCharacteristicType = req.swagger.params['serviceSpecCharacteristicType'].value;
  var serviceSpecCharacteristicSchemaLocation = req.swagger.params['serviceSpecCharacteristicSchemaLocation'].value;
  var serviceSpecCharacteristicValueSchemaLocation = req.swagger.params['serviceSpecCharacteristicValueSchemaLocation'].value;
  var serviceSpecCharacteristicMinCardinality = req.swagger.params['serviceSpecCharacteristicMinCardinality'].value;
  var serviceSpecCharacteristicMaxCardinality = req.swagger.params['serviceSpecCharacteristicMaxCardinality'].value;
  var serviceSpecCharacteristicIsUnique = req.swagger.params['serviceSpecCharacteristicIsUnique'].value;
  var serviceSpecCharacteristicRegex = req.swagger.params['serviceSpecCharacteristicRegex'].value;
  var serviceSpecCharacteristicExtensible = req.swagger.params['serviceSpecCharacteristicExtensible'].value;
  var relatedPartyRole = req.swagger.params['relatedPartyRole'].value;
  var relatedPartyName = req.swagger.params['relatedPartyName'].value;
  var serviceSpecRelationshipType = req.swagger.params['serviceSpecRelationshipType'].value;
  var serviceSpecRelationshipRole = req.swagger.params['serviceSpecRelationshipRole'].value;
  var serviceSpecRelationshipName = req.swagger.params['serviceSpecRelationshipName'].value;
  var targetServiceSchemaType = req.swagger.params['targetServiceSchemaType'].value;
  var targetServiceSchemaSchemaLocation = req.swagger.params['targetServiceSchemaSchemaLocation'].value;
  ServiceSpecification.listServiceSpecification(fields,name,type,schemaLocation,baseType,version,validForStartDateTime,validForEndDateTime,lastUpdate,lifecycleStatus,isBundle,resourceSpecificationVersion,resourceSpecificationName,resourceSpecificationType,attachmentName,attachmentType,attachmentUri,attachmentMimeType,serviceSpecCharacteristicName,serviceSpecCharacteristicValueType,serviceSpecCharacteristicConfigurable,serviceSpecCharacteristicType,serviceSpecCharacteristicSchemaLocation,serviceSpecCharacteristicValueSchemaLocation,serviceSpecCharacteristicMinCardinality,serviceSpecCharacteristicMaxCardinality,serviceSpecCharacteristicIsUnique,serviceSpecCharacteristicRegex,serviceSpecCharacteristicExtensible,relatedPartyRole,relatedPartyName,serviceSpecRelationshipType,serviceSpecRelationshipRole,serviceSpecRelationshipName,targetServiceSchemaType,targetServiceSchemaSchemaLocation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchServiceSpecification = function patchServiceSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceSpecification = req.swagger.params['serviceSpecification'].value;
  ServiceSpecification.patchServiceSpecification(id,serviceSpecification)
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
