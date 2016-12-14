/*
 App Tables
 Controller for dynamic and other tables
 */

angular.module("app.tables", [])
  .controller("tableCtrl", ["$scope", "$filter",
    function ($scope, $filter) {
      var init;
      return $scope.associados = [
        {id: 1, nome: "ADILSON CARLINI DE ARAUJO", matricula: "03531-00", empregador: "P.M.P. - INATIVO"}, 
      {id: 2, nome: "ALEXANDRE DE LIMA", matricula: "03532-00", empregador: "P.M.P."},
      {id: 3, nome: "CLEUZA ELIANE DE SOUZA BROCHADO", matricula: "03531-00", empregador: "P.M.P. - EDUCAÇÃO"}, 
      {id: 4, nome: "CRISTINA CLAUDIA SIXEL", matricula: "20912-00", empregador: "P.M.P."},
      {id: 5, nome: "CRISTINA MARIA ALMEIDA DOS PASSOS", matricula: "03531-00", empregador: "P.M.P. - INATIVO"}, 
      {id: 6, nome: "ELEN SCHIMITT DA SILVA", matricula: "35415-00", empregador: "P.M.P."},
      {id: 7, nome: "ELOISA ADRIANA DE SOUZA", matricula: "99814-00", empregador: "P.M.P."}, 
      {id: 8, nome: "FLAVIA FERREIRA ANUNCIAÇÃO", matricula: "24670-00", empregador: "P.M.P."},
      {id: 9, nome: "FRANCISCO ALVES VIEIRA", matricula: "30515-00", empregador: "P.M.P. - EDUCAÇÃO"}, 
      {id: 10, nome: "GIOVANA PELISON DE SOUZA RODRIGUES", matricula: "96096-00", empregador: "P.M.P. - EDUCAÇÃO"}
      ], 

      $scope.searchKeywords = "", 
      $scope.filteredStores = [], 
      $scope.row = "", 
      $scope.select = function (page) {
        var end, start;
        return start = (page - 1) * $scope.numPerPage, 
        end = start + $scope.numPerPage, 
        $scope.currentPageStores = $scope.filteredStores.slice(start, end);
      }, 
      $scope.onFilterChange = function () {
        return $scope.select(1), 
        $scope.currentPage = 1, $scope.row = "";
      }, 
      $scope.onNumPerPageChange = function () {
        return $scope.select(1), $scope.currentPage = 1;
      }, 
      $scope.onOrderChange = function () {
        return $scope.select(1), $scope.currentPage = 1;
      }, 
      $scope.search = function () {
        return $scope.filteredStores = $filter("filter")($scope.associados, $scope.searchKeywords), 
        $scope.onFilterChange();
      }, 
      $scope.order = function (rowName) {
        return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.associados, rowName), $scope.onOrderChange()) : void 0;
      }, 
      $scope.numPerPageOpt = [3, 5, 10, 20], 
      $scope.numPerPage = $scope.numPerPageOpt[2], 
      $scope.currentPage = 1, 
      $scope.currentPageStores = [], (init = function () {
        return $scope.search(), $scope.select($scope.currentPage);
      }), $scope.search();
    }
  ]);