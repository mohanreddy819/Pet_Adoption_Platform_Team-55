<?php
// Fetch user data from the database and return as JSON

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$db_username = "root";
$db_password = "1cr21is142"; // Change this to your MySQL password
$dbname = "pet_details";

// Create connection
$conn = new mysqli($servername, $db_username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$usersData = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $usersData[] = $row;
    }
}

// Close connection
$conn->close();

// Send JSON response
header('Content-Type: application/json');
echo json_encode($usersData);
?>