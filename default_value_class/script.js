

// 5. Implementing a Person Class with Default Values
// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person{
    constructor(name = "unkonwn" , age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name} Age: ${this.age}`
    }
}

const Person1 = new Person("nitish",20)
console.log(Person1.getDetails());

const Person2 = new Person()
console.log(Person2.getDetails());