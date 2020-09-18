let employees=[
  {name:"Ashish",
  age:25,
  city:"Chennai",
  salary:55000},
  {name:"Shamili",
  age:25,
  city:"Krishnagiri",
  salary:35000},
  {name:"Subash",
  age:33,
  city:"Dharapuram",
  salary:35000},
  {name:"Vishnu",
  age:27,
  city:"Coimbatore",
  salary:29000},
  {name:"Ramesh",
  age:30,
  city:"Chennai",
  salary:35000}
]

function display(parentArray)
{
  let tableData ="";
  parentArray.forEach(function(child,index){
    let currentRow = `<tr>
  <td>${index+1}</td>
  <td>${child.name}</td>
  <td>${child.age}</td>
  <td>${child.city}</td>
  <td>${child.salary}</td>
  <td><button onclick="deleteEmployee(${index})">Delete</button></td>
</tr>`;
    tableData+=currentRow;
  })
  document.getElementsByClassName("tdata")[0].innerHTML = tableData;
}
display(employees)

function deleteEmployee(employeeIndex)
{
  employees.splice(employeeIndex,1);
  display(employees)
}


function searchByNameAndCity()
{
  let searchValue = document.getElementById("search").value;
  let newData = employees.filter(function(employee)
    {
    return (employee.name.toLowerCase().indexOf(searchValue.toLowerCase())!=-1) || (employee.city.toLowerCase().indexOf(searchValue.toLowerCase())!=-1);    
  })
  display(newData)
}