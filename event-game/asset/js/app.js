/**
 * Created by ahmed.ashour on 4/17/16.
 */
'use strict';

angular.module('Authentication', ['mdo-angular-cryptography','angular-useragent-parser','angular-virtual-keyboard','ng-iscroll']);
angular.module('Game', []);
angular.module('Facts', []);
angular.module('leaderBoard', []);
angular.module('Videos', []);
angular.module('Home', ['timer']);

angular.module('BasicHttp', [
        'Authentication',
        'Game',
        'Home',
        'leaderBoard',
        'Facts',
        'Videos',
        'ngRoute',
        'ngCookies'])
    .config(['$routeProvider', '$cryptoProvider', function ($routeProvider, $cryptoProvider) {
        $cryptoProvider.setCryptographyKey('ABCD123');
        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'modules/authentication/views/login.html',
                hideMenus: true
            }).when('/facts', {
                controller: 'FactsController',
                templateUrl: 'modules/facts/views/facts.html'
            }).when('/videos', {
                controller: 'VideosController',
                templateUrl: 'modules/videos/views/index.html'
            }).when('/game', {
                controller: 'GameController',
                templateUrl: 'modules/game/views/game.html'
            }).when('/', {
                controller: 'HomeController',
                templateUrl: 'modules/dashboard/views/index.html'
            }).when('/leaderBoard', {
                controller: 'leaderBoardController',
                templateUrl: 'modules/leaderboard/views/index.html'
            }).otherwise({ redirectTo: '/login' });
    }])
    .run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
                if ($location.path() === '/') {
                    $location.path('/');
                }else if ($location.path() === '/facts') {
                    $location.path('/facts');
                }else if ($location.path() === '/videos') {
                    $location.path('/videos');
                }else if ($location.path() === '/leaderBoard') {
                    $location.path('/leaderBoard');
                }else if($location.path() === "/myCarousel"){
                    $location.path('/facts');
                }else if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });
        }]);