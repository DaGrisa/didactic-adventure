const express = require("express");
const EmployeeController = require("./api/employee-controller");
const EmployeeRepository = require("./model/employee-repository");

const app = express();
const employeeController = new EmployeeController();

app.get("/employees", async (req, res, next) => {
    const employees = await employeeController.getEmployees();
    res.json(employees);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// create db an fill with data
const employeeRepository = new EmployeeRepository();
employeeRepository.init().catch(error => console.error(error));
