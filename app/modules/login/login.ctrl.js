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
    $mdToast,
    loginSVC,
    loginFac) {
      var loginCT = this;
      
      loginCT.showPass = false;
      loginCT.credentials = {};
      loginCT.getUser = "";

      loginCT.ifExists = function(credentials) {
        if(loginSVC.ifExists(credentials) == false)
        {
          
          $mdToast.show(
            $mdToast.simple()
              .textContent('Matrícula inexistente para este Empregador')
              .action('OK')
              .highlightAction(true)
              .highlightClass('md-warn')
              .position('bottom right')
              .hideDelay(5000)
          );
          loginCT.showPass = false;
        }
          
        else
        {
          loginFac.setUser(loginSVC.usu);
          var usr = loginFac.getUser();
          loginCT.getUser = usr;
          if(loginSVC.usu.senha)
          {
            
            loginCT.showPass = true;
          }
          else
          {
            $location.path('/auth/primeiro_acesso');
          }

        }

        return usr;
      };
      
      loginCT.logar = function(credentials, getUser){
        loginSVC.logMeIn(credentials, getUser);
      };

      loginCT.deslogar = function() {
        loginSVC.logout();
      };
      
  });
