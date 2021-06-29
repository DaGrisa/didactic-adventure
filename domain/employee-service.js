const EmployeeRepository = require("../model/employee-repository");

module.exports = class EmployeeService {
    constructor(employeeRepository) {
        if(employeeRepository){
            this.employeeRepository = employeeRepository;
        } else {
            this.employeeRepository = new EmployeeRepository();
        }
    }

    async getEmployees() {
        // business logic here
        return await this.employeeRepository.getEmployees();
    }

    async getSalary(employeeId) {
        const employee = this.employeeRepository.getById(employeeId);
        if(!employee){
            return 0;
        }

        const monthlyWorkingHours = employee.getMonthlyWorkingHours();
        const hourlyWageRate = employee.getHourlyWageRate();
        const bonuses = employee.getBonuses();

        return monthlyWorkingHours * hourlyWageRate + bonuses;
    }
}
