/* --------------------------------------------------------------
"author": "Muhammad Babar Ali",
"repository": {
  "type": "git",
  "url": "git+https://github.com/mbabarali/FA24-vanillaJS-ShoppingListsApp.git"
},
"bugs": {
  "url": "https://github.com/mbabarali/FA24-vanillaJS-ShoppingListsApp.git/issues"
},
--------------------------------------------------------------- */
// ==============================================================
// Start: Application (Mock) State
// ==============================================================
const getNextId = (function () {
  let idCounter = 1; // Start from 1
  return function () {
    return idCounter++;
  };
})();


const INIIAL_SHOPPING_LIST = [
  {
    id: getNextId(),
    title: "Potato peeler",
    status: "seek",
    category: "kitchen",
    trash: false,
    createDate: new Date().toISOString().slice(0, 10),
  },
  {
    id: getNextId(),
    title: "Suger",
    status: "seek",
    category: "grocery",
    trash: false,
    createDate: new Date().toISOString().slice(0, 10),
  },
  {
    id: getNextId(),
    title: "Vitamins",
    status: "seek",
    category: "health",
    trash: false,
    createDate: new Date().toISOString().slice(0, 10),
  },
  {
    id: getNextId(),
    title: "Coffee maker",
    status: "mark",
    category: "electronics",
    trash: false,
    createDate: new Date().toISOString().slice(0, 10),
  },
  {
    id: getNextId(),
    title: "Cutlery set",
    status: "seek",
    category: "kitchen",
    trash: false,
    createDate: new Date().toISOString().slice(0, 10),
  },
  {
    id: getNextId(),
    title: "Water bottle",
    status: "mark",
    category: "health",
    trash: true,
    createDate: new Date().toISOString().slice(0, 10),
  },
];

// console.log("INIIAL_SHOPPING_LIST", INIIAL_SHOPPING_LIST);

// State must be 1) Accessible within all app 2) Singleton
function AppState(initialState) {
  if (this.constructor.prototype.stateInstance) {
    return this.constructor.prototype.stateInstance; // Presumably, static property
  }

  this.constructor.prototype.stateInstance = this; // Public and a singleton state
  console.log("[AppState] this.stateInstance", this.stateInstance);

  const internalState = [...initialState]; // Private state variable
  // this.state = [...internalState]; // Initilization only
  this.getState = function () {
    return [...internalState];
  };

  this.updateState = function (id, updates, isNew = false) {
    let item = {};

    // New Item
    if (isNew) {
      id && (item.id = id);
      item.title = updates?.title ?? "<EMPTY>";
      item.status = updates?.status ?? "seek";
      item.category = updates?.category ?? "grocery";
      item.trash = updates?.trash ?? false;
      item.createDate = new Date().toISOString().slice(0, 10);
      internalState.push(item);
      return;
    }

    // Existing Item
    item = internalState.find((item) => {
      console.log(item);
      return item.id === id;
    });

    if (item) {
      updates.title && (item.title = updates.title);
      updates.status && (item.status = updates.status);
      updates.category && (item.category = updates.category);
      updates.trash && (item.trash = updates.trash);
    } else if (
      !confirm(
        "[WARNING-MISMATCH] Can not find 'item Id' in application state. Continue without updating state or cancel/terminate application?"
      )
    ) {
      throw new Error("[ERROR] Can not find 'id' in application state.");
    }

    console.log("item", item);
    console.log("internalState", internalState);

    return;
  };
}

AppState.prototype.stateInstance = null; // Presumably, static property

/*
const appState = (function (initialState) {
  const internalState = [...initialState];

  return {
    get state() {
      return [...internalState];
    },

    updateState: function (id, updates, isNew = false) {
      let item = {};

      // New Item
      if (isNew) {
        id && (item.id = id);
        item.title = updates?.title ?? "<EMPTY>";
        item.status = updates?.status ?? "seek";
        item.category = updates?.category ?? "grocery";
        item.trash = updates?.trash ?? false;
        item.createDate = new Date().toISOString().slice(0, 10);
        internalState.push(item);
        return;
      }

      // Existing Item
      item = internalState.find((item) => {
        console.log(item);
        return item.id === id;
      });

      item || alert("[MISMATCH] Entry vs. item: Can not update item.");

      updates.title && (item.title = updates.title);
      updates.status && (item.status = updates.status);
      updates.category && (item.category = updates.category);
      updates.trash && (item.trash = updates.trash);

      console.log(item);
      console.log(internalState);

      return;
    },
  };
})(INIIAL_SHOPPING_LIST);
*/

