<?php
// Database connection settings
$servername = "localhost"; // Typically localhost
$username = "root";        // Your MySQL username
$password = "";            // Your MySQL password
$dbname = "website_db";    // The database you created

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the current hit count
$sql = "SELECT hit_count FROM page_hits WHERE id = 1";  // Assuming you're tracking just one page
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch the current hit count
    $row = $result->fetch_assoc();
    $current_hits = $row["hit_count"];
} else {
    // If no result, initialize the hit count
    $current_hits = 0;
}

// Increment the hit counter
$new_hit_count = $current_hits + 1;

// Update the hit counter in the database
$update_sql = "UPDATE page_hits SET hit_count = $new_hit_count WHERE id = 1";
$conn->query($update_sql);

// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DefColumn - Main Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Display the hit counter -->
    <div id="hit-counter" style="font-family: 'Courier New', monospace; font-size: 1.5em; color: #333;">
        <p>Page views: <?php echo $new_hit_count; ?></p>
    </div>

</body>
</html>
