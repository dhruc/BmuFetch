var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["enroll"] = document.getElementById("enroll").value;
    formData["dept"] = document.getElementById("dept").value;
    formData["Math"] = document.getElementById("Math").value;
    formData["IT"] = document.getElementById("IT").value;
    formData["es"] = document.getElementById("es").value;
    formData["EG"] = document.getElementById("EG").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.enroll;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dept;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Math;
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.IT
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = data.es
    cell7 = newRow.insertCell(6)
    cell7.innerHTML = data.EG
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("enroll").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("Math").value = "";
    document.getElementById("IT").value = "";
    document.getElementById("es").value = "";
    document.getElementById("EG").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("enroll").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dept").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Math").value = selectedRow.cells[3].innerHTML;
    document.getElementById("IT").value = selectedRow.cells[3].innerHTML;
    document.getElementById("es").value = selectedRow.cells[3].innerHTML;
    document.getElementById("EG").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.enroll;
    selectedRow.cells[2].innerHTML = formData.dept;
    selectedRow.cells[3].innerHTML = formData.Math;
    selectedRow.cells[4].innerHTML = formData.IT;
    selectedRow.cells[5].innerHTML = formData.es;
    selectedRow.cells[6].innerHTML = formData.EG;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } 
   
    
    else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}