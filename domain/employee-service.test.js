const EmployeeService = require('./employee-service');

test('calculate an employees salary', async () => {
    // Arrange
    const employeeId = 1;
    const employeeRepositoryMock = {
        getById: () => {
            return {
                getMonthlyWorkingHours: () => 150,
                getHourlyWageRate: () => 8.5,
                getBonuses: () => 200
            }
        }
    }
    const employeeService = new EmployeeService(employeeRepositoryMock);

    // Act
    const salary = await employeeService.getSalary(employeeId);

    // Assert
    expect(salary).toBe(1475);
});
