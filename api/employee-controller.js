const EmployeeService = require("../domain/employee-service");
const employeeService = new EmployeeService();

module.exports = class EmployeeController {
    getEmployees() {
        // coordinate interaction with domain here (f.e. call service methods)
        return employeeService.getEmployees();
    }
}
