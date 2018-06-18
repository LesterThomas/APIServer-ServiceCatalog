'use strict';

var fs = require('fs');
var yaml = require('js-yaml')

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
  "targetServiceSchema" : {
    "@type" : "@type",
    "@schemaLocation" : "@schemaLocation"
  },
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
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
  "@baseType" : "@baseType",
  "attachment" : [ {
    "description" : "description",
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "description" : "description",
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "serviceSpecCharacteristic" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "@valueSchemaLocation" : "@valueSchemaLocation",
    "isUnique" : true,
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    } ],
    "maxCardinality" : 6,
    "minCardinality" : 0,
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    } ],
    "regex" : "regex",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "@schemaLocation",
    "extensible" : true,
    "configurable" : true
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "@valueSchemaLocation" : "@valueSchemaLocation",
    "isUnique" : true,
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    } ],
    "maxCardinality" : 6,
    "minCardinality" : 0,
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    } ],
    "regex" : "regex",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "@schemaLocation",
    "extensible" : true,
    "configurable" : true
  } ],
  "serviceSpecRelationship" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "type" : "type"
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
 * Deletes a 'ServiceSpecification' by Id
 *
 * id String Identifier of the Service Specification
 * no response value expected for this operation
 **/
exports.deleteServiceSpecification = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**Utility function to retrieve all TOSCA templates and convert into Service Specifications */
exports.getServiceSpecifications = function() {
  return new Promise(function(resolve, reject) {

    var hostName= "http://localhost:8080";
    var basePathName= "/tmf-api/serviceCatalogManagement/v2/";
    var fileArray=[];
    var filestarttemplate='service-';
    var fileendtemplate='-template.yml';
    fs.readdirSync('TOSCA').forEach(file => {
      if ((file.substring(file.length-fileendtemplate.length)==fileendtemplate) && (file.substring(0,filestarttemplate.length)==filestarttemplate)) {
        fileArray.push(file);
      }
    });

    var outputServiceSpecArray=[];
    //for (var file_index=0;file_index<fileArray.length;file_index++){
    fileArray.forEach(function(fileName){
      var serviceName=fileName.substring(filestarttemplate.length,fileName.length-fileendtemplate.length);
      console.log('Service Name',serviceName);
      fs.readFile('TOSCA/'+fileName, 'utf8', function (err, data) {
        if (err) throw err;
        var yamlObject = yaml.safeLoad(data, 'utf8');

        var metadataObject=yamlObject.metadata;
        var inputObject=yamlObject.topology_template.inputs;
        var nodeTemplateObject=yamlObject.topology_template.node_templates;

        var outputServiceSpec =  {
          "isBundle" : false,
          "targetServiceSchema" : {
            "@type" : "TOSCAService",
            "@schemaLocation" : "@schemaLocation"
          },
          "lifecycleStatus" : "DEPLOYABLE",
          "@type" : "@type",
          "resourceSpecification" : [ {
            "name" : "name",
            "id" : "id",
            "href" : "href",
            "version" : "version"
          }],
          "description" : metadataObject.description,
          "version" : metadataObject.version,
          "@baseType" : "@baseType",
          "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
          "name" : metadataObject.name,
          "id" : metadataObject.UUID,
          "href" : hostName+basePathName+'serviceSpecification/'+metadataObject.UUID,
          "@schemaLocation" : "@schemaLocation",
          "serviceSpecCharacteristic" : [],
          "serviceSpecRelationship" : []
          //"relatedParty" : [ {
          //  "role" : "role",
          //  "validFor" : {
          //     "startDateTime" : "2000-01-23T04:56:07.000+00:00",
          //     "endDateTime" : "2000-01-23T04:56:07.000+00:00"
          //  },
          //  "name" : "name",
          //  "id" : "id",
          //  "href" : "href"
          //}],
          //"attachment" : [ {
          //  "description" : "description",
          //  "href" : "href",
          //  "id" : "id",
          //  "type" : "type",
          //  "url" : "url"
          //}],
          //"validFor" : {
          //  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
          //  "endDateTime" : "2000-01-23T04:56:07.000+00:00"
          //},
        } ;
        if (inputObject) {
          var serviceSpecKeys=Object.keys(inputObject);
          for (var i=0;i<serviceSpecKeys.length;i++) {
            var characteristicObject=inputObject[serviceSpecKeys[i]];
            var serviceSpecCharacteristic=
            {
              "@type" : "TOSCAServiceCharacteristic",
              "@valueSchemaLocation" : "@valueSchemaLocation",
              "description" : characteristicObject.description,
              "required" : characteristicObject.required,
              "status" : characteristicObject.status,
              "serviceSpecCharRelationship" : [],
              "valueType" : characteristicObject.type,
              "name" : serviceSpecKeys[i]
              //"isUnique" : true,
              //"maxCardinality" : 6,
              //"minCardinality" : 0,
              //"regex" : "regex",
              //"validFor" : {
                //"startDateTime" : "2000-01-23T04:56:07.000+00:00",
                //"endDateTime" : "2000-01-23T04:56:07.000+00:00"
              //},
              //"@schemaLocation" : "@schemaLocation",
              //"extensible" : true,
              //"configurable" : true
            }
            var serviceSpecCharacteristicValueArray=[];
            if (characteristicObject.default){
              var serviceSpecCharacteristicValue=
                {
                  "isDefault" : true,
                  "valueTo" : characteristicObject.default,
                  //"rangeInterval" : "rangeInterval",
                  //"regex" : "regex",
                  //"unitOfMeasure" : "unitOfMeasure",
                  //"validFor" : {
                  //  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
                  //  "endDateTime" : "2000-01-23T04:56:07.000+00:00"
                  //},
                  //"@type" : "@type",
                  //"valueType" : "valueType",
                  //"@schemaLocation" : "@schemaLocation"
                  //"value" : "{}",
                  //"valueFrom" : 1
                }
              serviceSpecCharacteristicValueArray.push(serviceSpecCharacteristicValue);      
            }

        
            serviceSpecCharacteristic.serviceSpecCharacteristicValue = serviceSpecCharacteristicValueArray;

            outputServiceSpec.serviceSpecCharacteristic.push(serviceSpecCharacteristic);
          }
        }
        outputServiceSpecArray.push(outputServiceSpec);
        if (outputServiceSpecArray.length == fileArray.length) {  //if this is last file processed (async) then resolve promise
          resolve(outputServiceSpecArray);
        } 
      });  
    });    

  });
}

