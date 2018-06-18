'use strict';

var utils = require('../utils/writer.js');
var ImportJob = require('../service/ImportJobService');

module.exports.createImportJob = function createImportJob (req, res, next) {
  var importJob = req.swagger.params['importJob'].value;
  ImportJob.createImportJob(importJob)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImportJob = function deleteImportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  ImportJob.deleteImportJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listImportJob = function listImportJob (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var contentType = req.swagger.params['contentType'].value;
  var path = req.swagger.params['path'].value;
  var status = req.swagger.params['status'].value;
  var url = req.swagger.params['url'].value;
  var completionDate = req.swagger.params['completionDate'].value;
  var creationDate = req.swagger.params['creationDate'].value;
  var errorLog = req.swagger.params['errorLog'].value;
  ImportJob.listImportJob(fields,contentType,path,status,url,completionDate,creationDate,errorLog)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveImportJob = function retrieveImportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  ImportJob.retrieveImportJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
