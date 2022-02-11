// const UserController = require('./userController');


class Person{

    constructor(name, age){
        this.name = name; 
        this.age = age; 

        // this.UserController = new UserController(); 
    }

    Greet() {
        // UserController.getUser(5563); 
        return this.name + " is " + this.age + " years old"; 
    }
   
}



let michael =  new Person("michael", 34);

console.log(michael.Greet()); 

console.log(michael); 