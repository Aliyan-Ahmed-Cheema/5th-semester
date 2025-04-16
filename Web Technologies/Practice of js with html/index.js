document.addEventListener('DOMContentLoaded', function () {
    const addItemButton = document.getElementById('addItemButton');
    const toBuyList = document.getElementById('toBuyList');
    const boughtList = document.getElementById('boughtList');

    // Adding a new item to the 'To Buy' list
    addItemButton.addEventListener('click', function () {
        const newItem = document.getElementById('newItemInput').value;
        if (newItem) {
            addNewItem(newItem);
            document.getElementById('newItemInput').value = ''; // Clear input
        }
    });

    function addNewItem(itemName) {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.setAttribute('draggable', true); // Make the item draggable
        listItem.innerHTML = `${itemName}
            <button class="btn btn-success btn-sm checkBtn">✔</button>
            <button class="btn btn-danger btn-sm removeBtn">&times;</button>`;
        
        toBuyList.appendChild(listItem);
        setupListItemButtons(listItem);
        setupDragAndDrop(listItem);
    }

    // Handle check, undo, and remove button functionality
    function setupListItemButtons(listItem) {
        const checkBtn = listItem.querySelector('.checkBtn');
        const removeBtn = listItem.querySelector('.removeBtn');
        
        checkBtn.addEventListener('click', function () {
            if (checkBtn.textContent === '✔') {
                // Move to 'Bought Items'
                boughtList.appendChild(listItem);
                checkBtn.textContent = 'Undo';
                checkBtn.classList.replace('btn-success', 'btn-warning');
            } else {
                // Move back to 'To Buy' list
                toBuyList.appendChild(listItem);
                checkBtn.textContent = '✔';
                checkBtn.classList.replace('btn-warning', 'btn-success');
            }
        });

        // Remove item from list
        removeBtn.addEventListener('click', function () {
            listItem.remove();
        });
    }

    // Drag and drop functionality
    function setupDragAndDrop(listItem) {
        listItem.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', listItem.innerHTML);
            listItem.classList.add('dragging');
        });

        listItem.addEventListener('dragend', function () {
            listItem.classList.remove('dragging');
        });
    }

    function setupDropTarget(list) {
        list.addEventListener('dragover', function (event) {
            event.preventDefault(); // Allow dropping
        });

        list.addEventListener('drop', function (event) {
            event.preventDefault();
            const draggedHTML = event.dataTransfer.getData('text/plain');
            const draggedItem = document.createElement('li');
            draggedItem.classList.add('list-group-item');
            draggedItem.setAttribute('draggable', true);
            draggedItem.innerHTML = draggedHTML;

            list.appendChild(draggedItem);
            setupListItemButtons(draggedItem);
            setupDragAndDrop(draggedItem);
        });
    }

    // Setup drop targets for both lists
    setupDropTarget(toBuyList);
    setupDropTarget(boughtList);

    // Initial setup for hardcoded items
    const initialItems = toBuyList.querySelectorAll('.list-group-item');
    initialItems.forEach(item => {
        setupListItemButtons(item);
        setupDragAndDrop(item);
    });
});
