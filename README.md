# -JS-FOR-REACT-NATIVE-11311652
## STUDENT ID:11311652

# Array Manipulation and User Profile Generation

This project contains an amount of JavaScript functions for  manipulating arrays and generating user profile . The functions are placed into two  files: `arrayManipulation.js` and `userInfo.js`.



## Array Manipulation

The `arrayManipulation.js` file contains two different functions to manipulate arrays of numbers and strings.

### processArray

```javascript
function processArray(arr)
```

An array of numbers `arr` is passed as an argument to the function and returns a new array where each even number is squared, and each odd number is tripled.


### formatArrayStrings

```javascript
function formatArrayStrings(strings, processedNumbers)
```

This function takes two arrays as arguments:

1. `strings`: An array of strings.
2. `processedNumbers`: An array of numbers processed by the `processArray` function.

The function modifies each string based on its corresponding number:

-  The entire string Capitalized if the number is even.
- It converts the string to lowercase if the number is odd.

It then returns a new array of formatted strings.



## User Profile Generation

The `userInfo.js` file contains a function for creating user profile objects from arrays of names.

### createUserProfiles

```javascript
function createUserProfiles(originalNames, modifiedNames)
```

This function takes two arrays as arguments:

1. `originalNames`: An array of original names.
2. `modifiedNames`: An array of modified names.

It returns an array of objects, where each object contains these  properties:

- `originalName`: The original name from the `originalNames` array.
- `modifiedName`: The corresponding modified name from the `modifiedNames` array.
- `id`: An auto-incremented ID starting from 1.




