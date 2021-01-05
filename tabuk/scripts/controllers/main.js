'use strict';

/**
 * @ngdoc function
 * @name tabukApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tabukApp
 */
angular.module('tabukApp')
  .controller('MainCtrl', function ($scope, $rootScope) {
    
    $rootScope.page = './views/menu.html';

    // $scope.page = './views/waitting-g.html';
    // $rootScope.wait;
    
    // $scope.page = './views/done.html';
    // $rootScope.thank;

    //  $scope.page = './views/quiz.html';
    // $rootScope.quiz;
  });
