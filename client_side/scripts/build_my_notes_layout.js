export function buildTable(containerId) {
    const container = document.getElementById(containerId);
    const tb = document.createElement("table");
  

    //building the headers
    const headersArr = ["Subject", "Content", "Creation Date"];
    const thead = document.createElement("thead");
    let row = thead.insertRow();
    for (let header of headersArr) {
        let tmpCell = row.insertCell();
        tmpCell.textContent = header;
    }
    tb.appendChild(thead);
    
    container.appendChild(tb);
}

export function updatePrevContent(elementId, newContent) {

    const button = document.getElementById(elementId);
    if (button) {
        button.textContent = newContent;
    } else {
        console.error("Element not found!!")
    }
    
}