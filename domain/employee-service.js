const EmployeeRepository = require("../model/employee-repository");
const employeeRepository = new EmployeeRepository();

module.exports = class EmployeeService {
    async getEmployees() {
        // business logic here
        return await employeeRepository.getEmployees();
    } 
}
