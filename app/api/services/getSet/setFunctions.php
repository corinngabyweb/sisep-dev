<?php
// Função para validar e-mail
function getLblCompetencia($data) {
    if (strpos($data, "/") !== false) {
	$arrDataComp = explode("/", $data);
	$dataComp = $arrDataComp[2]."-".$arrDataComp[1]."-".$arrDataComp[0];
	$arrDataComp = explode("-", $dataComp);
    } elseif (strpos($data, "-") !== false) {
	$arrDataComp = explode("-", $data);
    }

    $ano = $arrDataComp[0];
    $mes = $arrDataComp[1];
    $dia = $arrDataComp[2];

    $dataCompare = ($ano.$mes.$dia) * 1;

    if (($dataCompare >= (($ano."1129") * 1)) && ($dataCompare <= (($ano."1228") * 1))) {
	$retorno = "Janeiro de ".($ano + 1);
    } elseif ((($dataCompare >= ((($ano-1)."1229") * 1)) && ($dataCompare <= (($ano."0128") * 1))) || (($dataCompare >= ((($ano)."1229") * 1)) AND ($dataCompare <= ((($ano+1)."0128") * 1))))  {
	$retorno = "Fevereiro de ".$ano;
    } elseif (($dataCompare >= (($ano."0129") * 1)) && ($dataCompare <= (($ano."0228") * 1))) {
	$retorno = "Março de ".$ano;
    } elseif (($dataCompare >= (($ano."0229") * 1)) && ($dataCompare <= (($ano."0328") * 1))) {
	$retorno = "Abril de ".$ano;
    } elseif (($dataCompare >= (($ano."0329") * 1)) && ($dataCompare <= (($ano."0428") * 1))) {
	$retorno = "Maio de ".$ano;
    } elseif (($dataCompare >= (($ano."0429") * 1)) && ($dataCompare <= (($ano."0528") * 1))) {
	$retorno = "Junho de ".$ano;
    } elseif (($dataCompare >= (($ano."0529") * 1)) && ($dataCompare <= (($ano."0628") * 1))) {
	$retorno = "Julho de ".$ano;
    } elseif (($dataCompare >= (($ano."0629") * 1)) && ($dataCompare <= (($ano."0728") * 1))) {
	$retorno = "Agosto de ".$ano;
    } elseif (($dataCompare >= (($ano."0729") * 1)) && ($dataCompare <= (($ano."0828") * 1))) {
	$retorno = "Setembro de ".$ano;
    } elseif (($dataCompare >= (($ano."0829") * 1)) && ($dataCompare <= (($ano."0928") * 1))) {
	$retorno = "Outubro de ".$ano;
    } elseif (($dataCompare >= (($ano."0929") * 1)) && ($dataCompare <= (($ano."1028") * 1))) {
	$retorno = "Novembro de ".$ano;
    } elseif (($dataCompare >= (($ano."1029") * 1)) && ($dataCompare <= (($ano."1128") * 1))) {
	$retorno = "Dezembro de ".$ano;
    }
    
    return $retorno; // . "<br /> $dia-$mes-$ano <br />" . mktime(0,0,0, $mes, $dia, $ano) . "<br />" . $mtime1 . "<br />" . $mtime2;
}

function setLblCompetencia($comp) {
    $arrComp = explode("de", $comp);

    $strMes = trim($arrComp[0]) * 1;
    $strAno = trim($arrComp[1]) * 1;

    $arrMesLblComp["Janeiro"] = 1;
    $arrMesLblComp["Fevereiro"] = 2;
    $arrMesLblComp["Março"] = 3;
    $arrMesLblComp["Abril"] = 4;
    $arrMesLblComp["Maio"] = 5;
    $arrMesLblComp["Junho"] = 6;
    $arrMesLblComp["Julho"] = 7;
    $arrMesLblComp["Agosto"] = 8;
    $arrMesLblComp["Setembro"] = 9;
    $arrMesLblComp["Outubro"] = 10;
    $arrMesLblComp["Novembro"] = 11;
    $arrMesLblComp["Dezembro"] = 12;

    $retorno = date("d/m/Y", mktime(0,0,0,$arrMesLblComp[$strMes],28,$strAno));

    return $retorno;
}

function validaEmail($mail){
    if(preg_match("/^[0-9a-z]([-_.]?[0-9a-z])*@[0-9a-z]([-.]?[0-9a-z])*\\.[a-z]{2,3}$/", $mail)) {
	return true;
    }else{
	return false;
    }
}

