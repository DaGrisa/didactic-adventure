const express = require("express");
const EmployeeController = require("./api/employee-controller");
const EmployeeRepository = require("./model/employee-repository");

const app = express();
const employeeController = new EmployeeController();

app.get("/employees", async (req, res, next) => {
    const employees = await employeeController.getEmployees();
    res.json(employees);
});

app.get("/error", async (req, res, next) => {
    try{
        const result = await employeeController.throwError();
        res.json(result);
    } catch (error) {
        next(error);
    }
});

app.use(function(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).send({message: err.message});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// create db an fill with data
const employeeRepository = new EmployeeRepository();
employeeRepository.init().catch(error => console.error(error));
