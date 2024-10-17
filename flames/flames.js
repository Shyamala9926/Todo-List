document.getElementById('flamesForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the input fields, remove spaces, and make them lowercase
    let name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    let name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');

    // Array of FLAMES results
    let flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];

    // Calculate unique character count between the two names
    let uniqueCharCount = calculateUniqueCharacters(name1, name2);

    // Implement cyclic elimination to find the final result
    let flamesResult = getFlamesResult(flames, uniqueCharCount);

    // Display the result in the paragraph with id "result"
    document.getElementById('result').textContent = `Result: ${flamesResult}`;
});

// Function to count unique characters between two names
function calculateUniqueCharacters(str1, str2) {
    let combinedStr = str1 + str2;
    let charCount = {};

    // Count the occurrences of each character
    for (let char of combinedStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Remove common characters
    for (let char in charCount) {
        if (charCount[char] > 1) {
            delete charCount[char];
        }
    }

    // Return the number of remaining characters
    return Object.keys(charCount).length;
}

// Function to perform cyclic elimination and find the final FLAMES result
function getFlamesResult(flames, count) {
    let index = 0;

    // Continue eliminating until one option remains
    while (flames.length > 1) {
        index = (index + count - 1) % flames.length; // Calculate the next elimination index
        flames.splice(index, 1); // Remove the letter at that index
    }

    return flames[0]; // Return the last remaining letter
}


