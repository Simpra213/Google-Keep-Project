const actions = ["palette", "add_alert", "person_add", "image", "archive", "more_vert", "undo", "redo"];

class Note {
    title;
    content;

    constructor (title, content) {
        this.title = title;
        this.content = content;
    }

    getTitle() {
        return this.title;
    }

    getContent() {
        return this.content;
    }
}


let note =new Note('first note', 'this is my first note');

function takeNote() {
    const title = document.getElementById("note-title");
    const content = document.getElementById("note-content");
    // const display = document.getElementById("display");

    //Make a div container for a class 'note
    // const note = document.createElement("div");
    // note.classList.add("note");

    // //Make an element with a 'p' tag for Id 'title, the 'innerText' function allows for a visual text eg 'p' tag (paragraph) to be visible to the user
    // const new_title = document.createElement("p");
    // new_title.innerText = title.innerText;

    // const new_content = document.createElement("p");
    // new_content.innerText = content.innerText;

    let note_obj = new Note(title.innerText, content.innerText);
    saveNote(note_obj);
    appendLastNote();

    //Adding the new children to mother container 'note'
    // note.appendChild(new_title);
    // note.appendChild(new_content);

    // //Adding <div class="note"> as a child to mother container 'display'
    // display.appendChild(note);

    // console.log(title.innerText, content.innerText);
}

function saveNote (note) {

    let notes = loadNotes();

    if(notes == null) {
        console.log("first without having anything stored");
        localStorage.setItem("Notes", JSON.stringify([]));

        saveNote(note);
    }

    console.log("found something in the local storage");

    notes.push(note);

    notes = JSON.stringify(notes);
    localStorage.setItem('Notes', notes);    
}


function loadNotes() {
    let notes = localStorage.getItem('Notes');
    notes = JSON.parse(notes);
    return notes;
}


function displayNotes() {
    let notes = loadNotes();

    const display = document.getElementById("display");

    for (index in notes) {
        console.log();
        const note = document.createElement("div");
        note.classList.add("note");

        //Make an element with a 'p' tag for Id 'title, the 'innerText' function allows for a visual text eg 'p' tag (paragraph) to be visible to the user
        const new_title = document.createElement("p");
        new_title.innerText = notes[index].title;

        const new_content = document.createElement("p");
        new_content.innerText = notes[index].content;

        //Adding the new children to mother container 'note'
        note.appendChild(new_title);
        note.appendChild(new_content);
        //Adding <div class="note"> as a child to mother container 'display'
        display.appendChild(note);
    }
}


function appendLastNote() {
    let lastNote = loadNotes()[loadNotes().length - 1];
    const display = document.getElementById("display");
    note.classList.add("note");

    //Make an element with a 'p' tag for Id 'title, the 'innerText' function allows for a visual text eg 'p' tag (paragraph) to be visible to the user
    const new_title = document.createElement("p");
    new_title.innerText = lastNote.title;

    const new_content = document.createElement("p");
    new_content.innerText = lastNote.content;

    //Adding the new children to mother container 'note'
        note.appendChild(new_title);
        note.appendChild(new_content);
        //Adding <div class="note"> as a child to mother container 'display'
        display.appendChild(note);
}

displayNotes();
