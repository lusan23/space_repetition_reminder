export function popTable (){
    //remove the table from the dom and return it.
    const tb = document.getElementsByTagName("table")[0];
    const tbContainer = document.getElementById("table-container");
    tbContainer.removeChild(tb);
    return tb;
}
