angular.module('sisepDevApp')
.service('loginSVC', function($rootScope, $location, $mdDialog){
    this.logar = function(user){
      var usuario = [
        {
          matricula: "02835-8",
          entidade: "20201010",
          senha: "",
          nome: "CARLOS MAGNO DE ALEXANDRIA",
          role: "atend"
        },
        {
          matricula: "02005-7",
          entidade: "20701010",
          senha: "12345",
          nome: "MARISA DA SILVA OLIVEIRA",
          role: "admin"
        }
      ];
      var usu = "";
      angular.forEach(usuario,  function(value,index){
        if(value.matricula == user.matricula && value.entidade == user.entidade)
        {
          
          $rootScope.logado = value;
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
          console.log(usuario);
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