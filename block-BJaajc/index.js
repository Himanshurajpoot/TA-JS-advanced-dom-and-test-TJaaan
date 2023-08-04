// 1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and 
// return the `fullName`

function getFullName (firstName,lastName){
    return `${firstName} ${lastName}`
}


// 2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` 
// based on wether the value passed is palindrome or not.

function isPalindrome(value) {
    // Convert the input value to a string for comparison
    const valueStr = String(value);
  
 // Compare the original string with its reverse
  return valueStr === valueStr.split('').reverse().join('');
  }


//   - Create a function called `getCircumfrence`:

// Pass the radius of a circle to the function and it returns the circumference
//  based on the radius, and output `The circumference is NN`.

function getCircumference(radius) {
    // Calculate the circumference using the formula: 2 * π * radius
    const circumference = Math.floor(2 * Math.PI * radius);
  
    // Return the result with a formatted string
    return circumference;
  }


  function getArea(radius) {
    // Calculate the area using the formula: π * radius^2
    const area = Math.floor(Math.PI * Math.pow(radius, 2));
  
    // Return the result with a formatted string
    return area;
  }
module.exports={
  getFullName,
  isPalindrome,
  getCircumference,
  getArea
} 