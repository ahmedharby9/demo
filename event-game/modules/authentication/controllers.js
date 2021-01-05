'use strict';

angular.module('Authentication')
    .controller('LoginController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService', '$crypto', '$http', '$timeout', 'UAParser',
            function ($scope, $rootScope, $location, AuthenticationService, $crypto, $http, $timeout, UAParser) {

                $scope.getClass = function (path) {
                    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
                };
                $http.get("asset/resources/users.json").then(function (data) {
                    $scope.myData = data.data;
                    $http.get("asset/resources/scores.json").then(function (d) {
                        $scope.usersScor = d.data;
                    });
                });
                $scope.typePlayer = true;
                $scope.check = false;
                $scope.checkPass = function () {
                    $scope.check = (($scope.password_R !== $scope.password_R_conf) ? true : false);
                };
                $scope.userRegister = function () {
                    if ($scope.password_R === $scope.password_R_conf) {
                        var x = 0;
                        var id = 1;
                        var userData = [];
                        $scope.bool = false;
                        while (x < $scope.myData.length) {
                            if ($scope.username_R === $crypto.decrypt($scope.myData[x].username)) {
                                $scope.bool = true;
                            }
                            id = $scope.myData[x].id;
                            userData.push($scope.myData[x]);
                            x++;
                        }
                        if (!$scope.bool) {
                            var userName = $crypto.encrypt($scope.username_R);
                            var password = $crypto.encrypt($scope.password_R);
                            userData.push({"id": id + 1, "username": userName, "password": password});
                            $scope.usersScor.push({
                                "id": id + 1,
                                "scores": [],
                                "total_score": 0,
                                "winner": null,
                                "player_name": $scope.username_R
                            });


                            $http.post('asset/resources/server.php', userData).then(function (data) {
                                $http.post('asset/resources/scores.php', $scope.usersScor).then(function (data) {

                                    $scope.msg = true;
                                    location.href = '#/login#';
                                });
                            });
                        }
                    }
                };
                var endGame = function () {
                    var date = new Date();
                    $scope.FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                    if ($scope.FromDate == "2016-05-12") {
                       $location.path("/leaderBoard")
                    } else {
                        $timeout(endGame, 14400000);
                    }
                };
                endGame();
                // reset login status
                AuthenticationService.ClearCredentials();
                $scope.login = function () {
                    $scope.dataLoading = true;
                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
                        if (response.success) {
                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            $location.path('/game');
                        } else {
                            $scope.error = response.message;
                            $scope.dataLoading = false;
                        }
                    });
                };
            }]);