'use strict';

var fs = require('fs');
var yaml = require('js-yaml');

/** Utility function to retrieve all TOSCA templates and convert into Service Specifications */
// TODO add related party info; @baseType;
exports.getServiceSpecifications = function() {
  return new Promise(function(resolve, reject) {

    var hostName = 'http://localhost:8080';
    var basePathName = '/tmf-api/serviceCatalogManagement/v2/';
    var fileArray = [];
    var filestarttemplate = 'service-';
    var fileendtemplate = '-template.yml';
    fs.readdirSync('TOSCA').forEach((file) => {
      if ((file.substring(file.length - fileendtemplate.length) === fileendtemplate) && (file.substring(0, filestarttemplate.length) === filestarttemplate)) {
        fileArray.push(file);
      }
    });

    var outputServiceSpecArray = [];
    // for (var file_index=0;file_index<fileArray.length;file_index++){
    fileArray.forEach(function(fileName){
      var serviceName = fileName.substring(filestarttemplate.length, fileName.length - fileendtemplate.length);
      console.log('Service Name', serviceName);
      fs.readFile('TOSCA/' + fileName, 'utf8', function(err, data) {
        if (err) throw err;
        var yamlObject = yaml.safeLoad(data, 'utf8');

        var metadataObject = yamlObject.metadata;
        var inputObject = yamlObject.topology_template.inputs;
        var nodeTemplateObject = yamlObject.topology_template.node_templates;

        var outputResourceSpecArray = [];

        var resourceSpecKeys = Object.keys(nodeTemplateObject);
        resourceSpecKeys.forEach(function(resourceSpecKey){
          if (nodeTemplateObject[resourceSpecKey].metadata) {
            var resourceSpec = {name: nodeTemplateObject[resourceSpecKey].metadata.name,
              description: nodeTemplateObject[resourceSpecKey].metadata.description,
              id: nodeTemplateObject[resourceSpecKey].metadata.invariantUUID,
              version: nodeTemplateObject[resourceSpecKey].metadata.version,
              '@type': 'ONAPResource',
              resourceType: nodeTemplateObject[resourceSpecKey].type,
            };
            outputResourceSpecArray.push(resourceSpec);
          }
        });

        var outputServiceSpec = {
          isBundle: false,
          targetServiceSchema: {
            '@type': 'TOSCAService',
            '@schemaLocation': '@schemaLocation',
          },
          lifecycleStatus: 'CERTIFIED',
          '@type': 'ServiceCatalog',
          resourceSpecification: outputResourceSpecArray,
          description: metadataObject.description,
          version: metadataObject.version,
          '@baseType': '@baseType',
          lastUpdate: '2000-01-23T04:56:07.000+00:00',
          name: metadataObject.name,
          id: metadataObject.UUID,
          href: hostName + basePathName + 'serviceSpecification/' + metadataObject.UUID,
          '@schemaLocation': '#/definitions/ServiceSpecification',
          serviceSpecCharacteristic: [],
          serviceSpecRelationship: [],
        };
        if (inputObject) {
          var serviceSpecKeys = Object.keys(inputObject);
          for (var i = 0; i < serviceSpecKeys.length; i++) {
            var characteristicObject = inputObject[serviceSpecKeys[i]];
            var serviceSpecCharacteristic =
            {
              '@type': 'TOSCAServiceCharacteristic',
              '@valueSchemaLocation': '@valueSchemaLocation',
              description: characteristicObject.description,
              required: characteristicObject.required,
              status: characteristicObject.status,
              serviceSpecCharRelationship: [],
              valueType: characteristicObject.type,
              name: serviceSpecKeys[i],
            };
            var serviceSpecCharacteristicValueArray = [];
            if (characteristicObject.default){
              var serviceSpecCharacteristicValue =
                {
                  isDefault: true,
                  valueTo: characteristicObject.default,
                };
              serviceSpecCharacteristicValueArray.push(serviceSpecCharacteristicValue);
            }


            serviceSpecCharacteristic.serviceSpecCharacteristicValue = serviceSpecCharacteristicValueArray;

            outputServiceSpec.serviceSpecCharacteristic.push(serviceSpecCharacteristic);
          }
        }
        outputServiceSpecArray.push(outputServiceSpec);
        if (outputServiceSpecArray.length === fileArray.length) { // if this is last file processed (async) then resolve promise
          resolve(outputServiceSpecArray);
        }
      });
    });

  });
};


