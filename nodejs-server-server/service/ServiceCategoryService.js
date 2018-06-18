'use strict';


/**
 * Creates a 'ServiceCategory'
 *
 * serviceCategory ServiceCategory_Create The Service Category to be created
 * returns ServiceCategory
 **/
exports.createServiceCategory = function(serviceCategory) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceCandidate" : [ {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "version" : "version",
  "parentId" : "parentId",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "@schemalLocation" : "@schemalLocation",
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
 * Deletes a 'ServiceCategory' by Id
 *
 * id String Identifier of the Service Category
 * no response value expected for this operation
 **/
exports.deleteServiceCategory = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find 'ServiceCategory' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * name String For filtering: Name of the category (optional)
 * type String For filtering: The (class) type of this category (optional)
 * @schemalLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
 * @baseType String For filtering: Immediate base class type of this category (optional)
 * version String For filtering: Category version (optional)
 * validForStartDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
 * validForEndDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
 * lastUpdate Date For filtering: Date and time of the last update (optional)
 * parentId String For filtering: Unique identifier of the parent category (optional)
 * isRoot Boolean For filtering: If true, this Boolean indicates that the category is a root of categories (optional)
 * relatedPartyRole String For filtering: Role of the related party. (optional)
 * relatedPartyName String For filtering: Name of the related party (optional)
 * serviceCandidateVersion String For filtering: ServiceCandidate version (optional)
 * serviceCandidateName String For filtering: Name given to the ServiceCandidate (optional)
 * serviceCandidateType String For filtering: The (class) type of the ServiceCandidate (optional)
 * categoryVersion String For filtering: Category version (optional)
 * categoryName String For filtering: Name of the category (optional)
 * categoryType String For filtering: the class type of the category (optional)
 * returns List
 **/
exports.listServiceCategory = function(fields,name,type,schemalLocation,baseType,version,validForStartDateTime,validForEndDateTime,lifecycleStatus,lastUpdate,parentId,isRoot,relatedPartyRole,relatedPartyName,serviceCandidateVersion,serviceCandidateName,serviceCandidateType,categoryVersion,categoryName,categoryType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceCandidate" : [ {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "version" : "version",
  "parentId" : "parentId",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "@schemalLocation" : "@schemalLocation",
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
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceCandidate" : [ {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "version" : "version",
  "parentId" : "parentId",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "@schemalLocation" : "@schemalLocation",
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
 * Updates partially a 'ServiceCategory' by Id
 *
 * id String Identifier of the Service Category
 * serviceCategory ServiceCategory_Update The Service Category to be updated
 * returns ServiceCategory
 **/
exports.patchServiceCategory = function(id,serviceCategory) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceCandidate" : [ {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "version" : "version",
  "parentId" : "parentId",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "@schemalLocation" : "@schemalLocation",
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
 * Retrieves a 'ServiceCategory' by Id
 *
 * id String Identifier of the Service Category
 * returns List
 **/
exports.retrieveServiceCategory = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceCandidate" : [ {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "version" : "version",
  "parentId" : "parentId",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "@schemalLocation" : "@schemalLocation",
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
  "lifecycleStatus" : "lifecycleStatus",
  "isRoot" : true,
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceCandidate" : [ {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "@type" : "@type",
  "description" : "description",
  "relatedParty" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href"
  } ],
  "version" : "version",
  "parentId" : "parentId",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "@schemalLocation" : "@schemalLocation",
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

