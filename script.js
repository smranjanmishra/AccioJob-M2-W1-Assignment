/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((item)=>{
     if(item.profession==="developer"){
      console.log(item)
     }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item)=>{
      if(item.profession=="developer"){
        console.log(item)
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",profession:"intern"})
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
  
    arr = arr.filter(person => person.profession !== "admin");
    console.log(arr)
  }
  
  let newArr = [
    { id: 5, name: "mike", age: "21", profession: "designer" },
    { id: 6, name: "emma", age: "22", profession: "manager" },
    { id: 7, name: "peter", age: "23", profession: "developer" },
  ];
  
  function concatenateArray() {
    //Write your code here, just console.log
  
    let combinedArray = arr.concat(newArr);
    console.log(combinedArray);
  }
  
  PrintDeveloperbyMap()
  PrintDeveloperbyForEach()
  addData()
  removeAdmin()
  concatenateArray()