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

$serial= $_POST['serial'];
$name = $_POST['name'];
$price = $_POST['price'];
$info = $_POST['info'];
$price = $_POST['price'];
$img = $_POST['img'];
$del = $_POST['del'];
$sql = "INSERT INTO `product` (`Serial`, `Name`, `Price`, `Info`, `img`, `del`) VALUES ('$serial', '$name', '$price', '$info', '$img', '$del');";
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
?>