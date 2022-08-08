// Write your solution in this file!
let employee={
    name:"kris",
    streetaddress:"broadway"
}
function  updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee={...employee}
   newEmployee[key]=value
   return newEmployee
}
updateEmployeeWithKeyAndValue(employee, "name","Sam")
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetaddress","11 Broadway")
function  deleteFromEmployeeByKey(employee, key){
    let newEmployee={...employee}
   delete  newEmployee.name
   return newEmployee
}

function   destructivelyDeleteFromEmployeeByKey(employee, key){
    
   delete  employee.name
   return employee
}
