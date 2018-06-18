'use strict';

var utils = require('../utils/writer.js');
var ServiceCatalog = require('../service/ServiceCatalogService');

module.exports.createServiceCatalog = function createServiceCatalog (req, res, next) {
  var serviceCatalog = req.swagger.params['serviceCatalog'].value;
  ServiceCatalog.createServiceCatalog(serviceCatalog)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServiceCatalog = function deleteServiceCatalog (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceCatalog.deleteServiceCatalog(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listServiceCatalog = function listServiceCatalog (req, res, next) {
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
  ServiceCatalog.listServiceCatalog(fields,name,type,schemaLocation,baseType,version,validForStartDateTime,validForEndDateTime,lastUpdate,lifecycleStatus)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchServiceCatalog = function patchServiceCatalog (req, res, next) {
  var id = req.swagger.params['id'].value;
  var serviceCatalog = req.swagger.params['serviceCatalog'].value;
  ServiceCatalog.patchServiceCatalog(id,serviceCatalog)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveServiceCatalog = function retrieveServiceCatalog (req, res, next) {
  var id = req.swagger.params['id'].value;
  ServiceCatalog.retrieveServiceCatalog(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
