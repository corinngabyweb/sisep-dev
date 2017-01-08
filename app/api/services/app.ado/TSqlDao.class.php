<?php
//Inclu? a classe ?nica respons?vel por gerenciar todas as conex?es com o banco de dados
//require_once("../../_BD_Singleton.php");
include_once("TSingleton.class.php");

Class Dao extends Connection
{
	function DAO_insDataGenericBD($tabela, $campos, $valores) {
		
		$string_query      = "
		         			 INSERT
							 INTO
							 	$tabela
							 ($campos)
							 VALUES
							 ($valores)
		                     ";
		
		//echo $string_query."\n\n";
		
		$function_result   = Connection::execute($string_query);

		return $function_result;
	}
	
	function DAO_repDataGenericBD($tabela, $valores) {
		
		$string_query =	"
				REPLACE
				INTO
					$tabela
				SET
					$valores
				";
		
		//echo $string_query."\n\n";
		
		$function_result   = Connection::execute($string_query);

		return $function_result;
	}
	
	function DAO_getDataGeneric($field_array, $table_name, $where_clausula = "", $especial_condition = "")
	{
		//Se for informado um array, o converte com os campos a serem pesquisados em string?s separadas por v?rgula.
		if(is_array($field_array)){
			$fields            = implode(", ", $field_array);
		}else{
			$fields            = $field_array;
		}
		
		$string_query      = "
		         			 Select
		         			   $especial_condition
		         			   $fields
							 From
							   $table_name
							   $where_clausula
		                     ";
				     
		//echo $string_query."\n\n";

		$function_result   = Connection::fetchAssoc($string_query);
		//echo "|Chamou GetData";
		//return null;
		
		return $function_result;				
	}

	function DAO_setDataGenericBD($tabela, $dados, $where_clausula) {
		
		$string_query      = "
		         			 UPDATE
							 	$tabela
							 SET
								$dados
   							 $where_clausula
							 ";

		//echo $string_query."\n\n";
		
		$function_result   = Connection::execute($string_query);
		
		return $function_result;
	}
	
	function DAO_delDataGenericBD($tabela, $where_clausula) {
		
		$string_query      = "
		         			 DELETE FROM
							 	$tabela
   							 $where_clausula
							 ";
							 
		//echo $string_query."\n\n";

		$function_result   = Connection::execute($string_query);
		
		return $function_result;
	}
	
	function DAO_runQueryDataGenericBD($comando) {
		$function_result = Connection::fetchAssoc($comando);
		//echo $comando;
		//echo "|Chamou QueryGeneric";
		//return null;
		
		return $function_result;		
	}

	function DAO_runQueryDataGenericNoReturnBD($comando) {
		$function_result = Connection::execute($comando);
		//echo $comando;
		//echo "|Chamou QueryGeneric";
		//return null;
		
		return $function_result;		
	}
}
?>
