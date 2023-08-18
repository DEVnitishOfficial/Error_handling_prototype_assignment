// 6. Using Static Method to Add Two Numbers with Calculator Class
// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.

class Calculator{
   add(num1,num2){
       return num1 + num2
    }
    static sub(num1,num2){
        return num1 - num2
    }
}

const calculate = Calculator.sub(5,10)
// console.log(calculate);

const calcul = new Calculator()
console.log(calcul.add(44,5));