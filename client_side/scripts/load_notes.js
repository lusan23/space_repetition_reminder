// changes the content of a couple of elements in the index page
//import { buildTable } from "./build_my_notes_layout.js";
function handleResponse(respText, elementId) {
    // change the content of given element
    
    const data = JSON.parse(respText);
    
    document.getElementById(elementId).innerHTML = data[elementId];

}

function loadStaticContent(elementContent) {
    const elementId = elementContent[0];
    const content = elementContent[1];
     
    document.getElementById(elementId).innerHTML = content;
}


function loadDinamicContent(srcDest) {
    const {url, elementId} = srcDest;
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            handleResponse(this.responseText, elementId);
        } else {
            console.error(`Request Status:${xhttp.status}`);
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}

function loadMyNotes() {
    //each func call changes one element's content
    loadStaticContent(["header", "My Notes"]);
    buildTable("table-container");cd
    
}