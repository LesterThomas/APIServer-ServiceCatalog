'use strict';


/**
 * Creates a 'ImportJob'
 *
 * importJob ImportJob_Create The Import Job to be created
 * returns ImportJob
 **/
exports.createImportJob = function(importJob) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "path" : "path",
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
 * Deletes a 'ImportJob' by Id
 *
 * id String Identifier of the Import Job
 * no response value expected for this operation
 **/
exports.deleteImportJob = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find 'ImportJob' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * contentType String For filtering: Indicates the format of the imported data (optional)
 * path String For filtering: URL of the root resource where the content of the file specified by the import job must be applied (optional)
 * status String For filtering: Status of the import job (not started, running, succeeded, failed) (optional)
 * url String For filtering: URL of the file containing the data to be imported (optional)
 * completionDate Date For filtering: Date at which the job was completed (optional)
 * creationDate Date For filtering: Date at which the job was created (optional)
 * errorLog String For filtering: Reason for failure if status is failed (optional)
 * returns List
 **/
exports.listImportJob = function(fields,contentType,path,status,url,completionDate,creationDate,errorLog) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "path" : "path",
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
 * Retrieves a 'ImportJob' by Id
 *
 * id String Identifier of the Import Job
 * returns List
 **/
exports.retrieveImportJob = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "path" : "path",
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

