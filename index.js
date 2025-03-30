// Write your solution in this file!

const employee = {
    name: "Sam"
  };
  
 
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  

  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee; 
  }
  
 
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
  }
  
 
  console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")); 

  
  console.log(employee); 
 
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
  console.log(employee); 
  
  
  console.log(deleteFromEmployeeByKey(employee, "name")); 
 
  
  console.log(employee); 
  
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log(employee); 
  