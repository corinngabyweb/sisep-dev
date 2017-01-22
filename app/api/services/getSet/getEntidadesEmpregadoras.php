<?php
$dataSet = new Dao;

$campos       = "pk_id_entidade_empregadora, nome_entidade_empregadora";
$tabela       = "entidade_empreagadora";
$where        = "";
$strWhereComp = "";
$order        = " ORDER BY nome_entidade_empregadora";

$getQueryEntidadeEmpregaora = $dataSet->DAO_getDataGeneric($campos, $tabela, $where.$strWhereComp.$order);

if ($getQueryEntidadeEmpregaora["num_rows"] > 0) {
    $_SESSION["retorno"]["dados"] = "";
    
    for ($x=0; $x<$getQueryEntidadeEmpregaora["num_rows"]; $x++) {
        $_SESSION["retorno"]["dados"] = $getQueryEntidadeEmpregaora[$x];
    }
    
    $_SESSION["retorno"]["status"] = "true";
 } else {
    $_SESSION["retorno"]["dados"] = null;
    $_SESSION["retorno"]["status"] = "erro";
}