const appState = new AppState(INIIAL_SHOPPING_LIST);
console.log("state", appState.state);

// // Verifying singleton state
// appState.updateState(INIIAL_SHOPPING_LIST[0].id, {
//   trash:
//     INIIAL_SHOPPING_LIST[0].trash == true
//       ? (INIIAL_SHOPPING_LIST[0].trash = false)
//       : (INIIAL_SHOPPING_LIST[0].trash = true),
// });
// const appState2 = new AppState(INIIAL_SHOPPING_LIST); // Singleton State
// console.log("appState2", appState2); // Singleton State

/*
// --------------------------------------------------
function updateState(id, updates, isNew = false) {
  let item = {};

  // New Item
  if (isNew) {
    id && (item.id = id);
    item.title = updates?.title ?? "<EMPTY>";
    item.status = updates?.status ?? "seek";
    item.category = updates?.category ?? "grocery";
    item.trash = updates?.trash ?? false;
    item.createDate = new Date().toISOString().slice(0, 10);
    shoppingListAppState.push(item);
    return;
  }

  // Existing Item
  item = shoppingListAppState.find((item) => {
    console.log(item);
    return item.id === id;
  });

  item || alert("[MISMATCH] Entry vs. item: Can not update item.");

  updates.title && (item.title = updates.title);
  updates.status && (item.status = updates.status);
  updates.category && (item.category = updates.category);
  updates.trash && (item.trash = updates.trash);

  console.log(item);
  console.log(shoppingListAppState);

  return;
}
*/

// --------------------------------------------------
window.addEventListener(
  "error",
  function (e) {
    // e.preventDefault();
    e.stopPropagation();

    let countdown = 10;

    console.log(`%c${e.message}`, "color: red");
    console.log(
      `%c[FATAL] Window closing in ${countdown} seconds`,
      "background-color: red"
    );

    setInterval(() => {
      console.log(countdown);
      if (countdown < 0) window.close();
      countdown--;
    }, 1000);
  },
  true // capture
  // false // bubble
);

// ==============================================================
// Start: Creating category components
// ==============================================================
let bs_bg_postFix = "info";

// --------------------------------------------------
function createCategory(category) {
  console.log("[createCategory]", category);

  // create nodes
  const categoryComponent = document.createElement("article");

  // configure nodes
  bs_bg_postFix = bs_bg_postFix == "primary" ? "info" : "primary"; // Bootrstrap postfix
  categoryComponent.classList = `col-12 text-bg-${bs_bg_postFix}`;
  categoryComponent.id = `${category}-component`;

  // ----------- OPTION 01 -----------
  // categoryComponent.innerHTML = `
  // <h2>${category[0].toUpperCase() + category.slice(1)} List</h2>
  //   <div class="container">
  //     <div class="row">
  //       <ul class="col-6 list-group p-1 mb-1" id="${category}-seek-list">
  //         <!-- Item to seek list here -->
  //       </ul>
  //       <ul class="col-6 list-group p-1 mb-1" id="${category}-mark-list">
  //         <!-- Item to mark list here -->
  //       </ul>
  //     </div>
  // </div>
  // `;

  // ----------- OPTION 02 -----------
  const heading = document.createElement("h2");
  const container = document.createElement("div");
  const row = document.createElement("div");
  const listSeek = document.createElement("ul");
  const listMark = document.createElement("ul");

  heading.innerHTML = `${category[0].toUpperCase() + category.slice(1)} List`;
  container.classList = "container";
  row.classList = "row";

  listSeek.classList = "col-6 list-group p-1 mb-1";
  listSeek.id = `${category}-seek-list`;

  listMark.classList = "col-6 list-group p-1 mb-1";
  listMark.id = `${category}-mark-list`;

  // Attach children nodes to parent nodes
  row.append(listSeek, listMark);
  container.append(row);
  categoryComponent.append(heading, container);
  categoryComponent.append(heading, container);

  // Return componenet
  return categoryComponent;
}

// --------------------------------------------------
document
  .getElementById("category-components")
  .append(createCategory("grocery"));
document
  .getElementById("category-components")
  .append(createCategory("electronics"));
