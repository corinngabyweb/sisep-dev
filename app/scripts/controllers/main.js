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
    $rootScope) {
    
    
    this.isNowTime = moment().locale('pt-br').format('LL');

    this.toggleLeft = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };

    this.sidebar_opened = $mdMedia('gt-sm') && config.sidebar_default_open;

          
        

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

    

      this.toggleLeft = buildToggler('left');

      this.sidebar_opened = true;

      this.checkIfOwnPage = function () {
        return _.contains(["/auth/login", "/auth/primeiro_acesso"], $location.path());
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
  });

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
