const actions = ["palette", "add_alert", "person_add", "image", "archive", "more_vert", "undo", "redo"];

function takeNote() {
    const title = document.getElementById("note-title");
    const content = document.getElementById("note-content");
    const display = document.getElementById("display");

    //Make a div container for a class 'note
    const note = document.createElement("div");
    note.classList.add("note");

    //Make an element with a 'p' tag for Id 'title, the 'innerText' function allows for a visual text eg 'p' tag (paragraph) to be visible to the user
    const new_title = document.createElement("p");
    new_title.innerText = title.innerText;

    const new_content = document.createElement("p");
    new_content.InnerText = content.innerText;

    //Adding the new children to mother container 'note'
    note.appendChild(new_title);
    note.appendChild(new_content);

    //Adding <div class="note"> as a child to mother container 'display'
    display.appendChild(note);

    console.log(title.innerText, content.innerText);
}