<?php
include('db_connect.php');

// Example: Update progress for player with ID 1
$player_id = 1;  // You can change this dynamically if needed
$new_progress = 50;  // New progress value (you can dynamically update this based on the task)

$sql = "UPDATE players SET progress = '$new_progress' WHERE id = $player_id";

if ($conn->query($sql) === TRUE) {
    echo "Player progress updated successfully";
} else {
    echo "Error updating progress: " . $conn->error;
}

$conn->close();
?>

