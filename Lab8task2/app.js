
const addItemBtn = document.getElementById('addItem');
const itemNameInput = document.getElementById('itemName');
const categorySelect = document.getElementById('category');

addItemBtn.addEventListener('click', () => {
    const itemName = itemNameInput.value.trim();
    const category = categorySelect.value;

    if (!itemName) {
        alert('Please enter an item name.');
        return;
    }

    const pendingSection = document.getElementById(`${category.toLowerCase()}Pending`);


    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-container');

    itemDiv.innerHTML = `
        <span>${itemName}</span>
        <div>
            <button class="btn btn-success btn-sm complete-btn">✔</button>
            <button class="btn btn-danger btn-sm delete-btn">X</button>
        </div>
    `;

    const completeBtn = itemDiv.querySelector('.complete-btn');
    const deleteBtn = itemDiv.querySelector('.delete-btn');

    completeBtn.addEventListener('click', () => moveToCompleted(itemDiv, category));

    deleteBtn.addEventListener('click', () => itemDiv.remove());


    pendingSection.appendChild(itemDiv);


    itemNameInput.value = '';
});


function moveToCompleted(itemDiv, category) {
    const completedSection = document.getElementById(`${category.toLowerCase()}Completed`);


    itemDiv.querySelector('.complete-btn').remove(); // Remove the check button

   
    const undoBtn = document.createElement('button');
    undoBtn.classList.add('btn', 'btn-warning', 'btn-sm', 'undo-btn');
    undoBtn.textContent = '↩';

    undoBtn.addEventListener('click', () => moveToPending(itemDiv, category));


    const buttonContainer = itemDiv.querySelector('div:last-child');
    buttonContainer.appendChild(undoBtn);


    completedSection.appendChild(itemDiv);
}

// Move item back to the "Pending" section
function moveToPending(itemDiv, category) {
    const pendingSection = document.getElementById(`${category.toLowerCase()}Pending`);

    itemDiv.querySelector('.undo-btn').remove();

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('btn', 'btn-success', 'btn-sm', 'complete-btn');
    checkBtn.textContent = '✔';

    checkBtn.addEventListener('click', () => moveToCompleted(itemDiv, category));

    // Replace buttons with Check and Delete
    const buttonContainer = itemDiv.querySelector('div:last-child');
    buttonContainer.prepend(checkBtn);

    pendingSection.appendChild(itemDiv);
}
