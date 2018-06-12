'use strict';


/**
 * Creates a 'ServiceSpecification'
 *
 * serviceSpecification ServiceSpecification_Create The Service Specification to be created
 * returns ServiceSpecification
 **/
exports.createServiceSpecification = function(serviceSpecification) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "serviceNumber" : "serviceNumber",
  "bundledServiceSpecification" : [ {
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
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecificationRelationship" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  } ],
  "resourceSpecification" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "description" : "description",
  "type" : "type",
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
  "attachment" : [ {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "serviceSpecCharacteristic" : [ {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  }, {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
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
 * List or find 'ServiceSpecification' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * version String For filtering: Service specification version (optional)
 * lastUpdate Date For filtering: Date and time of the last update (optional)
 * name String For filtering: Name of the service specification (optional)
 * type String For filtering: Type of the service specification (optional)
 * isBundle Boolean For filtering: isBundle determines whether a serviceSpecification represents a single serviceSpecification (false), or a bundle of serviceSpecification (true). (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
 * validForStartDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
 * validForEndDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
 * serviceNumber String For filtering: An identification number assigned to uniquely identity the specification (optional)
 * relatedPartyRole String For filtering: Role of the related party. (optional)
 * relatedPartyName String For filtering: Name of the related party (optional)
 * serviceSpecCharacteristicName String For filtering: Name of the serviceSpecCharacteristic (optional)
 * serviceSpecCharacteristicValueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
 * serviceSpecCharacteristicConfigurable Boolean For filtering: If true, the Boolean indicates that the serviceSpecCharacteristic is configurable (optional)
 * serviceSpecificationName String For filtering: Name of the requiredServiceSpecification (optional)
 * serviceSpecificationVersion String For filtering: Service specification version (optional)
 * serviceSpecificationRelationshipType String For filtering: Type of relationship such as migration, substitution, dependency, exclusivity (optional)
 * resourceSpecificationName String For filtering: Name of the requiredResourceSpecification (optional)
 * resourceSpecificationVersion String For filtering: Resource specification version (optional)
 * attachmentType String For filtering: Attachment type such as video, picture (optional)
 * attachmentUrl String For filtering: Uniform Resource Locator, is a web page address (a subset of URI) (optional)
 * bundledServiceSpecificationLifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
 * bundledServiceSpecificationName String For filtering: Name of the service specification (optional)
 * returns List
 **/
exports.listServiceSpecification = function(fields,version,lastUpdate,name,type,isBundle,lifecycleStatus,validForStartDateTime,validForEndDateTime,serviceNumber,relatedPartyRole,relatedPartyName,serviceSpecCharacteristicName,serviceSpecCharacteristicValueType,serviceSpecCharacteristicConfigurable,serviceSpecificationName,serviceSpecificationVersion,serviceSpecificationRelationshipType,resourceSpecificationName,resourceSpecificationVersion,attachmentType,attachmentUrl,bundledServiceSpecificationLifecycleStatus,bundledServiceSpecificationName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isBundle" : true,
  "serviceNumber" : "serviceNumber",
  "bundledServiceSpecification" : [ {
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
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecificationRelationship" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  } ],
  "resourceSpecification" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "description" : "description",
  "type" : "type",
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
  "attachment" : [ {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "serviceSpecCharacteristic" : [ {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  }, {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  } ]
}, {
  "isBundle" : true,
  "serviceNumber" : "serviceNumber",
  "bundledServiceSpecification" : [ {
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
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecificationRelationship" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  } ],
  "resourceSpecification" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "description" : "description",
  "type" : "type",
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
  "attachment" : [ {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "serviceSpecCharacteristic" : [ {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  }, {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
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
 * Retrieves a 'ServiceSpecification' by Id
 *
 * id String Identifier of the Service Specification
 * returns List
 **/
exports.retrieveServiceSpecification = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "isBundle" : true,
  "serviceNumber" : "serviceNumber",
  "bundledServiceSpecification" : [ {
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
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecificationRelationship" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  } ],
  "resourceSpecification" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "description" : "description",
  "type" : "type",
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
  "attachment" : [ {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "serviceSpecCharacteristic" : [ {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  }, {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  } ]
}, {
  "isBundle" : true,
  "serviceNumber" : "serviceNumber",
  "bundledServiceSpecification" : [ {
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
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecificationRelationship" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  } ],
  "resourceSpecification" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "description" : "description",
  "type" : "type",
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
  "attachment" : [ {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "serviceSpecCharacteristic" : [ {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  }, {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
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
 * Updates a 'ServiceSpecification' by Id
 *
 * id String Identifier of the Service Specification
 * serviceSpecification ServiceSpecification_Update The Service Specification to be updated
 * returns ServiceSpecification
 **/
exports.updateServiceSpecification = function(id,serviceSpecification) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "serviceNumber" : "serviceNumber",
  "bundledServiceSpecification" : [ {
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
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecificationRelationship" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  } ],
  "resourceSpecification" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "description" : "description",
  "type" : "type",
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
  "attachment" : [ {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "serviceSpecCharacteristic" : [ {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  }, {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
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
 * Updates partially a 'ServiceSpecification' by Id
 *
 * id String Identifier of the Service Specification
 * serviceSpecification ServiceSpecification_Update The Service Specification to be updated
 * returns ServiceSpecification
 **/
exports.updateServiceSpecificationPatch = function(id,serviceSpecification) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "serviceNumber" : "serviceNumber",
  "bundledServiceSpecification" : [ {
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
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "serviceSpecificationRelationship" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "id" : "id",
    "href" : "href",
    "type" : "type"
  } ],
  "resourceSpecification" : [ {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  }, {
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "version" : "version"
  } ],
  "description" : "description",
  "type" : "type",
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
  "attachment" : [ {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "serviceSpecCharacteristic" : [ {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  }, {
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "type" : "type"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "valueType" : "valueType",
    "name" : "name",
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    }, {
      "default" : true,
      "valueTo" : "valueTo",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "valueType" : "valueType",
      "value" : "value",
      "valueFrom" : "valueFrom"
    } ],
    "configurable" : true
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

