'use strict';

/**
 * @ngdoc function
 * @name tabukApp.controller:AdminmainCtrl
 * @description
 * # AdminmainCtrl
 * Controller of the tabukApp
 */
angular.module('tabukApp')
  .controller('AdminmainCtrl', function ($scope) {
    $scope.serail_NOs = [];
    $scope.path = "https://github.com/";
    $scope.generate_SN = function () {
      var group = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'K', 'L', 'I'];
      for (var i = 0; i < 10; i++) {
        var n = '';
        for (var a = 0; a < 10; a++) {
          for (var b = 1; b < 21; b += 2) {
            for (var c = 2; c < 32; c += 3) {
              n = a + i + '' + b + i + '-' + c + i;
            }
          }
        }
        for (var t = 0; t < 10; t++) {
          $scope.serail_NOs.push(group[t] + '-' + (i + 2) * (t + 8) + '-' + (i + 1) * (t + 1) + '-' + n);
        }
      }

    }
  }).filter("chartContain", function() { 
    return function (serials, sr) {
        return serials.filter(function (item) {
            return item.indexOf(sr) > -1;    
        });
    }
 });
