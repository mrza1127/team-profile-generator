class Employee{
    constructor(name = '', id,email,githubuser) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubuser = githubuser;
    }

    getName() {
        return this.name
    };

    getId() {
        return this.id
    };

    getEmail() {
        return this.email
    };

    getGit(){
        return this.githubuser
    };

    getRole() {
        return "Employee";
    };
}
module.exports = Employee;