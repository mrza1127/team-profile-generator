const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, githubuser, school){
        super(name, id, email, githubuser);

        this.school = school;
    }
    getSchool() {
        return `Studied at ${this.school}. `
    }

    getRole() {
        return "Intern"
    }

}

module.exports = Intern;