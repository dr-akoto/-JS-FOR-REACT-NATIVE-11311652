/**
 * Processes an array of numbers by squaring the even numbers and tripling the odd numbers.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} A new array with the processed numbers.
 */
function processArray(arr) {
    return arr.map((num) => {
      if (num % 2 === 0) {
        return num ** 2;
      } else {
        return num * 3;
      }
    });
  }
  

  function formatArrayStrings(strings, processedNumbers) {
    //  the function Checks if the arrays have the same length
    if (strings.length !== processedNumbers.length) {
      throw new Error('The arrays in the input must be of the same length.');
    }
  
    // The map method is  used to change each string based on its corresponding processed number
    return strings.map((str, index) => {
      const processedNum = processedNumbers[index];
  
      // Check if the processed number is even or odd
      if (processedNum % 2 === 0) {
        // If the number is even, capitalize the entire string
        return str.toUpperCase();
      } else {
        // If the number is odd, the string is converted to lowercase
        return str.toLowerCase();
      }
    });
  }
  
  // code usage:
  const words = ['Kwame', 'Drake', 'Steer', 'Rampant', 'Cloudy',"Camera"];
  const numbers = [1, 2, 3, 4, 5,6];
  const processedNumbers = processArray(numbers);
  const formattedWords = formatArrayStrings(words, processedNumbers);
  console.log(formattedWords);