var rowCount = 6;
var tableBody = document.getElementById("tableBody");
tableBody.innerHTML = '';

for (var i = 1; i <= rowCount; i++) {
    var row = document.createElement("tr");
    
    // Task Name Column
    var taskNameCell = document.createElement("td");
    taskNameCell.textContent = "Task-" + i;
    
    // First Set of Links Column
    var firstLinkCell = document.createElement("td");
    var firstLink = document.createElement("a");
    firstLink.href = "https://mern-react-js-task" + i + ".vercel.app/";
    firstLink.target = "_blank";
    firstLink.textContent = "Link";
    firstLinkCell.appendChild(firstLink);

    // Second Set of Links Column
    var secondLinkCell = document.createElement("td");
    var secondLink = document.createElement("a");
    secondLink.href = "https://github.com/vinayak-didwania/MERN-ReactJS-Task" + i;
    secondLink.target = "_blank";
    secondLink.textContent = "Link";
    secondLinkCell.appendChild(secondLink);

    row.appendChild(taskNameCell);
    row.appendChild(firstLinkCell);
    row.appendChild(secondLinkCell); // Add the new column
    tableBody.appendChild(row);
}
