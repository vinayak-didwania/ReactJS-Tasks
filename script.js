var rowCount = 6;
var tableBody = document.getElementById("tableBody");
tableBody.innerHTML = '';

for (var i = 1; i <= rowCount; i++) {
    var row = document.createElement("tr");
    var taskNameCell = document.createElement("td");
    taskNameCell.textContent = "Task-" + i;
    var linkCell = document.createElement("td");
    var link = document.createElement("a");
    link.href = "https://mern-react-js-task" + i + ".vercel.app/";
    link.target = "_blank";
    link.textContent = "Link";
    linkCell.appendChild(link);

    row.appendChild(taskNameCell);
    row.appendChild(linkCell);
    tableBody.appendChild(row);
}