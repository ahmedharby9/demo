/**
 * Created by ahmed.ashour on 4/30/16.
 */
'use strict';

angular.module('Home')

    .controller('HomeController',
        ['$scope', '$rootScope', '$location','$http','$timeout',
            function ($scope, $rootScope, $location,$http,$timeout){
                $scope.timerRunning = true;

                $scope.startTimer = function (){
                    $scope.$broadcast('timer-start');
                    $scope.timerRunning = true;
                };

                $scope.stopTimer = function (){
                    $scope.$broadcast('timer-stop');
                    $scope.timerRunning = false;
                };
            }]);