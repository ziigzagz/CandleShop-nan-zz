<?php
include('cors.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testing";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$OrderID= $_POST['OrderID'];
// $sql = "UPDATE `orders` SET `imgpay`= '$imgpay' , `upload` = '1' WHERE '$OrderID'";
$sql = "UPDATE `orders` SET `status`= '1' WHERE `OrderID` = '$OrderID'";

// $userData = mysqli_query($conn,"select * from tbl_sample");
// $response = array();

// while($row = mysqli_fetch_assoc($userData)){

//    $response[] = $row;
// }

// echo json_encode($response);

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
