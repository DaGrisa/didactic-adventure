const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

module.exports = class EmployeeRepository {
    async getEmployees() {
        // data storage interaction here (f.e. DB access)
        const db = await this.openDb();
        const employees = await db.all('SELECT * FROM employees;');
        return employees;
    }

    async init() {
        const db = await this.openDb();
        await db.exec('CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, name TEXT NOT NULL);');
        // https://nodejs.dev/learn/nodejs-the-difference-between-development-and-production
        if (process.env.NODE_ENV === "development") {
          await db.exec('INSERT INTO employees VALUES (1,"Tony"),(2,"Lisa"),(3,"Michael"),(4,"Ginger");');
        }
    }

    async openDb () {
        return sqlite.open({
          filename: 'employees.db',
          driver: sqlite3.Database
        })
      }
}
