const EmployeeRepository = require("../model/employee-repository");
const employeeRepository = new EmployeeRepository();

module.exports = class EmployeeService {
    getEmployees() {
        // business logic here
        return employeeRepository.getEmployees();
    }
}
