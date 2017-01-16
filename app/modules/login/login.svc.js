angular.module('sisepDevApp')
.service('loginSVC', loginSVC);

function loginSVC($http, store){

    //mudei e funfou

    var req = {
      url: 'http://localhost/sisep-dev/app/api/services/webservice.php',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    };

    this.ifExists = function(user)
    {
      req.url += '?action=getIdFiliado&matricula_login='+user.matricula+
      '&entidade_login='+user.entidade;

      return $http(req);
    };


 
    

    //login.logout = function(){

      //  $rootScope.logado = null;
        //$location.path('/auth/login');
      //}
  };

  loginSVC.$inject = ['$http', 'store'];