/**
 * Created by ahmed.ashour on 4/30/16.
 */
'use strict';

angular.module('Videos')

    .controller('VideosController',
        ['$scope', '$rootScope', '$location', '$crypto', '$http', '$timeout',
            function ($scope, $rootScope, $location, $crypto, $http, $timeout) {
                $scope.runVideo = 'modules/videos/views/v_1.html';
                $scope.getClass = function (path) {
                    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
                };
            }]);