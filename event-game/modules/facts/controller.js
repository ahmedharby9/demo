/**
 * Created by ahmed.ashour on 4/30/16.
 */
'use strict';

angular.module('Facts')

    .controller('FactsController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService', '$crypto', '$http','$timeout',
            function ($scope, $rootScope, $location, AuthenticationService, $crypto, $http,$timeout){
                $scope.getClass = function (path) {
                    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
                }
            }]);