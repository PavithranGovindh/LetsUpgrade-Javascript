function printObjects()
{
  console.log("List of array of Objects :",arrayOfObjects);
}
function filterAge()
{
  console.log("Age Filtering less than equal to 30")
  arrayOfObjects.forEach(function(obj){ 
    if(obj.age<=30)
    {console.log(obj);}
  })
  
}
function filterCountry()
{
  console.log("Country Filtering, India")
  arrayOfObjects.forEach(function(obj){ 
    if(obj.country.toLowerCase()== "india")
    {console.log(obj);}
  })
}
arrayOfObjects = [{
  name : "Aravind",
  age : 25,
  country : "India",
  hobbies : ["swiming","reading"]},
  {name : "Benjamin",
  age : 32,
  country : "Australia",
  hobbies : ["coding","reading"]},
  {name : "Charlie",
  age : 30,
  country : "Sweden",
  hobbies : ["Surfing","chess"]},
  {name : "Geetha",
  age : 29,
  country : "India",
  hobbies : ["shopping","reading"]},
  {name : "Morgan",
  age : 31,
  country : "Malaysia",
  hobbies : ["swiming","trekking"]
  }];

// printObjects();
// filterAge();
// filterCountry();