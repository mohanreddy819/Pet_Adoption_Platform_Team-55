<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// Check if petId is provided in the URL parameters
if(isset($_GET['petId'])) {
    $petId = $_GET['petId'];

    $servername = "localhost";
    $username = "root";
    $password = "1cr21is142"; // Update with your MySQL password
    $database = "pet_details";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL query to fetch pet details
    $sql = "SELECT * FROM pets WHERE petId = $petId";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch and format pet details
        $row = $result->fetch_assoc();
        $petDetails = array(
            'petId' => $row['petId'], // Corrected variable name
            'petName' => $row['petName'],
            'type' => $row['type'],
            'breed' => $row['breed'],
            'sex' => $row['sex'],
            'age' => $row['age'],
            'color' => $row['color'],
            'size' => $row['size'],
            'description' => $row['description']
        );

        // Return pet details as JSON
        echo json_encode($petDetails);
    } else {
        // If no pet found with the given ID, return empty JSON object
        echo json_encode((object)array('petId' => null));
    }

    // Close connection
    $conn->close();
} else {
    // If petId is not provided, return error message
    echo json_encode(array('error' => 'Pet ID not provided'));
}
?>
