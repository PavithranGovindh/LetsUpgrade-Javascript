window.onload = function()
{
let tempBus=[];
if(localStorage.getItem("allBus")==null)
{
    localStorage.setItem("allBus", JSON.stringify(tempBus));
}
}

function display(superarray = undefined) {
  let tabledata = "";
  let allBus;
  
  if (superarray == undefined) {
    allBus = JSON.parse(localStorage.getItem("allBus"));
  } else {
    allBus = superarray;
  }
if(allBus != null)
{
  allBus.forEach(function (bus, index) {
    let currentRow = `<tr> <td>${index+1}</td> <td>${bus.busName}</td><td>${bus.busSource}</td> <td>${bus.busDestination}</td> <td>${bus.busNumber}</td> <td>${bus.busCapacity}</td> </tr>`
    tabledata += currentRow;
  });

  document.getElementsByClassName("tbody")[0].innerHTML = tabledata;
}
}

display();

function addBus(event) {
  event.preventDefault();
console.log("Calling");
let allBus = JSON.parse(localStorage.getItem("allBus"));
  let newBus = {};
  newBus.busName = document.getElementById("busName").value;
  newBus.busSource = document.getElementById("busSource").value;
  newBus.busDestination = document.getElementById("busDestination").value;
  newBus.busNumber = document.getElementById("busNumber").value;
  newBus.busCapacity = document.getElementById("busCapacity").value;
console.log(newBus);
console.log(allBus);
  console.log(typeof(allBus));
  allBus.push(newBus);
  console.log(allBus);
  localStorage.setItem("allBus", JSON.stringify(allBus));

  display();

  document.getElementById("busName").value = "";
  document.getElementById("busSource").value= "";
  document.getElementById("busDestination").value = "";
  document.getElementById("busNumber").value = "";
  document.getElementById("busCapacity").value="";
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;
  let allBus = JSON.parse(localStorage.getItem("allBus"));
  let newdata = allBus.filter(function (bus) {
    return (
      bus.busSource.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || bus.busDestination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}
