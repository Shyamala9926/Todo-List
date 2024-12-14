// Select the necessary elements
/*const addButton = document.getElementById('addButton');
const submitButton = document.getElementById('submitButton');
const inputField = document.getElementById('inputField');
const resultList = document.getElementById('resultList');*/

let data = [];

// Function to add input text to the list
addButton.addEventListener('click', function() {
    const inputText = inputField.value.trim();
    if (inputText) {
        data.push(inputText);
        inputField.value = '';  // Clear input after adding
        alert('Text added!');
    } else {
        alert('Please enter some text!');
    }
});

// Function to show all added items when submitting
/*submitButton.addEventListener('click', function() {
    resultList.innerHTML = '';  // Clear the previous list
    data.forEach(function(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        resultList.appendChild(listItem);*/

        //
       /* submitButton.addEventListener('click', function() {
            resultList.innerHTML = '';  // Clear the previous list
            data.forEach(function(item) {
                const listItem = document.createElement('li');
                
                // Create and append checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                
                // Append checkbox and item text to the list item
                listItem.appendChild(checkbox);
                listItem.appendChild(document.createTextNode(' ' + item));
                
                // Append the list item to the result list
                resultList.appendChild(listItem);*/

                
                document.getElementById('submitButton').addEventListener('click', function() {
                    const resultList = document.getElementById('resultList');
                    resultList.innerHTML = '';  // Clear the previous list
                    data.forEach(function(item, index) {
                        const listItem = document.createElement('li');
                        
                        // Create and append checkbox
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.dataset.index = index; // Store index in checkbox
                        
                        // Append checkbox and item text to the list item
                        listItem.appendChild(checkbox);
                        listItem.appendChild(document.createTextNode(' ' + item));
                        
                        // Append the list item to the result list
                        resultList.appendChild(listItem);
                    });
                });
        
                // Delete selected items
                document.getElementById('deleteButton').addEventListener('click', function() {
                    const checkboxes = document.querySelectorAll('#resultList input[type="checkbox"]');
                    checkboxes.forEach(function(checkbox) {
                        if (checkbox.checked) {
                            const index = checkbox.dataset.index;
                            data.splice(index, 1); // Remove item from data
                        }
                    });
                    document.getElementById('submitButton').click(); // Refresh the list
                });
        
                // Update selected item
                document.getElementById('updateButton').addEventListener('click', function() {
                    const checkboxes = document.querySelectorAll('#resultList input[type="checkbox"]');
                    checkboxes.forEach(function(checkbox) {
                        if (checkbox.checked) {
                            const index = checkbox.dataset.index;
                            const newText = prompt("Update item:", data[index]);
                            if (newText) {
                                data[index] = newText; // Update the item
                            }
                        }
                    });
                    document.getElementById('submitButton').click(); // Refresh the list
                });