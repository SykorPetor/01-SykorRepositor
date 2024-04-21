// Function to add item to the list
function addItem() {
    var itemInput = document.getElementById('itemInput');
    var item = itemInput.value.trim(); // Trim to remove extra whitespace

    if (item !== '') {
        addItemToList(item); // Add item to list
        saveItemsToStorage(); // Save items to localStorage
        itemInput.value = ''; // Clear input field
    }
}

// Function to add item to the list
function addItemToList(item) {
    var itemList = document.getElementById('itemList');
    var li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
}

// Function to save items to localStorage
function saveItemsToStorage() {
    var items = [];
    var itemList = document.getElementById('itemList').getElementsByTagName('li');
    
    // Convert list items to array
    for (var i = 0; i < itemList.length; i++) {
        items.push(itemList[i].textContent);
    }

    localStorage.setItem('shoppingListItems', JSON.stringify(items)); // Save to localStorage
}

// Function to load items from localStorage
function loadItemsFromStorage() {
    var storedItems = localStorage.getItem('shoppingListItems');
    
    if (storedItems !== null) {
        var items = JSON.parse(storedItems);
        items.forEach(function(item) {
            addItemToList(item);
        });
    }
}

// Load items from localStorage when the page loads
window.onload = loadItemsFromStorage;