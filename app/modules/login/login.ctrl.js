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
      loginCT.name = "";
      loginCT.getUser = loginFac.getUser();

      loginCT.ifExists = function(credentials) {
        if(loginSVC.ifExists(credentials) == false)
        {
          
          $mdToast.show(
            $mdToast.simple()
              .textContent('Matrícula inexistente para este Empregador')
              .action('OK')
              .highlightAction(true)
              .highlightClass('md-accent')
              .position('bottom right')
              .hideDelay(5000)
          );
          loginCT.showPass = false;
        }
          
        else
        {
          loginFac.setUser(loginSVC.usu);
          var usr = loginFac.getUser();
          loginCT.name = usr.nome;
          if(loginSVC.usu.senha)
          {
            
            loginCT.showPass = true;
          }
          else
          {
            $location.path('/auth/locked');
          }

        }

        return usr;
      };

      

      



      
     

      this.deslogar = function() {
        loginSVC.logout();
      };
      
  });
