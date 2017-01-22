<?php
//$_SESSION["userCSL"] = "26203";
//$_SESSION["passCSL"] = "12345678";
//"ALTER USER ".Chr(34).$usuario_csl.Chr(34)."  IDENTIFIED BY ".Chr(34).$senha_nova.Chr(34)." "

$dataSet = new Dao;

$strDados     = "senha_filiado = '".utf8_encode($arrPost["senha_login"])."'";
$tabela       = "filiado";
$where        = "WHERE matricula_filiado = '".$arrPost["matricula_login"]."' AND fk_id_entidade_empregadora = '".$arrPost["entidade_login"]."'";
$strWhereComp = "";
$order        = "";

if ($dataSet->DAO_setDataGenericBD($tabela, $strDados, $where)) {
    $_SESSION["retorno"]["login"] = "true";
    $_SESSION["retorno"]["status"] = "true";
} else {
    $_SESSION["retorno"]["login"] = "false";
    $_SESSION["retorno"]["status"] = "erro";
    $_SESSION["retorno"]["dados"] = "null";
}

//die(print_r($selecao));

//echo("<pre>");
//print_r($selecao);
//echo("</pre>");
//
//unset($_SESSION["userCLS"]);
//unset($_SESSION["passCSL"]);