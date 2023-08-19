/*
9. Check the presence using closures.

Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.

*/

// function numberChecker(arrNum){
//     return function(num){
//        return arrNum.includes(num)
//     }
// }

function numberChecker(arrNum){
  if(!Array.isArray(arrNum)){
    throw new Error('Input is not an array');
  }
  
  const filteredArr = arrNum.filter(num => typeof num === 'number');// checking the input arr is number or not
  const numSet = new Set(filteredArr); // using Set insted of includes because of time complexity include → O(n), Set → O(1)constant time complexity
  console.log(numSet);
  
  return function(num = 0){ // default value 0
    if(typeof num !== 'number'){
      throw new Error('Input is not a number');
    }
    
    return numSet.has(num);
 }
}

const retFunc = numberChecker([1,3,4,5,6,7])
console.log(retFunc(3));
console.log(retFunc(8));   