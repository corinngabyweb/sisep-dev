'use strict';

/**
 * @ngdoc function
 * @name sisepDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sisepDevApp
 */
angular.module('sisepDevApp')
  .controller('LoginCtrl', function ($scope, 
    $http, 
    $timeout, 
    $mdSidenav, 
    $log,
    $location, 
    config, 
    $rootScope,
    loginSVC) {

      this.logUser = $rootScope.logado;

      this.logar = function(user) { 
        console.log(user);
        loginSVC.logar(user);
        console.log($rootScope.logado);
      };

      this.deslogar = function() {
        loginSVC.logout();
      };
      
  });
