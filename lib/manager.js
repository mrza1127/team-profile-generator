const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, githubuser){
        super(name, id, email, githubuser);
    }
    getRole() {
        return "Manager";
    };
}
module.exports = Manager;