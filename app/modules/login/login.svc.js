angular.module('sisepDevApp')
.service('loginSVC', function($rootScope, $location, $mdDialog, $mdToast){

    var login = this;

    login.ifExists = function(user)
    {
      var usuario = [
        {
          matricula: "02835-8",
          entidade: "20701010",
          senha: "",
          nome: "CARLOS MAGNO DE ALEXANDRIA",
          role: "atend",
          foto: "team1"
        },
        {
          matricula: "101",
          entidade: "20701010",
          senha: "12345",
          nome: "ELISA PEREIRA ALVES SILVA",
          role: "admin",
          foto: "team2"
        }
      ];

      login.usu = "";
      angular.forEach(usuario, function(value,index){
        if(value.matricula == user.matricula && value.entidade == user.entidade)
        {
          login.usu = usuario[index];
          //console.log(login.usu);
          return login.usu;
        }
      }); 
      if(!login.usu)
        return false;
    };



    login.logMeIn = function(user, cachedData){
      if(user.matricula == cachedData.matricula && user.entidade
         == cachedData.entidade && user.senha == cachedData.senha)
      {
        $mdToast.show(
            $mdToast.simple()
              .textContent('Login Efetuado com sucesso!')
              .action('OK')
              .highlightAction(true)
              .highlightClass('md-success')
              .position('bottom right')
              .hideDelay(5000)
          );
        $location.path('/inicio');
      }
      else
      {
        console.log(cachedData);
        $mdToast.show(
            $mdToast.simple()
              .textContent('Usuário e/ou senha inválido(s)!')
              .action('OK')
              .highlightAction(true)
              .highlightClass('md-warn')
              .position('bottom right')
              .hideDelay(5000)
          ); 
      }
    };

    login.logout = function(){
        $rootScope.logado = null;
        $location.path('/auth/login');
      }
  });