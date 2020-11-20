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

$user= $_POST['User'];

$userData = mysqli_query($conn,"SELECT *,SUM(product.Price) as s FROM Orders INNER JOIN product ON orders.ProductID = product.Serial WHERE `User` LIKE '$user' AND `status` = 0 GROUP BY `OrderID`");
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