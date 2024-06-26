

// This repository contains a simple JavaScript function that searches for a specified term in a 
// given string. It converts both the string and the term to lowercase, trims any whitespace, and
//  returns the index of the first occurrence of the term. If the term is not found, the function 
//  returns a message saying it's not included. This utility is useful for string search operations
//   in JavaScript. The code is well-commented for easy understanding.


/**
 * Function to search for a term within a string and return its first occurrence index.
 * @param {string} string - The string to search within.
 * @param {string} searchTerm - The term to search for.
 * @returns {string} - A message indicating the first occurrence index or that the term is not included.
 */
function searchInString(string, searchTerm) {
    // Convert the input string to lowercase and trim whitespace
    const index = string
        .toLowerCase()
        .trim()
        .indexOf(searchTerm.toLowerCase().trim()); // Find the index of the search term in the string

    // Check if the search term is found in the string
    if (index > -1) {
        // Return a message with the index of the first occurrence
        return `The first occurrence of ${searchTerm} in the string is ${index}`;
    }

    // Return a message if the search term is not found
    return "Not Includes!";
}

// Test string
const str = "This is a string For TeST Function oF searchInSTring!";
// Test the function with the test string and search term
console.log(searchInString(str, "Function"));
