/**
 * Created by ahmed.ashour on 5/1/16.
 */
'use strict';

angular.module('leaderBoard')

    .controller('leaderBoardController',
        ['$scope', '$rootScope', '$location', '$crypto', '$http', '$timeout',
            function ($scope, $rootScope, $location, $crypto, $http, $timeout) {
                $scope.array = [];
                $scope.winners = [];
                $scope.hitScreen = false;
                $http.get("asset/resources/scores.json").then(function (data) {
                    $scope.array = data.data;
                    $scope.array = $scope.array.sort(function (a, b) {
                        a = parseInt(a["total_score"]);
                        b = parseInt(b["total_score"]);
                        return b - a;
                    });
                    endGame();
                });

                var endGame = function () {
                    var date = new Date();
                    $scope.FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                    if ($scope.FromDate == "2016-05-12") {
                        var y = 1;
                        $scope.winners.push($scope.array[0]);
                        while (y < $scope.array.length) {
                            if ($scope.array[y].total_score == $scope.array[0].total_score) {
                                $scope.winners.push($scope.array[y]);
                            }
                            y++;
                        }
                        $scope.hitScreen = true;
                    } else {
                        $timeout(endGame, 14400000);
                    }
                };


            }]);
