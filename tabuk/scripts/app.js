'use strict';

/**
 * @ngdoc overview
 * @name tabukApp
 * @description
 * # tabukApp
 *
 * Main module of the application.
 */
angular
  .module('tabukApp', [
    'ja.qr',
    'mdo-angular-cryptography',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $cryptoProvider) {
    $cryptoProvider.setCryptographyKey('ABCD123');
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: '$ctrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: '$ctrlMain'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/adminMain', {
        templateUrl: 'views/adminmain.html',
        controller: 'AdminmainCtrl',
        controllerAs: 'adminMain'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }).run(function ($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.serialNo; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in
      if ($location.path() === '/adminMain') {
        $location.path('/adminMain');
      }else if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
        $location.path('/login');
      }
    });

  });
