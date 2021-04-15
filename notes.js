console.log("welcome");
showNotes();

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    showNotes();

});

function showNotes(){
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index) 
    {
        html+=`<div class="notecard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary"  style="background-color: indianred;">Delete note</button>
        </div>
    </div>`;
        });

        let noteselement=document.getElementById('notes');
        if(notesObj.length!=0){
            noteselement.innerHTML=html;
        }
        else{
            noteselement.innerHTML="No notes added";        
        }


}

function deletenote(index){
    console.log("delete note",index);
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}