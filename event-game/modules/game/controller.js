/**
 * Created by ahmed.ashour on 4/21/16.
 */
'use strict';
var app = angular.module('Game')
    .controller('GameController',
        ['$scope', '$http', '$crypto', '$interval', '$timeout', '$cookieStore','$location',
            function ($scope, $http, $crypto, $interval, $timeout, $cookieStore,$location) {


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
//                var encrypted = $crypto.encrypt('some plain text data');
//                var decrypted = $crypto.decrypt(encrypted);

                //** ---- get ----- **
                $scope.counter = 0;
                $scope.gameOver = false;
                $scope.logOut =false;
                var updateCounter = function () {
                    $scope.counter++;
                    $timeout(updateCounter, 1000);
                    if ($scope.counter == 600 ||  $scope.logOut == true) {
                        //*** game over  ****

                        var userData = $cookieStore.get('globals');
                        $scope.player = userData.currentUser.username;
                        $http.get("asset/resources/scores.json").then(function (data) {
                            var oldVal = data.data;
                            var w = 0;

                            while (w < oldVal.length) {

                                if (oldVal[w].player_name === $scope.player) {
                                    var date = new Date();
                                    $scope.FromDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                                    oldVal[w].date = $scope.FromDate;
                                    oldVal[w].total_score += $scope.totalAnswer;
                                    $scope.printScore =  oldVal[w].total_score;
                                }
                                w++;
                            }
                            $scope.gameOver = true;
                            $http.post("asset/resources/scores.php", oldVal).then(function (data) {
                                //after save score
                                $timeout(function(){$location.path("/login")},5000);
                            });
                        });
                    }
                };
                updateCounter();

                $http.get("asset/resources/Questions.json").then(function (data) {
                    $scope.myData = data.data;
                    $scope.randomQuote = $scope.myData[Math.floor(Math.random() * $scope.myData.length)];
                });
                $scope.correctA = false;
                $scope.answerChoose = function (cho) {
                    $scope.correctA = cho;
                };
                $scope.totalAnswer = 0;
                $scope.IAnswer = false;
                $scope.checkAnswer = false;
                $scope.checkAnswerW = false;
                $scope.answer = function () {
                    $scope.IAnswer = true;
                    if ($scope.correctA == true) {
                        $scope.totalAnswer++;
                        $scope.checkAnswer =true;
                    }else{
                        $scope.checkAnswerW = true;
                    }

                };
                $scope.QNum = 1;
                $scope.nextQ = function () {
                    $scope.IAnswer = false;
                    $scope.randomQuote = $scope.myData[Math.floor(Math.random() * $scope.myData.length)];
                    $scope.QNum++;
                    $scope.correctA = false;
                    $scope.checkAnswer =false;
                    $scope.checkAnswerW = false;
                };


                //** ---- set ----- **
//                $scope.an= function () {
//                    $http.post('asset/resources/ser',  $scope.myData).then(function (data) {
//                        $scope.msg = 'Data saved';
//                    });
//                };
            }]).filter('unsafe', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });
