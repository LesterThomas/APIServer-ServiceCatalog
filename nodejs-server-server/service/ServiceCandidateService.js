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
  "isBundle" : true,
  "serviceCandidateTerm" : [ {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  }, {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecification" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "resourceCandidate" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "bundledServiceCandidate" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
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
 * List or find 'ServiceCandidate' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * version String For filtering: ServiceCandidate version (optional)
 * lastUpdate Date For filtering: Date and time of the last update (optional)
 * name String For filtering: Name of the serviceCandidate (optional)
 * isBundle Boolean For filtering: isBundle determines whether a serviceCandidate represents a single serviceCandidate (false), or a bundle of serviceCandidates (true). (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
 * validForStartDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
 * validForEndDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
 * serviceSpecificationVersion String For filtering: Version of the service specification (optional)
 * serviceSpecificationName String For filtering: Name of the service specification (optional)
 * serviceSpecificationType String For filtering: Type of the service specification (optional)
 * serviceCandidateVersion String For filtering: Version of the service candidate (optional)
 * serviceCandidateName String For filtering: Name of the service candidate (optional)
 * categoryVersion String For filtering: Category version (optional)
 * categoryName String For filtering: Name of the category (optional)
 * resourceCandidateVersion String For filtering: Version of the resource candidate (optional)
 * resourceCandidateName String For filtering: Name of the resource candidate (optional)
 * bundledServiceCandidateLifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
 * bundledServiceCandidateName String For filtering: Name of the BundledServiceCandidate (optional)
 * serviceCandidateTermName String For filtering: Name of the serviceCandidateTerm (optional)
 * serviceCandidateTermDuration String For filtering: Duration of the serviceCandidateTerm (optional)
 * returns List
 **/
exports.listServiceCandidate = function(fields,version,lastUpdate,name,isBundle,lifecycleStatus,validForStartDateTime,validForEndDateTime,serviceSpecificationVersion,serviceSpecificationName,serviceSpecificationType,serviceCandidateVersion,serviceCandidateName,categoryVersion,categoryName,resourceCandidateVersion,resourceCandidateName,bundledServiceCandidateLifecycleStatus,bundledServiceCandidateName,serviceCandidateTermName,serviceCandidateTermDuration) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isBundle" : true,
  "serviceCandidateTerm" : [ {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  }, {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecification" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "resourceCandidate" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "bundledServiceCandidate" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
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
  "isBundle" : true,
  "serviceCandidateTerm" : [ {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  }, {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecification" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "resourceCandidate" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "bundledServiceCandidate" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
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
 * Retrieves a 'ServiceCandidate' by Id
 *
 * id String Identifier of the Service Candidate
 * returns List
 **/
exports.retrieveServiceCandidate = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isBundle" : true,
  "serviceCandidateTerm" : [ {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  }, {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecification" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "resourceCandidate" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "bundledServiceCandidate" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
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
  "isBundle" : true,
  "serviceCandidateTerm" : [ {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  }, {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecification" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "resourceCandidate" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "bundledServiceCandidate" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
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
 * Updates a 'ServiceCandidate' by Id
 *
 * id String Identifier of the Service Candidate
 * serviceCandidate ServiceCandidate_Update The Service Candidate to be updated
 * returns ServiceCandidate
 **/
exports.updateServiceCandidate = function(id,serviceCandidate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "serviceCandidateTerm" : [ {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  }, {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecification" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "resourceCandidate" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "bundledServiceCandidate" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
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
 * Updates partially a 'ServiceCandidate' by Id
 *
 * id String Identifier of the Service Candidate
 * serviceCandidate ServiceCandidate_Update The Service Candidate to be updated
 * returns ServiceCandidate
 **/
exports.updateServiceCandidatePatch = function(id,serviceCandidate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "serviceCandidateTerm" : [ {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  }, {
    "duration" : "duration",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "description" : "description"
  } ],
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecification" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "description" : "description",
  "version" : "version",
  "resourceCandidate" : {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  },
  "bundledServiceCandidate" : [ {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "lifecycleStatus" : "lifecycleStatus",
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
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

