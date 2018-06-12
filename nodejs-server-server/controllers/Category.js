'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.createCategory = function createCategory (req, res, next) {
  var category = req.swagger.params['category'].value;
  Category.createCategory(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCategory = function listCategory (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var lastUpdate = req.swagger.params['lastUpdate'].value;
  var version = req.swagger.params['version'].value;
  var lifecycleStatus = req.swagger.params['lifecycleStatus'].value;
  var validForStartDateTime = req.swagger.params['validForStartDateTime'].value;
  var validForEndDateTime = req.swagger.params['validForEndDateTime'].value;
  var parentId = req.swagger.params['parentId'].value;
  var isRoot = req.swagger.params['isRoot'].value;
  var name = req.swagger.params['name'].value;
  Category.listCategory(fields,lastUpdate,version,lifecycleStatus,validForStartDateTime,validForEndDateTime,parentId,isRoot,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveCategory = function retrieveCategory (req, res, next) {
  var id = req.swagger.params['id'].value;
  Category.retrieveCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategory = function updateCategory (req, res, next) {
  var id = req.swagger.params['id'].value;
  var category = req.swagger.params['category'].value;
  Category.updateCategory(id,category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategoryPatch = function updateCategoryPatch (req, res, next) {
  var id = req.swagger.params['id'].value;
  var category = req.swagger.params['category'].value;
  Category.updateCategoryPatch(id,category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
