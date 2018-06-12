'use strict';

var utils = require('../utils/writer.js');
var EventsPublication = require('../service/EventsPublicationService');

module.exports.publishCatalogChangeBatchNotification = function publishCatalogChangeBatchNotification (req, res, next) {
  var catalogChangeBatchNotification = req.swagger.params['catalogChangeBatchNotification'].value;
  EventsPublication.publishCatalogChangeBatchNotification(catalogChangeBatchNotification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.publishCatalogChangeNotification = function publishCatalogChangeNotification (req, res, next) {
  var catalogChangeNotification = req.swagger.params['catalogChangeNotification'].value;
  EventsPublication.publishCatalogChangeNotification(catalogChangeNotification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
