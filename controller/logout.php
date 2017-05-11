<?php

session_start();
unset($_SESSION["id_admin"]);
session_destroy();