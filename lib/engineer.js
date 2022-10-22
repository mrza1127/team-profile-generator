const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, githubuser){
        super(name, id, email, githubuser);
    }
        getRole() {
            return "Engineer"
        };

}
module.exports = Engineer;