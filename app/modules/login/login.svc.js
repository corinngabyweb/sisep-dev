angular.module('sisepDevApp')
  .service('loginSVC', function($rootScope, $location, $http, $mdDialog){
    this.logar = function(user){
      var usuario = $http.get('modules/login/login.json').success(function(response) {
          return response.data;
      });
      var usu = "";
      angular.forEach(usuario,  function(value,index){
        if(value.matricula == user.matricula && value.entidade == user.entidade)
        {
          $rootScope.logado = value.nome;
          if (value.role == "admin")
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
  });