// Função para gerar máscara de string
function mascara_string($mascara,$string)
{
    if ($mascara == "99/99/9999") {
	$string = explode("-",$string);
	$string = $string[2]."/".$string[1]."/".$string[0];
	$mascara = "none";
    } elseif (strpos($mascara,"R$") !== false) {
	$string = "R$ ".number_format($string,2,",",".");
	$mascara = "none";
    }/* else {
	$string = removeSeps($string);
    }*/

    if ($mascara != "none" && $string != "") {
	$maskReturn = "";
	$y = 0;
	$yTot = strlen($string);
	
	for ($i=0;$i<strlen($mascara);$i++) {
	    if ($mascara[$i] != "#" && $mascara[$i] != "9") {
		$maskReturn .= $mascara[$i];
	    } else {
		$maskReturn .= $string[$y];
		$y++;
		
		if ($y >= $yTot) {
		    break;
		}
	    }
	}
    } else {
	$maskReturn = $string;
    }
    
    return $maskReturn;
}

// Função para limpar máscaras em strings
function removeSeps($texto) {
    $texto = str_replace(".", "", $texto);
    $texto = str_replace("/", "", $texto);
    $texto = str_replace("-", "", $texto);
    $texto = str_replace(",", "", $texto);
    $texto = str_replace("_", "", $texto);
    $texto = str_replace("(", "", $texto);
    $texto = str_replace(")", "", $texto);
    $texto = str_replace(" ", "", $texto);

    return $texto;
}

// Função para criptografar textos
function cryp($senha) {
    $senhaRetorno = "";

    for ($x=0;$x<strlen($senha);$x++) {
  $letra = substr($senha, $x, 1);
  $codLetra = ord($letra);

  for ($y=1;$y<=16;$y++) {
      $codLetra++;

      if ($codLetra == 127) {
    $codLetra = 32;
      }
  }

  $senhaRetorno .= dechex($codLetra);
    }

    return $senhaRetorno;
}

// Função para descriptografar textos
function decryp($senha) {
    $senhaRetorno = "";

    for ($x=0;$x<strlen($senha);$x++) {

  $letra = substr($senha, $x, 1);
  $x++;
  $letra .= substr($senha, $x, 1);

  $codLetra = hexdec($letra);

  for ($y=1;$y<=16;$y++) {
      $codLetra--;

      if ($codLetra == 31) {
    $codLetra = 126;
      }
  }

  $senhaRetorno .= chr($codLetra);
    }

    return $senhaRetorno;
}

//Função para limpar Injections
function clearInj($texto){
    $texto = trim($texto);
    $texto = strip_tags($texto);
    $texto = str_replace(chr(13).chr(10), " ", $texto);
    $texto = str_replace(chr(13), " ", $texto);
    $texto = str_replace(chr(10), " ", $texto);
    $texto = trim($texto);

    // Lista de palavras para procurar
    $check[1] = chr(34); // símbolo "
    $check[2] = chr(39); // símbolo '
    $check[3] = chr(92); // símbolo /
    $check[4] = chr(96); // símbolo `
    $check[5] = "drop table";
    $check[6] = "update";
    $check[7] = "alter table";
    $check[8] = "drop database";
    $check[9] = "drop";
    $check[10] = "select";
    $check[11] = "delete";
    $check[12] = "insert";
    $check[13] = "alter";
    $check[14] = "destroy";
    $check[15] = "table";
    $check[16] = "database";
    $check[17] = "union";
    $check[18] = "TABLE_NAME";
    $check[19] = "1=1";
    $check[20] = 'or 1';
    $check[21] = 'exec';
    $check[22] = 'INFORMATION_SCHEMA';
    $check[23] = 'like';
    $check[24] = 'COLUMNS';
    $check[25] = 'into';
    $check[26] = 'VALUES';

    // Cria se as variáveis $y e $x para controle no WHILE que fará a busca e substituição
    $y = 1;
    $x = sizeof($check);
    // Faz-se o WHILE, procurando alguma das palavras especificadas acima, caso encontre alguma delas, este script substituirá por um espaço em branco " ".
    while($y <= $x){
	$target = strpos(strtolower($texto),  strtolower($check[$y]));
	if($target !== false){
	    $texto = str_replace(strtolower($check[$y]), "", strtolower($texto));
	}
	$y++;
    }

    // Retorna a variável limpa sem perigos de SQL Injection
    return $texto;
}

function getPost($tipo) {

    $tipo = $tipo = "GET" ? INPUT_GET : INPUT_POST;

    foreach($_REQUEST as $key => $value) {
        $arrPost[$key] = clearInj(filter_input($tipo, $key));
    }

    return $arrPost;
}

?>