/** Utility function to return subset of fields in serviceSpecificationArray */
exports.returnFields = function(inFields, inServiceSpecArray) {
  var newOutput = [];
  inServiceSpecArray.forEach(function(outputServiceSpec){
    var fieldsArray = inFields.split(',');
    var newValue = {};
    fieldsArray.forEach(function(field){
      newValue[field] = outputServiceSpec[field];
    });
    newOutput.push(newValue);
  });
  return newOutput;

};

/** Utility function to filter serviceSpecificationArray based on a field */
exports.filterArray = function(inField, inValue, inServiceSpecArray) {
  var outputServiceSpecArray = [];
  if (inValue) {
    for (var i = 0; i < inServiceSpecArray.length; i++){
      if (inServiceSpecArray[i][inField] === inValue){
        outputServiceSpecArray.push(inServiceSpecArray[i]);
      }
    }

  } else {
    outputServiceSpecArray = inServiceSpecArray;
  }
  return outputServiceSpecArray;
};

/**
 * List or find 'ServiceSpecification' objects
 *
 * fields String Comma separated properties to display in response (optional)
 * name String For filtering: Name given to this REST resource (optional)
 * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the service specification (optional)
 * returns List
 **/
exports.listServiceSpecification = function(fields, name, type, schemaLocation, baseType, version, validForStartDateTime, validForEndDateTime, lastUpdate, lifecycleStatus, isBundle, resourceSpecificationVersion, resourceSpecificationName, resourceSpecificationType, attachmentName, attachmentType, attachmentUri, attachmentMimeType, serviceSpecCharacteristicName, serviceSpecCharacteristicValueType, serviceSpecCharacteristicConfigurable, serviceSpecCharacteristicType, serviceSpecCharacteristicSchemaLocation, serviceSpecCharacteristicValueSchemaLocation, serviceSpecCharacteristicMinCardinality, serviceSpecCharacteristicMaxCardinality, serviceSpecCharacteristicIsUnique, serviceSpecCharacteristicRegex, serviceSpecCharacteristicExtensible, relatedPartyRole, relatedPartyName, serviceSpecRelationshipType, serviceSpecRelationshipRole, serviceSpecRelationshipName, targetServiceSchemaType, targetServiceSchemaSchemaLocation) {
  return new Promise(function(resolve, reject) {

    exports.getServiceSpecifications().then(function(serviceSpecArray){

      var filteredServiceSpecArray = exports.filterArray('name', name, exports.filterArray('lifecycleStatus', lifecycleStatus, serviceSpecArray));

      if (fields) { // only return the requested fields

        var newServiceSpecArray = exports.returnFields(fields, filteredServiceSpecArray);
        resolve(newServiceSpecArray);

      } else {
        resolve(filteredServiceSpecArray);
      }
    });

  });

};


/**
 * Retrieves a 'ServiceSpecification' by Id
 *
 * id String Identifier of the Service Specification
 * returns List
 **/
exports.retrieveServiceSpecification = function(id) {

  return new Promise(function(resolve, reject) {

    exports.getServiceSpecifications().then(function(outputServiceSpecArray){
      // find if array contains id
      var resolved = false;
      for (var i = 0; i < outputServiceSpecArray.length; i++){
        if (outputServiceSpecArray[i].id === id){
          resolved = true;
          resolve([outputServiceSpecArray[i]]);
        }
      }
      if (!resolved){
        resolve([]);
      }
    });

  });
};

