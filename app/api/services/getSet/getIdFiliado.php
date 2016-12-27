<?php
$dataSet = new Dao;

$campos       = "pk_id_filiado, matricula_filiado, nome_filiado, senha_filiado, fk_id_entidade_empregadora, ativo_filiado, bloqueado_filiado, foto_filiado";
$tabela       = "filiado";
$where        = "WHERE matricula_filiado = '".$arrPost["matricula_login"]."' AND fk_id_entidade_empregadora = '".$arrPost["entidade_login"]."'";
$strWhereComp = "";
$order        = "";

$getQueryIdFiliado = $dataSet->DAO_getDataGeneric($campos, $tabela, $where.$strWhereComp.$order);

if ($getQueryIdFiliado["num_rows"] > 0) {
    $_SESSION["retorno"]["dados"] = "";
    
    for ($x=0; $x<$getQueryIdFiliado["num_rows"]; $x++) {
        $_SESSION["retorno"]["dados"] = $getQueryIdFiliado[$x];
    }
    
    $_SESSION["retorno"]["login"] = "true";
    $_SESSION["retorno"]["status"] = "true";
    
    $_SESSION["matricula"] = $getQueryIdFiliado[0]["matricula_filiado"];
    $_SESSION["entidade"] = $getQueryIdFiliado[0]["fk_id_entidade_empregadora"];
    $_SESSION["senha"] = $getQueryIdFiliado[0]["senha_filiado"];
} else {
    $_SESSION["retorno"]["dados"] = "null";
    $_SESSION["retorno"]["login"] = "false";
    $_SESSION["retorno"]["status"] = "erro";
    
    $_SESSION["matricula"] = "";
    $_SESSION["entidade"] = "";
    $_SESSION["senha"] = "";
}