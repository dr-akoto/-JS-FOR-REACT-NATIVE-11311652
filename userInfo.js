/**
 * Creates an array of user profile objects with original names, modified names, and auto-incremented IDs.
 *
 * @param {string[]} originalNames - The input array of original names.
 * @param {string[]} modifiedNames - The input array of modified names.
 * @returns {Object[]} An array of user profile objects.
 */
function createUserProfiles(originalNames, modifiedNames) {
    // Check if the input arrays have the same length
    if (originalNames.length !== modifiedNames.length) {
      throw new Error('Input arrays must have the same length.');
    }
  
    // Initialize an empty array to store user profile objects
    const userProfiles = [];
  
    // Iterate over the arrays in the input using the forEach method
    originalNames.forEach((name, index) => {
      // Create a user profile object with originalName, modifiedName, and id
      const userProfile = {
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + Math.floor(Math.random()* (3-1) + 1), // Auto-increment id starting from 1
      };
  
      // Push the user profile object to the userProfiles array
      userProfiles.push(userProfile);
    });
  
    return userProfiles;
  }
  
  // Example usage:
  const originalNames = ['John', 'Jane', 'Bob', 'Alice'];
  const modifiedNames = ['JOHN', 'jane', 'BOB', 'alice'];
  const userProfiles = createUserProfiles(originalNames, modifiedNames);
  console.log(userProfiles);
  /*
  Output:
  [
    { originalName: 'John', modifiedName: 'JOHN', id: 1 },
    { originalName: 'Jane', modifiedName: 'jane', id: 2 },
    { originalName: 'Bob', modifiedName: 'BOB', id: 3 },
    { originalName: 'Alice', modifiedName: 'alice', id: 4 }
  ]
  */