<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$db_username = "root";
$db_password = "1cr21is142";
$dbname = "pet_details";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['signupUsername']) && isset($_POST['signupPassword']) && isset($_POST['signupEmail']) && isset($_POST['signupPhone']) && isset($_POST['signupDOB']) && isset($_POST['signupAddress'])) {
        $name = $_POST['signupName'];
        $username = $_POST['signupUsername'];
        $password = $_POST['signupPassword'];
        $email = $_POST['signupEmail'];
        $phone = $_POST['signupPhone'];
        $dob = $_POST['signupDOB'];
        $address = $_POST['signupAddress'];

        try {
            $conn = new mysqli($servername, $db_username, $db_password, $dbname);

            if ($conn->connect_error) {
                throw new Exception("Failed to connect to database: " . $conn->connect_error);
            }

            $stmt = $conn->prepare("INSERT INTO users (name, username, password, email, phone, dob, address) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssiss", $name, $username, $password, $email, $phone, $dob, $address);

            if (!$stmt->execute()) {
                throw new Exception("Error executing SQL query: " . $stmt->error);
            }

            header("Content-Type: application/json");
            echo json_encode(["success" => true]);
            exit;
        } catch (Exception $e) {
            header("HTTP/1.1 500 Internal Server Error");
            echo json_encode(["error" => $e->getMessage()]);
        } finally {
            $stmt->close(); // Close the prepared statement
            $conn->close(); // Close the database connection
        }
    } else {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(["error" => "Missing parameters"]);
    }
}
?>