/**
 * List or find 'ServiceSpecification' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * name String For filtering: Name given to this REST resource (optional)
 * type String For filtering: Class type of this REST resource (optional)
 * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
 * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
 * version String For filtering: Service specification version (optional)
 * validForStartDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
 * validForEndDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
 * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the service specification (optional)
 * isBundle Boolean For filtering: A flag indicates that if this service specification is a bundled specification (true) or single (false). (optional)
 * resourceSpecificationVersion String For filtering: ResourceSpecification version (optional)
 * resourceSpecificationName String For filtering: Name given to the ResourceSpecification (optional)
 * resourceSpecificationType String For filtering: The (class) type of the ResourceSpecification (optional)
 * attachmentName String For filtering: name given to the attachment (optional)
 * attachmentType String For filtering: Attachment class  type (optional)
 * attachmentUri String For filtering: Uniform Resource Identifier (URI) of the attachment (optional)
 * attachmentMimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
 * serviceSpecCharacteristicName String For filtering: A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications. (optional)
 * serviceSpecCharacteristicValueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
 * serviceSpecCharacteristicConfigurable Boolean For filtering: If true, the Boolean indicates that the ServiceSpecCharacteristic is configurable (optional)
 * serviceSpecCharacteristicType String For filtering: (Class) type of the ServiceSpecCharacteristic (optional)
 * serviceSpecCharacteristicSchemaLocation String For filtering: A link to the schema describing this characteristic (optional)
 * serviceSpecCharacteristicValueSchemaLocation String For filtering: This (optional) field provides a link to the schema describing the value type. (optional)
 * serviceSpecCharacteristicMinCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. (optional)
 * serviceSpecCharacteristicMaxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. (optional)
 * serviceSpecCharacteristicIsUnique Boolean For filtering: An indicator that specifies if a value is unique for the specification. Possible values are; \"unique while value is in effect\" and \"unique whether value is in effect or not\" (optional)
 * serviceSpecCharacteristicRegex String For filtering: A rule or principle represented in regular expression used to derive the value of a characteristic value. (optional)
 * serviceSpecCharacteristicExtensible Boolean For filtering: An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for an Entity. (optional)
 * relatedPartyRole String For filtering: Role of the related party. (optional)
 * relatedPartyName String For filtering: Name of the related party (optional)
 * serviceSpecRelationshipType String For filtering: Type of relationship such as migration, substitution, dependency, exclusivity (optional)
 * serviceSpecRelationshipRole String For filtering: The association role for this service specification (optional)
 * serviceSpecRelationshipName String For filtering: The name given to the target service specification instance (optional)
 * targetServiceSchemaType String For filtering: Class type of the target service (optional)
 * targetServiceSchemaSchemaLocation String For filtering: This field provides a link to the schema describing the target service (optional)
 * returns List
 **/
