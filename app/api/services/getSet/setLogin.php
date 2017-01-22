<?php

if ($arrPost["login"] == "OK") {
    $_SESSION["retorno"]["login"] = "true";
    $_SESSION["retorno"]["status"] = "true";
} else {
    $_SESSION["retorno"]["login"] = "false";
    $_SESSION["retorno"]["status"] = "erro";
    $_SESSION["retorno"]["dados"] = "null";
}