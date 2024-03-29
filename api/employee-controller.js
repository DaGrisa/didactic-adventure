const EmployeeService = require("../domain/employee-service");
const employeeService = new EmployeeService();

module.exports = class EmployeeController {
    async getEmployees() {
        // coordinate interaction with domain here (f.e. call service methods)
        return await employeeService.getEmployees();
    }

    throwError() {
        throw new Error("Ohno - something went wrong on the server and the middleware catched it.");
    }
}
