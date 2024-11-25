<?php
include('db_connect.php');

// Example: Fetch data for player with ID 1
$sql = "SELECT * FROM players WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data for each row
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"] . " - Level: " . $row["level"] . " - Progress: " . $row["progress"];
    }
} else {
    echo "No player data found";
}

$conn->close();
?>
