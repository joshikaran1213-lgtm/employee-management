function EmployeManagement(){
    const name=document.getElementById("name").value;
    const id =document.getElementById("id").value;
    const department=document.getElementById("department").value;
    const salary=Number(document.getElementById("salary").value);
    let table = document.getElementById("table");
   let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    cell1.textContent="name";
    cell2.textContent="id"
    cell3.textContent="department";
    cell4.textContent="salary";

}