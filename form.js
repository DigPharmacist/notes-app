



function Note(title, description, date) {
    this.title = title;
    this.description = description;
    var text = description;
    this.date = date;
}

// Function to save a note
function AddNote() {
    let title = document.getElementById("title").value;
    let text = document.getElementById("description").value;
    let date = new Date(); // Get the current date and time

    var note = new Note(title, text, date);
    // Create a new Note object with the data from the form
    var notesJSON = localStorage.getItem('notes');
    var notes = notesJSON ? JSON.parse(notesJSON) : [];

    notes.push(note);
    // You can do further processing with the 'note' object here, like saving it to a database or displaying it on the page
    var notesJSON = JSON.stringify(notes);
    
    // Save the note JSON string to localStorage
    localStorage.setItem('notes', notesJSON);
    
    // For now, let's just clear the form fields
    document.getElementById("Note").reset();
    window.location.href= "index.html";
    
  
}