document
  .getElementById("category-components")
  .append(createCategory("kitchen"));
document.getElementById("category-components").append(createCategory("health"));

// ==============================================================
// Start: Drag and drop of an Item
// ==============================================================
//let draggedComponent;

function dragStartEventHandler(e) {
  const itemId = e.target.id; // Ensure the ID is correctly fetched
  console.log("[DRAG-START] Item ID:", itemId);

  if (!itemId) {
    console.warn("No item ID found for drag operation");
    return;
  }

  e.dataTransfer.setData("text/plain", itemId); // Store the ID for later use
}


function dragOverEventHandler(e) {
  e.preventDefault(); // Necessary to allow dropping
  console.log("[DRAG-OVER] Over:", e.target.id);
}


function dropEventHandler(e) {
  e.preventDefault(); // Allow the drop
  const itemId = e.dataTransfer.getData("text/plain");
  console.log("[DROP] Item ID:", itemId);

  const draggedItem = document.getElementById(itemId);
  if (!draggedItem) {
    console.warn("Dragged item not found in DOM.");
    return;
  }

  const newStatus = e.currentTarget.id.split("-")[1]; // Get the target status (e.g., "mark", "seek")
  const newCategory = e.currentTarget.id.split("-")[0]; // Get the target category
  console.log("[DROP] New status:", newStatus, "New category:", newCategory);

  // Update the frontend
  draggedItem.remove(); // Remove from current location
  e.currentTarget.appendChild(draggedItem); // Add to new location
  updateItem(draggedItem, newStatus); // Update appearance (button and status)

  // Update the backend
  try {
    fetch(`http://localhost:3000/shoppingList/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus, category: newCategory }),
    })
      .then(() => console.log("Item updated successfully"))
      .catch((error) => console.error("Error updating item:", error));
  } catch (error) {
    console.error("Error during drop handling:", error);
  }
}

function dragEndEventHandler(e) {
  console.log("%c[END-DRAG]", "background-color: black; color:white");
  console.log("%ctarget", "font-weight: bold", e.target);
  console.log("   parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);
  console.log("   parentElement", e.currentTarget.parentElement);
}

function dragEnterEventHandler(e) {
  console.log("%c[ENTER-DRAG]", "background-color: lightgreen");
  console.log("%ctarget", "font-weight: bold", e.target);
  console.log("   parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);
  console.log("   parentElement", e.currentTarget.parentElement);
}

function dragLeaveEventHandler(e) {
  console.log("%c[LEAVE-DRAG]", "background-color: pink");
  console.log("%ctarget", "font-weight: bold", e.target);
  console.log("   parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);
  console.log("   parentElement", e.currentTarget.parentElement);
}

function dragEventHandler(e) {
  console.log("%c[DRAG]", "background-color: crimson");
  console.log("%ctarget", "font-weight: bold", e.target);
  console.log("   parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);
  console.log("   parentElement", e.currentTarget.parentElement);
}

// --------------------------------------------------
// Configure drop acceptance on all "UL" elements
(function configureDropAcceptance() {
  const dropAcceptingElements = document.getElementsByTagName("UL");
  for (let dae of dropAcceptingElements) {
    console.log(dae);

    dae.style = "background-color: black";

    // -- (1) Listening in CAPTURING Phase of event propagation - { capture: true }
    // -- (2) Target Phase of event propagation
    // dae.addEventListener("drop", dropEventHandler, true);
    // dae.addEventListener("dragover", dragOverEventHandler, true);
    // dae.addEventListener("dragstart", dragStartEventHandler, true);
    // dae.addEventListener("dragend", dragEndEventHandler, true);
    // dae.addEventListener("dragenter", dragEnterEventHandler, true);
    // dae.addEventListener("dragleave", dragLeaveEventHandler, true);
    // dae.addEventListener("drop", dropEventHandler, true);

    // -- (2) Target Phase of event propagation
    // -- (3) Listening in BUBBLING Phase of event propagation - { capture: false }
    dae.addEventListener("drop", dropEventHandler);
    dae.addEventListener("dragover", dragOverEventHandler); // [****]
    // dae.addEventListener("dragstart", dragStartEventHandler);
    // dae.addEventListener("dragend", dragEndEventHandler);
    // dae.addEventListener("dragenter", dragEnterEventHandler);
    // dae.addEventListener("dragleave", dragLeaveEventHandler);
    // dae.addEventListener("drop", dropEventHandler);
  }
})();

// --------------------------------------------------
// Test Items
// renderItem(createItem("Suger", "seek"), "seek");
// renderItem(createItem("Salt", "seek"), "seek");
// renderItem(createItem("Pepper", "seek"), "seek");
// renderItem(createItem("Potato", "mark"), "mark");
// renderItem(createItem("Tomato", "mark"), "mark");

// ==============================================================
// Start: Operations on an Item
// ==============================================================
function createItem(title, id, status = "seek") {
  console.log("[createItem]", title, status);

  // Create parent node and children nodes
  const newItem = document.createElement("li");
  const itemTitle = title;
  const shiftBtn = document.createElement("Button");
  const deleteBtn = document.createElement("Button");

  // Configure nodes
  newItem.classList = "list-group-item";
  newItem.setAttribute("draggable", true);
  newItem.setAttribute("id", id);

  // -- (1) Listening in CAPTURING Phase of event propagation - { capture: true }
  // -- (2) Target Phase of event propagation
  // newItem.addEventListener("dragstart", dragStartEventHandler, true);
  // newItem.addEventListener("dragend", dragEndEventHandler, true);
  // newItem.addEventListener("dragenter", dragEnterEventHandler, true);
  // newItem.addEventListener("dragleave", dragLeaveEventHandler, true);
  // newItem.addEventListener("drop", dropEventHandler, true);
  // newItem.addEventListener("dragover", dragOverEventHandler, true);

  // -- (2) Target Phase of event propagation
  // -- (3) Listening in BUBBLING Phase of event propagation - { capture: false }
  newItem.addEventListener("dragstart", dragStartEventHandler);
  // newItem.addEventListener("dragend", dragEndEventHandler);
  // newItem.addEventListener("dragenter", dragEnterEventHandler);
  // newItem.addEventListener("dragleave", dragLeaveEventHandler);
  // newItem.addEventListener("drop", dropEventHandler);
  // newItem.addEventListener("dragover", dragOverEventHandler);

  shiftBtn.addEventListener("click", moveEventHandler);
  deleteBtn.addEventListener("click", moveEventHandler);
  if (status == "mark") {
    shiftBtn.innerHTML = "&#8634;";
    shiftBtn.classList = "mx-1 seek-btn";
    // shiftBtn.addEventListener("click", shiftToSeekEventHandler);
  } else {
    shiftBtn.innerHTML = "&check;";
    shiftBtn.classList = "mx-1 mark-btn";
    // shiftBtn.addEventListener("click", shiftToMarkEventHandler);
  }

  deleteBtn.innerHTML = "&cross;";
  deleteBtn.classList = "mx-1 delete-btn";
  // deleteBtn.addEventListener("click", deleteEventHandler);

  console.log("shiftBtn", shiftBtn, "--> Type:", typeof shiftBtn);
  console.log("deleteBtn", deleteBtn, "--> Type:", typeof deleteBtn);

  // Attach children nodes to parent node
  newItem.append(itemTitle, shiftBtn, deleteBtn);

  // Return item
  return newItem;
}

function renderItem(item, status, category = "grocery") {
  console.log("[renderItem]", category, status, item);

  // Append content
  document.querySelector(`#${category}-${status}-list`).appendChild(item);
}

function updateItem(item, status = "seek") {
  const shiftBtn = item.getElementsByTagName("Button")[0];

  if (status == "mark") {
    shiftBtn.innerHTML = "&#8634;";
    shiftBtn.classList = shiftBtn.classList.value.replace("mark", "seek");
  } else {
    shiftBtn.innerHTML = "&check;";
    shiftBtn.classList = shiftBtn.classList.value.replace("seek", "mark");
  }
}

// ==============================================================
// Start: Creating new (input) components
// ==============================================================
// --------------------------------------------------
function createInputComponent() {
  console.log("[createInputComponent]");

  // create nodes
  const newInputComponent = document.createElement("article");

  // configure nodes
  newInputComponent.classList = "col-12 d-flex";
  newInputComponent.id = "new-component";

  // ----------- OPTION 01 -----------
  // newInputComponent.innerHTML = `
  // <input class="mx-1 my-4 w-75" type="text" />
  //   <select class="w-25 mx-1 my-4 newitem-category" name="category" id="">
  //     <option value="grocery" selected>Grocery</option>
  //     <option value="electronics">Electronics</option>
  //     <option value="kitchen">Kitchen and Crockery</option>
  //     <option value="health">Health and Personal Care</option>
  //     </select>
  //     <button class="mx-1 my-4 w-25">&plus;</button>
  //     <button class="mx-1 my-4 w-25">&check;</button>
  //     `;

  // ----------- OPTION 02 -----------
  const input = document.createElement("input");
  const selection = document.createElement("select");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  const option4 = document.createElement("option");
  const buttonSeek = document.createElement("button");
  const buttonMark = document.createElement("button");

  input.type = "text";

  input.classList = "mx-1 my-4 w-75";
  selection.classList = "w-25 mx-1 my-4 newitem-category";

  option1.value = "grocery";
  option2.value = "electronics";
  option3.value = "kitchen";
  option4.value = "health";

  option1.innerHTML = "Grocery";
  option2.innerHTML = "Electronics";
  option3.innerHTML = "Kitchen and Crockery";
  option4.innerHTML = "Health and Personal Care";

  buttonSeek.classList = "mx-1 my-4 w-25";
  buttonMark.classList = "mx-1 my-4 w-25";

  buttonSeek.innerHTML = "&plus;";
  buttonMark.innerHTML = "&check;";

  // Attach children nodes to parent nodes
  selection.append(option1, option2, option3, option4);
  newInputComponent.append(input, selection, buttonSeek, buttonMark);

  // Return component
  return newInputComponent;
}

// --------------------------------------------------
document.getElementById("new-components").append(createInputComponent());

// ==============================================================
// Start: Register Event Handlers to Get New Item from User
// ==============================================================
console.log("==============================================");
const newComponent = document.getElementById("new-component");
const titleNewItem = newComponent.children[0]; // OR newComponent.getElementsByTagName("input")[0];
const buttonsNewItem = newComponent.getElementsByTagName("button");

// console.log("newComponent", newComponent);
// console.log("titleNewItem", titleNewItem);
// console.log("buttonsNewItem", buttonsNewItem);
// --------------------------------------------------
async function addEventHandler(status, e) {
  if (titleNewItem.value == "") return;

  const newItem = {
    title: titleNewItem.value,
    status,
    category: newComponent.children[1].value,
    trash: false,
    createDate: new Date().toISOString().slice(0, 10),
  };

  const response = await fetch("http://localhost:3000/shoppingList", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  });

  const savedItem = await response.json();
  const renderedItem = createItem(savedItem.title, savedItem.id, status);
  renderItem(renderedItem, status, savedItem.category);

  titleNewItem.value = "";
}


// --------------------------------------------------
buttonsNewItem[0].addEventListener("click", addEventHandler.bind(null, "seek"));
buttonsNewItem[1].addEventListener("click", addEventHandler.bind(null, "mark"));

/*
// --------------------------------------------------
function addToSeekEventHandler(e) {
  console.log("[NEW-ITEM-SEEK]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // Validate content
  if (titleNewItem.value == "") return;

  // Create and render content
  const newItem = createItem(titleNewItem.value, "seek");
  renderItem(newItem, "seek");

  // Reset form-fields
  titleNewItem.value = "";
}

// --------------------------------------------------
function addToMarkEventHandler(e) {
  console.log("[NEW-ITEM-MARK]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // Validate content
  if (titleNewItem.value == "") return;

  // Create and render content
  const newItem = createItem(titleNewItem.value, "mark");
  renderItem(newItem, "mark");

  // Reset form-fields
  titleNewItem.value = "";
}

// --------------------------------------------------
buttonsNewItem[0].addEventListener("click", addToSeekEventHandler);
buttonsNewItem[1].addEventListener("click", addToMarkEventHandler);
*/

// ==============================================================
// Start: Register Event Handlers on Buttons in Items
// ==============================================================
console.log("==============================================");
async function moveEventHandler(e) {
  if (e.target.nodeName !== "BUTTON") return;

  const itemToModify = e.target.parentElement;
  const itemId = itemToModify.id;

  // Check if delete button was clicked
  if (e.target.classList.contains("delete-btn")) {
    try {
      // Remove from frontend
      itemToModify.remove();

      // Remove from backend
      await fetch(`http://localhost:3000/shoppingList/${itemId}`, {
        method: "DELETE",
      });

      console.log(`Item with ID ${itemId} deleted successfully`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    return; // Exit after deleting
  }

  // Handle moving items (mark/seek)
  let newStatus;
  if (e.target.classList.contains("mark-btn")) {
    newStatus = "mark";
  } else if (e.target.classList.contains("seek-btn")) {
    newStatus = "seek";
  } else {
    return;
  }

  // Update frontend
  updateItem(itemToModify, newStatus);
  const destinationId = `${itemToModify.parentElement.id.split("-")[0]}-${newStatus}-list`;
  document.getElementById(destinationId).appendChild(itemToModify);

  // Update backend
  try {
    await fetch(`http://localhost:3000/shoppingList/${itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });
  } catch (error) {
    console.error("Error updating status:", error);
  }
}



/*
function shiftToMarkEventHandler(e) {
  console.log("[ITEM-MARKED]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // Identify item to move
  const itemToMove = e.target.parentElement;

  // Find destination list
  const sourceListIdArray = e.target.parentElement.parentElement.id.split("-");
  const destinationId = sourceListIdArray[0] + "-mark-list";
  const destinationList = document.querySelector(`#${destinationId}`);

  console.log("itemToMove", itemToMove, "--> Type:", typeof itemToMove);
  console.log(
    "sourceListIdArray",
    sourceListIdArray,
    "--> Type:",
    typeof sourceListIdArray
  );

  // Update item
  let shiftBtn = itemToMove.querySelector("Button");
  shiftBtn.removeEventListener("click", shiftToMarkEventHandler);
  shiftBtn.addEventListener("click", shiftToSeekEventHandler);
  shiftBtn.innerHTML = "&#8634;";
  shiftBtn.classList = shiftBtn.classList.value.replace("mark", "seek");

  console.log("shiftBtn", shiftBtn, "--> Type:", typeof shiftBtn);

  // Move item to destination list
  destinationList.appendChild(itemToMove);

  console.log(
    "destinationId",
    destinationId,
    "--> Type:",
    typeof destinationId
  );
  console.log(
    "destinationList",
    destinationList,
    "--> Type:",
    typeof destinationList
  );
}

// --------------------------------------------------
function shiftToSeekEventHandler(e) {
  console.log("[ITEM-RESTORED]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // Identify item to move
  const itemToMove = e.target.parentElement;

  // Find destination list
  const sourceListIdArray = e.target.parentElement.parentElement.id.split("-");
  const destinationId = sourceListIdArray[0] + "-seek-list"; //-+
  const destinationList = document.querySelector(`#${destinationId}`);

  console.log("itemToMove", itemToMove, "--> Type:", typeof itemToMove);
  console.log(
    "sourceListIdArray",
    sourceListIdArray,
    "--> Type:",
    typeof sourceListIdArray
  );

  // Update item
  let shiftBtn = itemToMove.querySelector("Button");
  shiftBtn.removeEventListener("click", shiftToSeekEventHandler); //-+
  shiftBtn.addEventListener("click", shiftToMarkEventHandler); //-+
  shiftBtn.innerHTML = "&check;"; //-+
  shiftBtn.classList = shiftBtn.classList.value.replace("seek", "mark"); //-+

  console.log("shiftBtn", shiftBtn, "--> Type:", typeof shiftBtn);

  // Move item to destination list
  destinationList.appendChild(itemToMove);

  console.log(
    "destinationId",
    destinationId,
    "--> Type:",
    typeof destinationId
  );
  console.log(
    "destinationList",
    destinationList,
    "--> Type:",
    typeof destinationList
  );
}

// --------------------------------------------------
function deleteEventHandler(e) {
  console.log("[ITEM-DELETED]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // // Identify Item to delete
  // const itemToDelete = e.target.parentElement;
  // console.log("itemToDelete", itemToDelete, "--> Type:", typeof itemToDelete);

  // Delete item
  e.target.parentElement.remove();
}
*/

/*
// No fixed LIs, hence the following code snippet is commented.
console.log("==============================================");
const markBtnAll = document.querySelectorAll(".mark-btn");
markBtnAll.forEach((item) => {
  console.log(item);
  // item.onclick = shiftToMarkEventHandler; // Bad Practice
  item.addEventListener("click", shiftToMarkEventHandler);
});

// --------------------------------------------------
const seekBtnAll = document.querySelectorAll(".seek-btn");
seekBtnAll.forEach((item) => {
  console.log(item);
  item.addEventListener("click", shiftToSeekEventHandler);
});

// --------------------------------------------------
const deleteBtnAll = document.querySelectorAll(".delete-btn");
deleteBtnAll.forEach((item) => {
  console.log(item);
  item.addEventListener("click", deleteEventHandler);
});
*/

// ==============================================================
// Start: Event bubbling
// ==============================================================
console.log("==============================================");
// Using IIFE
(function (perform) {
  if (!perform) return;

  function clickEventHandler(e) {
    console.log("%c[LOG-CLICK]", "background-color: tomato");
    console.log("%ctarget", "font-weight: bold", e.target.nodeName); // e.target
    console.log("   parentElement", e.target.parentElement.nodeName); // e.target.parentElement

    console.log(
      "%ccurrentTarget",
      "font-weight: bold",
      e.currentTarget.nodeName
    ); // e.currentTarget
    console.log("   parentElement", e.currentTarget.parentElement.nodeName); // e.currentTarget.parentElement

    e.stopPropagation(); // Stop propagation thru current listenr on node
    // e.stopImmediatePropagation(); // Stop propagation thru all other listenrs on same node (having more liseners to event)
  }

  // --------------------------------------------------
  const categoryComponents =
    document.getElementsByClassName("category-component");

  for (let article of categoryComponents) {
    console.log(article);

    article.addEventListener("click", clickEventHandler, { capture: false }); // false --> execution in event bubbling phase (third phase)
  }

  // --------------------------------------------------
  // Test Items
  renderItem(createItem("Suger", "seek"), "seek");
  renderItem(createItem("Salt", "seek"), "seek");
  renderItem(createItem("Pepper", "seek"), "seek");
  renderItem(createItem("Potato", "mark"), "mark");
  renderItem(createItem("Tomato", "mark"), "mark");

  // --------------------------------------------------
  const listsOfAllCategories = document.getElementsByTagName("UL");

  for (let ul of listsOfAllCategories) {
    console.log(ul);

    ul.style = "background-color: black";
    ul.addEventListener("click", clickEventHandler, { capture: true }); // true --> execution in event capturing phase (first phase)
  }

  // --------------------------------------------------
})(false);

/*
function clickEventHandler(e) {
  console.log("%c[LOG-CLICK]", "background-color: tomato");
  console.log("%ctarget", "font-weight: bold", e.target.nodeName); // e.target
  console.log("   parentElement", e.target.parentElement.nodeName); // e.target.parentElement

  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget.nodeName); // e.currentTarget
  console.log("   parentElement", e.currentTarget.parentElement.nodeName); // e.currentTarget.parentElement

  e.stopPropagation(); // Stop propagation thru current listenr on node
  // e.stopImmediatePropagation(); // Stop propagation thru all other listenrs on same node (having more liseners to event)
}

// --------------------------------------------------
const categoryComponents =
  document.getElementsByClassName("category-component");

for (let article of categoryComponents) {
  console.log(article);

  article.addEventListener("click", clickEventHandler, { capture: false }); // false --> execution in event bubbling phase (third phase)
}

// --------------------------------------------------
// Test Items
renderItem(createItem("Suger", "seek"), "seek");
renderItem(createItem("Salt", "seek"), "seek");
renderItem(createItem("Pepper", "seek"), "seek");
renderItem(createItem("Potato", "mark"), "mark");
renderItem(createItem("Tomato", "mark"), "mark");

// --------------------------------------------------
const listsOfAllCategories = document.getElementsByTagName("UL");

for (let ul of listsOfAllCategories) {
  console.log(ul);

  ul.style = "background-color: black";
  ul.addEventListener("click", clickEventHandler, { capture: true }); // true --> execution in event capturing phase (first phase)
}

// --------------------------------------------------
*/

// ==============================================================
// Start: Render initial (mock) state
// ==============================================================
window.addEventListener("load", async () => {
  try {
    const response = await fetch("http://localhost:3000/shoppingList");
    const items = await response.json();

    items.forEach((itemObj) => {
      if (!itemObj || itemObj.trash) return;

      const item =
        itemObj?.id && createItem(itemObj.title, itemObj.id, itemObj.status);
      item && renderItem(item, itemObj.status, itemObj.category);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

