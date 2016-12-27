<?php
/* ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL); */

Class Connection
{
	var $instance;

	var $hostname        = "127.0.0.1";
	var $username        = "root";
	var $passwd          = '';
	//var $database_name   = "sisep";
	var $database_name   = "sisep_oficial";
	
	/*var $hostname        = "localhost";
	var $username        = "root";
	var $passwd          = "";
	var $database_name   = "tortaskneipp";*/

	//Construtor da Classe
	//Define as vari�veis de conex�o como default, para que n�o precisem ser passadas na instancia��o da classe
	function Connection()
	{
		//echo "|Chamou Connection";
		//return null;

		$this->link_identifier = mysql_connect($this->hostname, $this->username, $this->passwd);
		mysql_select_db($this->database_name, $this->link_identifier);
		
		register_shutdown_function(array(&$this, 'disconnect'));
	}
	
	function execute($string_query)
	{

		//echo "|Chamou Execute";
		//return null;
		$return = mysql_query($string_query, $this->link_identifier) or die ("<pre>A Query: $string_query \n\nDeu erro:\n".mysql_error()."</pre>");
		//$this->disconnect($this->link_identifier);
		//$this->disconnect();

		return $return;
	}
	
	function fetchArray($string_query)
	{
		//echo "|Chamou FetchArray";
		//return null;
		$result = $this->execute($string_query);
		//$result = mysql_query($string_query) or die (mysql_error());
		 
		while ($return = mysql_fetch_array($result)){
			$array_return[] = $return;
		}
		
		//$result = $this->disconnect();
		
		return $array_return;
	}
	
	function fetchAssoc($string_query)
	/*Retorna o array com os nomes dos campos como indices e com o n�mero de linhas afetadas pela consulta*/
	{
		//echo "|Chamou FetchAssoc";
		//return null;
		//$result = $this->execute($string_query);
		$result = mysql_query($string_query) or die ("<pre>A Query: $string_query \n\nDeu erro:\n".mysql_error()."</pre>");
		

		if (mysql_num_rows($result)){
			$array_return['num_rows'] = mysql_num_rows($result);
		}else{
			$array_return['num_rows'] = 0;
		}

		while ($return = mysql_fetch_assoc($result)){
			$array_return[] = $return;
		}
		
		//$result = $this->disconnect();
		
		return $array_return;
	}
	
	function fetchAssoc_wthNumRows($string_query)
	/*Retorna o array com os nomes dos campos como indices*/
	{
		//echo "|Chamou FetchAssocWithNumRows";
		//return null;
		$result = $this->execute($string_query);
		//$result = mysql_query($string_query) or die (mysql_error());
		
		while ($return = mysql_fetch_assoc($result)){
			$array_return[] = $return;
		}
		
		return $array_return;
	}	
	
	function disconnect()
	{
		//echo "|Chamou Disconect";
		//return null;
		mysql_close($this->link_identifier);
		//echo "Link: " . $this->link_identifier;
		
		//mysql_close($link_identifier);
		
		$this->hostname        = null;
		$this->username        = null;
		$this->passwd          = null;
		$this->database_name   = null;
	}
	
	function getVars()
	{
		//echo "|Chamou getVars";
		//return null;
		return $this->hostname;
	}
}
  
?>
