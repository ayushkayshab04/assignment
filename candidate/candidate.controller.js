const candidateService = require('./candidate.service');
const { candidateValidation } = require('./candidate.validation');

const getCandidateList = async (req, res) => {
  try {
    const candidateList = await candidateService.getCandidateList();
    res.send(candidateList);
  } catch (err) {
    throw new Error(err);
  }
};

const addCandidate = async (req, res) => {
  try {
    const {
      firstName, lastName, userId, email,
    } = req.body;
    await candidateValidation.validateAsync(req.body);
    await candidateService.addcandidate({
      firstName, lastName, userId, email,
    });
    res.send('candidate added Sucessfully');
  } catch (err) {
    throw new Error(err);
  }
};

// const getEmployeeById = async(req,res)=>{
//   try {
//   const {id} = req.params
//   const employee = await employeeService.getEmployeeById({id})
//   res.send(employee)
//   }catch(err){
//     throw new Error(err)
//   }
// }

// const updateEmployee = async(req,res)=>{
//   try{
//     const {id} = req.params;
//     const {firstName,lastName,age,desig,depart} = req.body;
//     const result = await employeeService.updateEmployee({id},{
// firstName,
// lastName,
// age,
// desig,
// depart});
//     res.send(result);
//   }catch(err){
//     throw new Error(err);
//   }
// }

// const deleteEmployee = async (req,res)=>{
//   try{
//     const {id} = req.params;
//     await employeeService.deleteEmployee({id});
//     res.send("Employee deleted sucessfully");
//   }catch(err){
//     throw new Error(err)
//   }
// }

module.exports = {
  getCandidateList,
  addCandidate,
};
