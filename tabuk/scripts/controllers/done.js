'use strict';

/**
 * @ngdoc function
 * @name tabukApp.controller:DoneCtrl
 * @description
 * # DoneCtrl
 * Controller of the tabukApp
 */
angular.module('tabukApp')
  .controller('DoneCtrl', function ($scope, $rootScope) {
    $scope.goToHome = function () {
      $rootScope.page = './views/menu.html';
    }
  });
