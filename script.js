// Get references to the buttons
var button1 = document.getElementById("NewNotes");
var button2 = document.getElementById("button2");

// Add event listeners to the buttons
button1.addEventListener("click", function() {
    // Redirect to form.html when Button 1 is clicked
    window.location.href = "form.html";
});

button2.addEventListener("click", function() {
    // Redirect to page2.html when Button 2 is clicked
    window.location.href = "form.html";
});




function deleteNote(index) {
    // Retrieve the notes from localStorage
    var notesJSON = localStorage.getItem('notes');
    if (notesJSON) {
        // Convert the JSON string back to an array of note objects
        var notes = JSON.parse(notesJSON);
        // Remove the note at the specified index
        notes.splice(index, 1);
        // Convert the array of notes back to a JSON string
        var updatedNotesJSON = JSON.stringify(notes);
        // Update the localStorage with the updated notes array
        localStorage.setItem('notes', updatedNotesJSON);
        // Reload the page to reflect the changes
        location.reload();
    }
}
window.onload = function() {
    // Retrieve the note JSON string from localStorage
    var notesJSON = localStorage.getItem('notes');
    if (notesJSON) {
        // Convert the JSON string back to a note object
        var notes = JSON.parse(notesJSON);
        // Display the note in the div with the class contents
        var noteContentDiv = document.getElementById("Content");

        notes.forEach(function(note,index) {
            // Format the date for each note
            var formattedDate = new Date(note.date).toLocaleString();
            // Create HTML content for the note
            var noteHTML = "<div class='note'>" +
            "<h3>" + note.title + "</h3>" +
            "<p>" + note.description + "</p>" +
            "<p>Date: " + formattedDate + "</p>" +
            "<button onclick='deleteNote(" + index + ")'>Delete</button>" +
        "</div>";
// Append the noteHTML to the noteContentDiv
noteContentDiv.innerHTML += noteHTML;
        });
        
    }
};

