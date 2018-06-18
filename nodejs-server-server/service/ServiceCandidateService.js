'use strict';


/**
 * Creates a 'ServiceCandidate'
 *
 * serviceCandidate ServiceCandidate_Create The Service Candidate to be created
 * returns ServiceCandidate
 **/
exports.createServiceCandidate = function(serviceCandidate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "serviceSpecification" : {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "category" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a 'ServiceCandidate' by Id
 *
 * id String Identifier of the Service Candidate
 * no response value expected for this operation
 **/
exports.deleteServiceCandidate = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find 'ServiceCandidate' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * name String For filtering: Name given to this REST resource (optional)
 * type String For filtering: Class type of this REST resource (optional)
 * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
 * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
 * version String For filtering: the version of service candidate (optional)
 * validForStartDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
 * validForEndDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
 * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the service candidate. (optional)
 * categoryVersion String For filtering: Category version (optional)
 * categoryName String For filtering: Name of the category (optional)
 * categoryType String For filtering: the class type of the category (optional)
 * serviceSpecificationVersion String For filtering: ServiceSpecification version (optional)
 * serviceSpecificationName String For filtering: Name given to the ServiceSpecification (optional)
 * serviceSpecificationType String For filtering: The (class) type of the ServiceSpecification (optional)
 * returns List
 **/
exports.listServiceCandidate = function(fields,name,type,schemaLocation,baseType,version,validForStartDateTime,validForEndDateTime,lastUpdate,lifecycleStatus,categoryVersion,categoryName,categoryType,serviceSpecificationVersion,serviceSpecificationName,serviceSpecificationType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "serviceSpecification" : {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "category" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ]
}, {
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "serviceSpecification" : {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "category" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates partially a 'ServiceCandidate' by Id
 *
 * id String Identifier of the Service Candidate
 * serviceCandidate ServiceCandidate_Update The Service Candidate to be updated
 * returns ServiceCandidate
 **/
exports.patchServiceCandidate = function(id,serviceCandidate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "serviceSpecification" : {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "category" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a 'ServiceCandidate' by Id
 *
 * id String Identifier of the Service Candidate
 * returns List
 **/
exports.retrieveServiceCandidate = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "serviceSpecification" : {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "category" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ]
}, {
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "serviceSpecification" : {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "category" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

