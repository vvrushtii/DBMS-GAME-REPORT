// Fetch and display player data when the page loads
window.onload = function() {
    // Fetch player data from the backend
    fetch('../backend/get_player_data.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById("playerData").innerHTML = data;  // Display player data
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Update player progress when the button is clicked
    document.getElementById('updateProgressButton').onclick = function() {
        fetch('../backend/update_progress.php')  // Make sure this path is correct
            .then(response => response.text())
            .then(data => {
                alert(data);  // Display the result of the progress update
                // Optionally, refresh the player data after updating progress
                fetch('../backend/get_player_data.php')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById("playerData").innerHTML = data;  // Update the displayed data
                    });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


  // Fetch and display items (inventory) from the backend
  fetch('../backend/get_items.php')  // Adjust path if necessary
      .then(response => response.json())
      .then(items => {
          let itemList = document.getElementById("item-list");
          items.forEach(item => {
              let listItem = document.createElement("li");
              listItem.textContent = item.name;  // Display item name
              itemList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Error:', error);
      });

  // Fetch and display NPC dialogues from the backend
  fetch('../backend/get_dialogues.php')  // Adjust path if necessary
      .then(response => response.json())
      .then(dialogues => {
          let dialogueText = document.getElementById("dialogue-text");
          dialogueText.textContent = dialogues[0].dialogue_text;  // Display first NPC dialogue
      })
      .catch(error => {
          console.error('Error:', error);
      });
};
