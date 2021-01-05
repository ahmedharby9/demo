'use strict';

/**
 * @ngdoc function
 * @name tabukApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tabukApp
 */
angular.module('tabukApp')
  .controller('LoginCtrl', function ($scope, AuthenticationService, $location) {
    // reset login status
    $scope.serialNo = "";
    AuthenticationService.ClearCredentials();
    $scope.login = function () {
      AuthenticationService.Login($scope.serialNo, function (response) {
        console.log(response);
        if (response.success) {
          AuthenticationService.SetCredentials($scope.serialNo);
          $location.path('/main');
        } else {
          $scope.error = response.message;
        }
      });
    };
  });
