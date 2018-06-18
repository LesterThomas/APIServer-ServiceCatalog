'use strict';

var utils = require('../utils/writer.js');
var ExportJob = require('../service/ExportJobService');

module.exports.createExportJob = function createExportJob (req, res, next) {
  var exportJob = req.swagger.params['exportJob'].value;
  ExportJob.createExportJob(exportJob)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteExportJob = function deleteExportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  ExportJob.deleteExportJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExportJob = function listExportJob (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var query = req.swagger.params['query'].value;
  var path = req.swagger.params['path'].value;
  var contentType = req.swagger.params['contentType'].value;
  var status = req.swagger.params['status'].value;
  var url = req.swagger.params['url'].value;
  var completionDate = req.swagger.params['completionDate'].value;
  var creationDate = req.swagger.params['creationDate'].value;
  var errorLog = req.swagger.params['errorLog'].value;
  ExportJob.listExportJob(fields,query,path,contentType,status,url,completionDate,creationDate,errorLog)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveExportJob = function retrieveExportJob (req, res, next) {
  var id = req.swagger.params['id'].value;
  ExportJob.retrieveExportJob(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
