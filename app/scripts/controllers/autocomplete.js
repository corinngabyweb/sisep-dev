(function () {
  angular
      .module('sisepDevApp')
      .controller('AutoCompCtrl', AutoCompCtrl);

 function AutoCompCtrl($http){
            this.querySearch = function(svc, query){
            return $http.get("http://localhost/sisep-dev/app/api/services/webservice.php", 
              {
                params: {
                  action: svc,
                  matricula_login:query,
                  entidade_login: '20701010'
                }
            })
            .then(function(response){
              var res = response.data.dados;
              console.log(res);
              return res;
            })
          }
        };

})();
