/**
 * The code processes an array of numbers by squaring the even numbers and tripling the odd numbers.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} A new array with the processed numbers.
 */

function processArray(arr) {
    // Use the map method to transform each element of the array
    return arr.map((num) => {
      // Check if the number is even or odd using the modulo operator
      if (num % 2 === 0) {
        // If the number is even, square it
        return num ** 2;
      } else {
        // If the number is odd, triple it
        return num * 3;
      }
    });
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const processedNumbers = processArray(numbers);
  console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]