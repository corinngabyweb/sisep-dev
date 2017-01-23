<?php
$dataSet = new Dao;

$campos       = "pk_id_entidade_empregadora, nome_entidade_empregadora";
$tabela       = "entidade_empregadora";
$where        = "WHERE nome_entidade_empregadora LIKE '%".$arrPost["nome_entidade_empregadora"]."%'";
$strWhereComp = "";
$order        = " ORDER BY nome_entidade_empregadora";

mysql_query("SET NAMES 'utf8'");

$getQueryEntidadeEmpregadora = $dataSet->DAO_getDataGeneric($campos, $tabela, $where.$strWhereComp.$order);

if ($getQueryEntidadeEmpregadora["num_rows"] > 0) {
    $_SESSION["retorno"]["dados"] = "";
    
    for ($x=0; $x<$getQueryEntidadeEmpregadora["num_rows"]; $x++) {
        $_SESSION["retorno"]["dados"][] = $getQueryEntidadeEmpregadora[$x];
    }
    
    $_SESSION["retorno"]["status"] = "true";
	

} 

 else {
    $_SESSION["retorno"]["dados"] = null;
    $_SESSION["retorno"]["status"] = "erro";
}
