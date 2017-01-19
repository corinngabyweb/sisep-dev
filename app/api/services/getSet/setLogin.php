<?php

if ($arrPost["login"] == "OK") {
    $_SESSION["retorno"]["login"] = "false";
    $_SESSION["retorno"]["status"] = "erro001";
} else {
    $_SESSION["retorno"]["login"] = "true";
    $_SESSION["retorno"]["status"] = "true";
}