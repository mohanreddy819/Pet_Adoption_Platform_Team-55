<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$db_username = "root";
$db_password = "1cr21is142"; // Change this to your MySQL password
$dbname = "pet_details"; // Change this to your database name

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    try {
        $conn = new mysqli($servername, $db_username, $db_password, $dbname);

        if ($conn->connect_error) {
            throw new Exception("Failed to connect to database: " . $conn->connect_error);
        }

        // Check regular user login
        $query_user = "SELECT * FROM users WHERE username=? AND password=?";
        $stmt_user = $conn->prepare($query_user);
        $stmt_user->bind_param("ss", $username, $password);
        $stmt_user->execute();
        $result_user = $stmt_user->get_result();

        if ($result_user->num_rows == 1) {
            $response['success'] = true;
            $response['role'] = "user";
            $response['message'] = "User login successful";
        } else {
            // Check admin login
            $query_admin = "SELECT * FROM admins WHERE admin_username=? AND password=?";
            $stmt_admin = $conn->prepare($query_admin);
            $stmt_admin->bind_param("ss", $username, $password);
            $stmt_admin->execute();
            $result_admin = $stmt_admin->get_result();

            if ($result_admin->num_rows == 1) {
                $response['success'] = true;
                $response['isAdmin'] = true;
                $response['message'] = "Admin login successful";
            } else {
                $response['success'] = false;
                $response['isAdmin'] = false;
                $response['message'] = "Invalid username or password";
            }
        }
    } catch (Exception $e) {
        $response['success'] = false;
        $response['message'] = "Error: " . $e->getMessage();
    } finally {
        $conn->close();
    }
} else {
    $response['success'] = false;
    $response['message'] = "Invalid request";
}

echo json_encode($response);
?>
