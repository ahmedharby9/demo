'use strict';

/**
 * @ngdoc function
 * @name tabukApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the tabukApp
 */
angular.module('tabukApp')
  .controller('MenuCtrl', function ($scope, $rootScope) {
    $scope.goToQuiz = function (q) {
      $rootScope.page = './views/waitting-g.html';
      $rootScope.wait = q;
      $rootScope.thank = q;
      $rootScope.quiz = q;
    }
  });
