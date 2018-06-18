'use strict';


/**
 * Creates a 'ExportJob'
 *
 * exportJob ExportJob_Create The Export Job to be created
 * returns ExportJob
 **/
exports.createExportJob = function(exportJob) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "path" : "path",
  "query" : "query",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "contentType" : "contentType",
  "url" : "url",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a 'ExportJob' by Id
 *
 * id String Identifier of the Export Job
 * no response value expected for this operation
 **/
exports.deleteExportJob = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find 'ExportJob' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * query String For filtering: Used to scope the exported data (optional)
 * path String For filtering: URL of the root resource acting as the source for streaming content to the file specified by the export job (optional)
 * contentType String For filtering: The format of the exported data (optional)
 * status String For filtering: Status of the export job (not started, running, succeeded, failed) (optional)
 * url String For filtering: URL of the file containing the data to be exported (optional)
 * completionDate Date For filtering: Data at which the job was completed (optional)
 * creationDate Date For filtering: Date at which the job was created (optional)
 * errorLog String For filtering: Reason for failure (optional)
 * returns List
 **/
exports.listExportJob = function(fields,query,path,contentType,status,url,completionDate,creationDate,errorLog) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "path" : "path",
  "query" : "query",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "contentType" : "contentType",
  "url" : "url",
  "status" : "status"
}, {
  "path" : "path",
  "query" : "query",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "contentType" : "contentType",
  "url" : "url",
  "status" : "status"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a 'ExportJob' by Id
 *
 * id String Identifier of the Export Job
 * returns List
 **/
exports.retrieveExportJob = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "path" : "path",
  "query" : "query",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "contentType" : "contentType",
  "url" : "url",
  "status" : "status"
}, {
  "path" : "path",
  "query" : "query",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "errorLog" : "errorLog",
  "id" : "id",
  "href" : "href",
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "contentType" : "contentType",
  "url" : "url",
  "status" : "status"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

