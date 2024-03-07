let node = document.querySelector("main>article"); // The article in main

/*
node.innerHTML = "It worked!<BR>";

let newNode = document.createElement ("p");
newNode.textContent = "Text";
node.appendChild(newNode); // Attaches the child to the selected element
*/

let count = 5;
let table = document.createElement("table");
table.style.border = "1px solid black";
table.id = "data_table";
for(var index = count; index > 0; index--) {
    let newRow = document.createElement("tr");
    let newTableData = document.createElement("td");
    newRow.appendChild(newTableData);
    table.appendChild(newRow);

    newTableData.textContent = index;
}

node.appendChild(table);