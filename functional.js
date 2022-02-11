
function Person( name, age){
    this.name = name; 
    this.age = age; 
}


Person.prototype.Greet = function() {
    return  this.name + " is " + this.age + " years old"; 
}

let michael =  new Person("michael", 34);

console.log(michael.Greet()); 

console.log(michael); 