angular.module('sisepDevApp')
.service('loginSVC', function($rootScope, $location, $mdDialog, $mdToast){

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
          
          $rootScope.logado = usu = usuario[index];
        }
        

      });

      if (usu == ""){
          $mdToast.show(
            $mdToast.simple()
              .textContent('Usuário e/ou senha inválido')
              .action('OK')
              .highlightAction(true)
              .highlightClass('md-accent')
              .position('top right')
              .hideDelay(5000)
          );
        }
    }
    this.logout = function(){
        $rootScope.logado = null;
        $location.path('/auth/login');
      }
  });