exports.listServiceSpecification = function(fields,name,type,schemaLocation,baseType,version,validForStartDateTime,validForEndDateTime,lastUpdate,lifecycleStatus,isBundle,resourceSpecificationVersion,resourceSpecificationName,resourceSpecificationType,attachmentName,attachmentType,attachmentUri,attachmentMimeType,serviceSpecCharacteristicName,serviceSpecCharacteristicValueType,serviceSpecCharacteristicConfigurable,serviceSpecCharacteristicType,serviceSpecCharacteristicSchemaLocation,serviceSpecCharacteristicValueSchemaLocation,serviceSpecCharacteristicMinCardinality,serviceSpecCharacteristicMaxCardinality,serviceSpecCharacteristicIsUnique,serviceSpecCharacteristicRegex,serviceSpecCharacteristicExtensible,relatedPartyRole,relatedPartyName,serviceSpecRelationshipType,serviceSpecRelationshipRole,serviceSpecRelationshipName,targetServiceSchemaType,targetServiceSchemaSchemaLocation) {
  return new Promise(function(resolve, reject) {

    exports.getServiceSpecifications().then(function(outputServiceSpecArray){
      resolve(outputServiceSpecArray);
    });

  });
  
}


/**
 * Updates partially a 'ServiceSpecification' by Id
 *
 * id String Identifier of the Service Specification
 * serviceSpecification ServiceSpecification_Update The Service Specification to be updated
 * returns ServiceSpecification
 **/
exports.patchServiceSpecification = function(id,serviceSpecification) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isBundle" : true,
  "targetServiceSchema" : {
    "@type" : "@type",
    "@schemaLocation" : "@schemaLocation"
  },
  "lifecycleStatus" : "lifecycleStatus",
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
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
  "@baseType" : "@baseType",
  "attachment" : [ {
    "description" : "description",
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  }, {
    "description" : "description",
    "href" : "href",
    "id" : "id",
    "type" : "type",
    "url" : "url"
  } ],
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "@schemaLocation",
  "serviceSpecCharacteristic" : [ {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "@valueSchemaLocation" : "@valueSchemaLocation",
    "isUnique" : true,
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    } ],
    "maxCardinality" : 6,
    "minCardinality" : 0,
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    } ],
    "regex" : "regex",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "@schemaLocation",
    "extensible" : true,
    "configurable" : true
  }, {
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "@valueSchemaLocation" : "@valueSchemaLocation",
    "isUnique" : true,
    "description" : "description",
    "serviceSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "valueTo" : 5,
      "regex" : "regex",
      "unitOfMeasure" : "unitOfMeasure",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "@schemaLocation",
      "value" : "{}",
      "valueFrom" : 1
    } ],
    "maxCardinality" : 6,
    "minCardinality" : 0,
    "serviceSpecCharRelationship" : [ {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    }, {
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "type" : "type"
    } ],
    "regex" : "regex",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "@schemaLocation",
    "extensible" : true,
    "configurable" : true
  } ],
  "serviceSpecRelationship" : [ {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "type" : "type"
  }, {
    "role" : "role",
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "type" : "type"
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
 * Retrieves a 'ServiceSpecification' by Id
 *
 * id String Identifier of the Service Specification
 * returns List
 **/
exports.retrieveServiceSpecification = function(id) {

  return new Promise(function(resolve, reject) {

    exports.getServiceSpecifications().then(function(outputServiceSpecArray){
      //find if array contains id
      var resolved=false;
      for (var i=0;i<outputServiceSpecArray.length;i++){
        if (outputServiceSpecArray[i].id==id){
          resolved=true;
          resolve([outputServiceSpecArray[i]]);
        }
      }
      if (!resolved){
        resolve([]);
      }
    });

  });
}

