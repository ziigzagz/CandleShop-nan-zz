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

$userData = mysqli_query($conn,"SELECT * FROM Orders INNER JOIN product ON orders.ProductID = product.Serial WHERE `OrderID` LIKE '$OrderID'");
$response = array();

while($row = mysqli_fetch_assoc($userData)){

   $response[] = $row;
}

echo json_encode($response);

// if ($conn->query($sql) === TRUE) {
//   echo "New record created successfully";
// } else {
//   echo "Error: " . $sql . "<br>" . $conn->error;
// }

$conn->close();
?>