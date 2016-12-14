'use strict';

/**
 * @ngdoc function
 * @name sisepDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sisepDevApp
 */
angular.module('sisepDevApp')
  .controller('MainCtrl', function ($scope, 
    $http, 
    $timeout, 
    $mdSidenav, 
    $log,
    $location, 
    $mdMedia, 
    config, 
    loginSVC,
    $rootScope) {
      $scope.toggleLeft = buildDelayedToggler('left');
        $scope.toggleRight = buildToggler('right');
        $scope.isOpenRight = function(){
          return $mdSidenav('right').isOpen();
        };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */

    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }

    this.logUser = $rootScope.logado;

      this.logar = function(user) { 
        loginSVC.logar(user);
        console.log($rootScope.logado);
      };
      console.log($rootScope.logado);

      this.deslogar = function() {
        loginSVC.logout();
      };

      this.toggleLeft = buildToggler('left');

      this.sidebar_opened = $mdMedia('gt-sm');

      this.checkIfOwnPage = function () {
        return _.contains(["/auth/login"], $location.path());
      };


    this.isDemoFunction = function(){
      console.log($rootScope.logado);
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .parent('body')
          .title('Demonstração')
          .content('Este componente é meramente demonstrativo.')
          .ok('OK')
      );
    };
  }).service('loginSVC', function($rootScope, $location, $mdDialog){
    this.logar = function(user){
      var usuario = [
        {
          username: "elisa",
          senha: "123",
          admin: true
        },
        {
          username: 'estagiario',
          senha: '12345',
          admin: false
        }
      ];
      var usu = "";
      angular.forEach(usuario,  function(value,index){
        if(value.username == user.username && value.senha == user.senha)
        {
          $rootScope.logado = value.username;
          if (value.admin)
            $location.path('/inicio');
          else {
            $mdDialog.show(
              $mdDialog.alert()
                .clickOutsideToClose(true)
                .parent('body')
                .title('Você não é administrador do sistema')
                .content('Suas telas ainda estão em desenvolvimento')
                .ok('Ok')
            );
          }
          
          usu = value;
        }
        

      });

      if (usu == ""){
          console.log("Deu ruim");
          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Erro')
            .textContent('Usuário e/ou senha inválido(s)')
            .ariaLabel('Erro de autenticação')
            .ok('Ok')
          );
        }
    }
    this.logout = function(){
        $rootScope.logado = null;
        $location.path('/auth/login');
      }
  });;

  angular.module('sisepDevApp')
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    
    $scope.closeMainMenu = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
    
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
