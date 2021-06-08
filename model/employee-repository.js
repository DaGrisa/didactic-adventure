const EmployeeModel = require("./employee-model");

module.exports = class EmployeeRepository {
    getEmployees() {
        // data storage interaction here (f.e. DB access)
        return [new EmployeeModel(1,"Tony"),new EmployeeModel(2,"Lisa"), new EmployeeModel(3,"Michael"), new EmployeeModel(4,"Ginger")];
    }
}
