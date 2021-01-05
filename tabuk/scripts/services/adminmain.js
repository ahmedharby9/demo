'use strict';

/**
 * @ngdoc service
 * @name tabukApp.adminMain
 * @description
 * # adminMain
 * Service in the tabukApp.
 */
angular.module('tabukApp')
  .service('adminMain', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var callServer = {}

    callServer.setSerialNO = function (data) {
      return $http.post("/server/server.php", data).then(function (result) {
        return 'success';
      }, function (result) {
        return 'fiald';
      });
    }

  });
