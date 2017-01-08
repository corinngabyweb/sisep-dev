<?php

if (!(conectar($_SESSION["userSISEP"],$_SESSION["passSISEP"]))) {
    $_SESSION["retorno"]["login"] = "false";
    $_SESSION["retorno"]["status"] = "erro001";
} else {
    $_SESSION["retorno"]["login"] = "true";
    $_SESSION["retorno"]["status"] = "true";
}