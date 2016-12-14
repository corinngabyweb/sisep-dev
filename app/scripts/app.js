'use strict';

/**
 * @ngdoc overview
 * @name sisepDevApp
 * @description
 * # sisepDevApp
 *
 * Main module of the application.
 */
angular
  .module('sisepDevApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
