<?php 
if(isset($_POST['process']))
{
    include "Connection.php";
    $fname = $_POST["fname"];
    $sname = $_POST["sname"];
    $age = $_POST["age"];
    $locations = $_POST["locations"];
    $gender = $_POST["gender"]
    $telephone = $_POST["telephone"];

   if(($fname)!=""&&($sname)!=""&&($age)!=""&&($locations)!=""&&($gender)!=""&&($telephone)!="")
    {
        $sql = "INSERT INTO tryouts (fname, sname, age, locations, gender, tel)VALUES('$fname', '$sname','$age', $locations, $gender, '$telephone')";

        $data = mysqli_query($conn, $sql);
        echo"<script>alert('Submitted successfully')</script>";
    // header('location:homepage.html');
    echo"<script>window.open('homepage.html','_self');</script>";
    }
}
else
{
    echo"<script>alert('Incorrect')</script>";
    // header('location:index.html');
    echo"<script>window.open('index.html','_self');</script>";

}
?>