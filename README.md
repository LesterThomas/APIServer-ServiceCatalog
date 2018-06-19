# APIServer-ServiceCatalog

Test (stub) server for TMF ServiceCatalog Open-API.

This is a simple experiment to show the relationship between TOSCA templates to define a service (the Receipe for the service) and TM Forum Open-APIs (how the service gets published in the Menu). 

The API runs in a nodejs server that is available locally (http://localhost:8080/docs). Here are the steps I took to create the server:

1. Generate the server stub implementation by passing the TM Forum Service Catalog (https://github.com/tmforum-apis/TMF633_ServiceCatalog)  swagger through the swagger generator (http://editor.swagger.io/). This generates a fully functional stub implementation of the API which will return test payloads.
2. Swap the test payload for ServiceSpecification GET methods to build a real service by examining the TOSCA file for the service. I followed the ONAP external api design patterns (https://wiki.onap.org/download/attachments/8227019/ONAP%20External%20API%20-%20Northbound%20API%20Design%20-Draft%20Doc.docx?api=v2). The ONAP code is also available in Java (https://gerrit.onap.org/r/externalapi/nbi).

The design maps the TOSCA metadata into the service specification and the TOSCA inputs into the service specification characteristics (and values).


