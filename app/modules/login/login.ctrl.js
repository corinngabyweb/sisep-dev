'use strict';

/**
 * @ngdoc function
 * @name sisepDevApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sisepDevApp
 */
angular.module('sisepDevApp').controller('LoginCtrl', LoginCtrl);
  
function LoginCtrl($scope, $http, $timeout, $mdSidenav, $log,
  $location, config, $rootScope, $mdToast, loginSVC, loginFac) {
      var loginCT = this;
       
      loginCT.showPass = false;
      loginCT.credentials = {};
      loginCT.filiado = "";
      loginCT.filiadoNome = "";
      loginCT.capitFiliado = function(nome) {
        var string = nome.split(" ");
        string = string[0];
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      };


      loginCT.ifExists = function(credentials) {
        function success(obj){
          var user = obj.data;
          if(!user.dados)
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
          }
          else
          {
            
            loginFac.setUser(user.dados);
            if(loginFac.getUser().foto_filiado)
            {
              var foto = loginFac.getUser().foto_filiado.split("/");
              foto = foto[2];
              loginFac.getUser().foto_filiado = 'images/banco_de_imagens/'+foto;   
            }
            
            var u = $rootScope.User = loginFac.getUser();
            loginCT.filiado = u;
            loginCT.filiadoNome = loginCT.capitFiliado(loginCT.filiado.nome_filiado);
            
            if (loginCT.filiado.ativo_filiado == "N" || loginCT.filiado.bloqueado_filiado == "S")
            {
              $mdToast.show(
                $mdToast.simple()
                .textContent("Você não tem acesso ao Sistema. Entre em contato com o SISEP para mais informações.")
                .action('OK')
                .highlightAction(true)
                .highlightClass('md-warn')
                .position('bottom right')
                .hideDelay(9000)
              ); 
            }
            else
            {
              if(!loginCT.filiado.senha_filiado)
              {
                $location.path('/auth/primeiro_acesso');
                console.log($rootScope.User);
              }
              else
                loginCT.showPass = true;
              }
          }
        }
        function error(err){
            console.log('Erro: ', err);
        }

        loginSVC.ifExists(credentials).then(success, error);

        
      };
      
      /*loginCT.logar = function(credentials, getUser){
        loginSVC.logMeIn(credentials, getUser);
      };

      loginCT.deslogar = function() {
        loginSVC.logout();
      };*/
      
  };
LoginCtrl.$inject = ['$scope', '$http', '$timeout', '$mdSidenav', '$log',
  '$location', 'config', '$rootScope', '$mdToast', 'loginSVC', 'loginFac'];