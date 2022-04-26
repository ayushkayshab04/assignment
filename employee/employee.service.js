const {mysqlManager} = require("../manager/index")

const getEmployeeList = async()=>{
    const conn = await mysqlManager.getConnection();
    const query = `select * from project.employee`;

    const [rows] = await conn.execute(query);
    return rows;
}

const getEmployeeById = async({id})=>{
    const conn = await mysqlManager.getConnection();
    const query = `select * from project.employee where employee_id = ${id}`;
    const [rows] = await conn.execute(query);
    return rows;
}
const addEmployee = async({firstName,lastName,age,desig,depart})=>{
    const conn = await mysqlManager.getConnection();
    const query = `INSERT INTO project.employee 
    (first_name, last_name, age, desgination, department)
    VALUES('${firstName}', '${lastName}', ${age}, '${desig}', '${depart}')` ;
    await conn.execute(query)

}

const updateEmployee = async({id},{firstName,lastName,age,desig,depart})=>{
    const conn = await mysqlManager.getConnection();
    const query = `UPDATE project.employee
    SET first_name='${firstName}', last_name='${lastName}', age=${age}, desgination='${desig}', department='${depart}'
    WHERE employee_id=${id}`;
    await conn.execute(query);
    const data = await getEmployeeById({id})
    return data;
}

const deleteEmployee = async({id})=>{
    const conn = await mysqlManager.getConnection();
    const query = `DELETE FROM project.employee WHERE employee_id=${id}`;
    await conn.execute(query);
    
}




module.exports ={
    getEmployeeList,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    

}