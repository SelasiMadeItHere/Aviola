<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "aviola";//Enter your database name here

    $conn = new mysqli($servername,$username,$password,$dbname);
    if(mysqli_connect_error())
    {
        die('Connect Error ('.mysqli_connect_errno().')'.mysqli_connect_error());
    }
?>