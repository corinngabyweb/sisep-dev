<?php
//$_SESSION["userCSL"] = "26203";
//$_SESSION["passCSL"] = "12345678";
//"ALTER USER ".Chr(34).$usuario_csl.Chr(34)."  IDENTIFIED BY ".Chr(34).$senha_nova.Chr(34)." "

$arrPost = getPost("GET");

$comando = 'ALTER USER "'.$_SESSION["userCSL"].'" IDENTIFIED BY "'.$arrPost["senha_residente"].'"';

$selecao = executar($comando);

if ($selecao != "error") {
    $_SESSION["passCSL"] = $arrPost["senha_residente"];
    $_SESSION["retorno"]["status"] = "true";
    $_SESSION["retorno"]["dados"] = "OK";
} else {
    $_SESSION["retorno"]["status"] = "erro026";
    $_SESSION["retorno"]["dados"] = "null";
}

//die(print_r($selecao));

//echo("<pre>");
//print_r($selecao);
//echo("</pre>");
//
//unset($_SESSION["userCLS"]);
//unset($_SESSION["passCSL"]);