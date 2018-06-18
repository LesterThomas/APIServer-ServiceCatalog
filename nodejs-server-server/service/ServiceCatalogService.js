'use strict';


/**
 * Creates a 'ServiceCatalog'
 *
 * serviceCatalog ServiceCatalog_Create The Service Catalog to be created
 * returns ServiceCatalog
 **/
exports.createServiceCatalog = function(serviceCatalog) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "@baseType" : "@baseType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a 'ServiceCatalog' by Id
 *
 * id String Identifier of the Service Catalog
 * no response value expected for this operation
 **/
exports.deleteServiceCatalog = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find 'ServiceCatalog' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * name String For filtering: Name of the catalog (optional)
 * type String For filtering: Indicates the (class) type of catalog. For service catalogs, this will be 'ServiceCatalog'. (optional)
 * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
 * @baseType String For filtering: Indicates<b> </b>the base (class) type of this REST resource (optional)
 * version String For filtering: Catalog version (optional)
 * validForStartDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
 * validForEndDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
 * lastUpdate Date For filtering: Date and time of the last update (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
 * returns List
 **/
exports.listServiceCatalog = function(fields,name,type,schemaLocation,baseType,version,validForStartDateTime,validForEndDateTime,lastUpdate,lifecycleStatus) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "@baseType" : "@baseType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "version" : "version"
}, {
  "@baseType" : "@baseType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "version" : "version"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates partially a 'ServiceCatalog' by Id
 *
 * id String Identifier of the Service Catalog
 * serviceCatalog ServiceCatalog_Update The Service Catalog to be updated
 * returns ServiceCatalog
 **/
exports.patchServiceCatalog = function(id,serviceCatalog) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "@baseType" : "@baseType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "version" : "version"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a 'ServiceCatalog' by Id
 *
 * id String Identifier of the Service Catalog
 * returns List
 **/
exports.retrieveServiceCatalog = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "@baseType" : "@baseType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "version" : "version"
}, {
  "@baseType" : "@baseType",
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "version" : "version"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

