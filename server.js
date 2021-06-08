const express = require("express");
const EmployeeController = require("./api/employee-controller");

const app = express();
const employeeController = new EmployeeController();

app.get("/employees", (req, res, next) => {
    const employees = employeeController.getEmployees();
    res.json(employees);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
