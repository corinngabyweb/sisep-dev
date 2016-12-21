angular.module('sisepDevApp').controller('SelectCtrl',
  function ($scope) {
    
    $scope.entidades = [
      {opt: '20801010', val: 'CÂMARA MUNICIPAL'},
      {opt: '20301010', val: 'COMDEP'},
      {opt: '20001010', val: 'CPTRANS'},
      {opt: '20601010', val: 'FUNDAÇÃO DE CULTURA'},
      {opt: '20101010', val: 'FUNDAÇÃO DE SAÚDE'},
      {opt: '20501010', val: 'INPAS - FUNCIONÁRIO'},
      {opt: '20201010', val: 'P.M.P.'},
      {opt: '20901010', val: 'P.M.P. - EDUCAÇÃO'},
      {opt: '20401010', val: 'P.M.P. - INATIVO'},
      {opt: '20701010', val: 'SISEP PETRÓPOLIS'}
    ];
  })