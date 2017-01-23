<?php

//Este script trata-se do webservice responsável por chamar outros scripts de funções específicas
//para cada seção da área do cliente com a possibilidade de retorno de valores em JSON para as
//requisições recebidas

include_once("app.ado/TSingleton.class.php");
include_once("app.ado/TSqlDao.class.php");
include_once("getSet/setFunctions.php");

$arrPost = getPost("GET");

if (!(isset($_SESSION["retorno"]))) {
    $_SESSION["retorno"] = array();
    $_SESSION["retorno"]["status"] = "null";
    $_SESSION["retorno"]["dados"] = "null";
} else {
    $_SESSION["retorno"]["status"] = "null";
    $_SESSION["retorno"]["dados"] = "null";
}

if (!(isset($_SESSION["retorno"]["login"]))) {
    $_SESSION["retorno"]["login"] = "false";
}

if (isset($arrPost["action"])) {
    
    if ($arrPost["action"] == "authFiliado") { // Função para autentiar filiado depois de senha confirmada em JS
        if ($arrPost["log"] == "1") {
            $_SESSION["retorno"]["login"] = "true";
            $_SESSION["retorno"]["status"] = "true";
        }        
    } elseif ($arrPost["action"] == "setLogoff") { // Função para Logoff
        $_SESSION["retorno"]["login"] = "false";
        $_SESSION["retorno"]["status"] = "true";
        $_SESSION["matricula"] = "";
        $_SESSION["entidade"] = "";
        $_SESSION["senha"] = "";
    } else {
        // Este arquivo já alimenta a variável $_SESSION["retorno"]["dados"]
        include_once("getSet/".$arrPost["action"].".php");
    }
} else {
    $_SESSION["retorno"]["status"] = "erro000"; // Erro geral
}

//Alteramos o cabeçalho para não gerar cache do resultado
//Alteramos o cabeçalho para que o retorno seja do tipo JSON
//Convertemos o array em um objecto json
header('Cache-Control: no-cache, must-revalidate');
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
//header('Content-Type: text/html;');

//print_r($_SESSION);

echo json_encode($_SESSION["retorno"], JSON_UNESCAPED_UNICODE);
