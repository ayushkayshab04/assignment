const employeeService = require("./employee.service");
const {getEmployeeListValidaton} = require("./employee.validation")



const getEmployeeList = async (req, res,next) => {
  try {
    const employeeList = await employeeService.getEmployeeList();
    res.send(employeeList)
  } catch (err) {
    throw new Error(err);
  }
}

const getEmployeeById = async(req,res,next)=>{
  try {
  const {id} = req.params
  const employee = await employeeService.getEmployeeById({id})
  res.send(employee)
  }catch(err){
    throw new Error(err)
  }
}

const addEmployee = async(req,res,next)=>{
  try{
   const {firstName,lastName,age,desig,depart} = req.body
   await getEmployeeListValidaton.validateAsync(req.body)
   const data = await employeeService.addEmployee({firstName,lastName,age,desig,depart})
   res.send("Employee added Sucessfully") 
  }catch(err){
    throw new Error(err)
  }
}

const updateEmployee = async(req,res,next)=>{
  try{
    const {id} = req.params;
    const {firstName,lastName,age,desig,depart} = req.body;
    const result = await employeeService.updateEmployee({id},{firstName,lastName,age,desig,depart});
    res.send(result);
  }catch(err){
    throw new Error(err);
  }
}

const deleteEmployee = async (req,res,next)=>{
  try{
    const {id} = req.params; 
    await employeeService.deleteEmployee({id});
    res.send("Employee deleted sucessfully");
  }catch(err){
    throw new Error(err)
  }
}



module.exports = {
    getEmployeeList,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,   
}