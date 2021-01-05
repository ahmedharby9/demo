'use strict';

/**
 * @ngdoc function
 * @name tabukApp.controller:WaittingGCtrl
 * @description
 * # WaittingGCtrl
 * Controller of the tabukApp
 */
angular.module('tabukApp')
  .controller('WaittingGCtrl', function ($scope, $interval, $rootScope) {
    $scope.NO_Active = 1;
    var timer ;
    timer = $interval(function () {
      if ($scope.NO_Active < 10) {
        $scope.NO_Active++;
      }else{
        $interval.cancel(timer);
         $rootScope.page = './views/quiz.html';
      }
    }, 1000);

  });
