<?php
$servername = "localhost"; // Database host
$username = "root";        // Database username (default for XAMPP)
$password = "";            // Database password (default for XAMPP)
$dbname = "jungle_adventure"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
