// ==============================================================
// Start: Application State
// ==============================================================
const getNextId = (function () {
  const min = 1;
  const max = 1001;

  function getRandomNumber() {
    return Math.floor(Math.random() * (max - min)) + min; // min (included) and max (excluded)
  }

  return function () {
    return (
      "kldjfdl" +
      getRandomNumber().toString() +
      "pgtrjgnsnl" +
      getRandomNumber().toString()
    );
  };
})();

const ShoppingListState = [
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

// console.log("ShoppingListsState", ShoppingListState);

ShoppingListState.forEach((itemObj) => {
  const item =
    itemObj?.id && createItem(itemObj.title, itemObj.id, itemObj.status);
  item && renderItem(item, itemObj.status, itemObj.category);
});

// ==============================================================
// Start: Drag an Item
// ==============================================================
// let draggedComponent;

function dragStartEventHandler(e) {
  console.log("%c[START-DRAG]", "background-color: darkgrey");
  console.log("%ctarget", "font-weight: bold", e.target);
  // console.log("parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);

  e.dataTransfer.setData("text/plain", e.target.id);

  /*
  draggedComponent = e.target;
  */
}

function dragEndEventHandler(e) {
  console.log("%c[END-DRAG]", "background-color: black; color:white");
  console.log("%ctarget", "font-weight: bold", e.target);
  // console.log("parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);
}

/*
function dragEnterEventHandler(e) {
  console.log("%c[ENTER-DRAG]", "background-color: lightgreen");
  console.log("%ctarget", "font-weight: bold", e.target);
  // console.log("parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);
}

function dragLeaveEventHandler(e) {
  console.log("%c[LEAVE-DRAG]", "background-color: pink");
  console.log("%ctarget", "font-weight: bold", e.target);
  // console.log("parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);
}
*/

function dropEventHandler(e) {
  console.log("%c[DROP]", "background-color: red");
  console.log("%ctarget", "font-weight: bold", e.target);
  // console.log("parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);

  // // Logging attached data
  // let i = 0;
  // for (let type of e.dataTransfer.types) {
  //   console.log({
  //     type,
  //     kind: e.dataTransfer.items[i].kind,
  //     data: e.dataTransfer.getData(type),
  //   });
  //   i++;
  // }

  console.log(e.dataTransfer.getData("text/plain"));

  // Move dragged item, now
  const draggedComponent = document.getElementById(
    e.dataTransfer.getData("text/plain")
  );

  draggedComponent &&
    updateItem(draggedComponent, e.currentTarget.id.split("-")[1]);

  e.currentTarget.appendChild(draggedComponent); // [Mitigating the impact of event bubbling] Append to "e.currentTarget", INSTEAD OF "e.target"

  updateState(e.dataTransfer.getData("text/plain"), {
    status: e.currentTarget.id.split("-")[1],
    category: e.currentTarget.id.split("-")[0],
  });
  /*
  draggedComponent &&
    updateItem(draggedComponent, e.currentTarget.id.split("-")[1]);

  draggedComponent && e.currentTarget.appendChild(draggedComponent);
  */
}

function dragOverEventHandler(e) {
  console.log("%c[OVER-DRAG]", "background-color: orange");
  console.log("%ctarget", "font-weight: bold", e.target);
  // console.log("parentElement", e.target.parentElement);
  console.log("%ccurrentTarget", "font-weight: bold", e.currentTarget);

  e.preventDefault(); // Prevent default to allow drop: The drop event won't fire without preventing default
  e.stopPropagation(); // [Optional][STOP-EVENT-BUBBLING] Prevent bubbling of 'dragover' event
}

(function configureDropTargets() {
  const dropTargets = document.getElementsByTagName("ul");
  for (dt of dropTargets) {
    console.log(dt);

    /*
    // -- (1) Capturing Phase of event propagation
    dt.addEventListener("dragstart", dragStartEventHandler, true);
    dt.addEventListener("dragend", dragEndEventHandler, true);
    dt.addEventListener("dragenter", dragEnterEventHandler, true);
    dt.addEventListener("dragleave", dragLeaveEventHandler, true);
    dt.addEventListener("drop", dropEventHandler, true);
    dt.addEventListener("dragover", dragOverEventHandler, true);

    // -- (3) Bubbling Phase of event propagation
    dt.addEventListener("dragstart", dragStartEventHandler);
    dt.addEventListener("dragend", dragEndEventHandler);
    dt.addEventListener("dragenter", dragEnterEventHandler);
    dt.addEventListener("dragleave", dragLeaveEventHandler);
    */

    dt.addEventListener("drop", dropEventHandler);
    dt.addEventListener("dragover", dragOverEventHandler);

    dt.style = "background-color: black";
  }
})();

// ==============================================================
// Start: Operations on an Item
// ==============================================================
function createItem(title, id, status = "seek") {
  console.log("[createItem]", title, status);

  // create nodes
  const newItem = document.createElement("li");
  const itemTitle = title;
  const shiftBtn = document.createElement("Button");
  const deleteBtn = document.createElement("Button");

  // configure nodes
  newItem.classList = "list-group-item";
  newItem.setAttribute("draggable", true);
  newItem.setAttribute("id", id);

  // -- (2) Target Phase of event propagation
  newItem.addEventListener("dragstart", dragStartEventHandler);
  newItem.addEventListener("dragend", dragEndEventHandler);
  // newItem.addEventListener("dragenter", dragEnterEventHandler);
  // newItem.addEventListener("dragleave", dragLeaveEventHandler);
  // newItem.addEventListener("drop", dropEventHandler);
  newItem.addEventListener("dragover", dragOverEventHandler);

  if (status == "mark") {
    shiftBtn.innerHTML = "&#8634;";
    shiftBtn.classList = "mx-1 seek-btn";
    shiftBtn.addEventListener("click", shiftEventHandler);
    // shiftBtn.addEventListener("click", shiftToSeekEventHandler);
  } else {
    shiftBtn.innerHTML = "&check;";
    shiftBtn.classList = "mx-1 mark-btn";
    shiftBtn.addEventListener("click", shiftEventHandler);
    // shiftBtn.addEventListener("click", shiftToMarkEventHandler);
  }

  deleteBtn.innerHTML = "&cross;";
  deleteBtn.classList = "mx-1 delete-btn";
  deleteBtn.addEventListener("click", deleteEventHandler);

  console.log("shiftBtn", shiftBtn, "--> Type:", typeof shiftBtn);
  console.log("deleteBtn", deleteBtn, "--> Type:", typeof deleteBtn);

  // attach nodes
  newItem.append(itemTitle, shiftBtn, deleteBtn);

  // return item
  return newItem;
}

function renderItem(item, status, category = "grocery") {
  console.log("[renderItem]", category, status, item);

  // append content
  document.querySelector(`#${category}-${status}-list`).appendChild(item);
}

function updateItem(item, status = "seek") {
  const shiftBtn = item.getElementsByTagName("Button")[0];

  if (status == "mark") {
    // shiftBtn.removeEventListener("click", shiftToMarkEventHandler);
    // shiftBtn.addEventListener("click", shiftToSeekEventHandler);
    shiftBtn.innerHTML = "&#8634;";
    shiftBtn.classList = shiftBtn.classList.value.replace("mark", "seek");
  } else {
    // shiftBtn.removeEventListener("click", shiftToSeekEventHandler);
    // shiftBtn.addEventListener("click", shiftToMarkEventHandler);
    shiftBtn.innerHTML = "&check;";
    shiftBtn.classList = shiftBtn.classList.value.replace("seek", "mark");
  }
}

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
    ShoppingListState.push(item);
    return;
  }

  // Existing Item
  item = ShoppingListState.find((item) => {
    console.log(item);
    return item.id === id;
  });

  item || alert("[MISMATCH] Entry vs. item: Can not update item.");

  updates.title && (item.title = updates.title);
  updates.status && (item.status = updates.status);
  updates.category && (item.category = updates.category);
  updates.trash && (item.trash = updates.trash);

  console.log(item);
  console.log(ShoppingListState);
}

// ==============================================================
// Start: Register Event Handlers to input an Item
// ==============================================================
const newComponent = document.getElementById("new-component");
const titleNewItem = newComponent.getElementsByTagName("input")[0];
const buttonsNewItem = newComponent.getElementsByTagName("button");

console.log("==============================================");
function addEventHandler(status, e) {
  console.log("[NEW-" + status.toUpperCase() + "-ITEM]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // Validate content
  if (titleNewItem.value == "") return;

  // Create and render content
  const newItem = createItem(titleNewItem.value, getNextId(), status);
  renderItem(newItem, status, newComponent.children[1].value);

  updateState(
    newItem.id,
    {
      title: titleNewItem.value,
      status,
      category: newComponent.children[1].value,
      trash: false,
    },
    true
  );

  // Reset form-fields
  titleNewItem.value = "";
}

/*
console.log("-------------------------------------");
function addToSeekEventHandler(e) {
  console.log("[NEW-ITEM-SEEK]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // Validate content
  if (titleNewItem.value == "") return;

  // Create and render content
  const newItem = createItem(titleNewItem.value, "seek");
  renderItem(newItem, "seek", newComponent.children[1].value);

  // Reset form-fields
  titleNewItem.value = "";
}

console.log("-------------------------------------");
function addToMarkEventHandler(e) {
  console.log("[NEW-ITEM-MARK]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  // Validate task
  if (titleNewItem.value == "") return;

  // Create and render item
  const newItem = createItem(titleNewItem.value, "mark");
  renderItem(newItem, "mark", newComponent.children[1].value);

  // Reset form-fields
  titleNewItem.value = "";
}
*/

console.log("==============================================");

buttonsNewItem[0].addEventListener("click", addEventHandler.bind(null, "seek"));
buttonsNewItem[1].addEventListener("click", addEventHandler.bind(null, "mark"));
/*
buttonsNewItem[0].addEventListener("click", addToSeekEventHandler);
buttonsNewItem[1].addEventListener("click", addToMarkEventHandler);
*/

// ==============================================================
// Start: Register Event Handlers on Buttons in Items
// ==============================================================
console.log("==============================================");
function shiftEventHandler(e) {
  console.log("[ITEM-SHIFTED]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  const itemToMove = e.target.parentElement;
  const sourceListIdArray = e.target.parentElement.parentElement.id.split("-");

  console.log("itemToMove", itemToMove, "--> Type:", typeof itemToMove);

  console.log(
    "sourceListIdArray",
    sourceListIdArray,
    "--> Type:",
    typeof sourceListIdArray
  );

  // Find destination list
  const status = e.target.classList.contains("mark-btn") ? "mark" : "seek";
  const destinationId = sourceListIdArray[0] + "-" + status + "-list";
  const destinationList = document.querySelector(`#${destinationId}`);

  // Update item
  let shiftBtn = itemToMove.querySelector("Button");

  if (status == "mark") {
    // shiftBtn.removeEventListener("click", shiftToMarkEventHandler);
    // shiftBtn.addEventListener("click", shiftToSeekEventHandler);
    shiftBtn.innerHTML = "&#8634;";
    shiftBtn.classList = shiftBtn.classList.value.replace("mark", "seek");
  } else {
    // shiftBtn.removeEventListener("click", shiftToSeekEventHandler);
    // shiftBtn.addEventListener("click", shiftToMarkEventHandler);
    shiftBtn.innerHTML = "&check;";
    shiftBtn.classList = shiftBtn.classList.value.replace("seek", "mark");
  }

  console.log("shiftBtn", shiftBtn, "--> Type:", typeof shiftBtn);

  // Move item to destination list
  destinationList.appendChild(itemToMove);

  updateState(itemToMove.id, {
    status,
  });

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

/*
function shiftToMarkEventHandler(e) {
  console.log("[ITEM-MARKED]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  const itemToMove = e.target.parentElement;
  const sourceListIdArray = e.target.parentElement.parentElement.id.split("-");

  console.log("itemToMove", itemToMove, "--> Type:", typeof itemToMove);

  console.log(
    "sourceListIdArray",
    sourceListIdArray,
    "--> Type:",
    typeof sourceListIdArray
  );

  // Find destination list
  const destinationId = sourceListIdArray[0] + "-mark-list";
  const destinationList = document.querySelector(`#${destinationId}`);

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

console.log("-------------------------------------");
function shiftToSeekEventHandler(e) {
  console.log("[ITEM-RESTORED]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  const itemToMove = e.target.parentElement;
  const sourceListIdArray = e.target.parentElement.parentElement.id.split("-");

  console.log("itemToMove", itemToMove, "--> Type:", typeof itemToMove);

  console.log(
    "sourceListIdArray",
    sourceListIdArray,
    "--> Type:",
    typeof sourceListIdArray
  );

  // Find destination list
  const destinationId = sourceListIdArray[0] + "-seek-list"; //-+
  const destinationList = document.querySelector(`#${destinationId}`);

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
*/

console.log("-------------------------------------");
function deleteEventHandler(e) {
  console.log("[ITEM-DELETED]");
  console.log("target", e.target);
  console.log("parentElement", e.target.parentElement);

  const itemToDelete = e.target.parentElement;
  const sourceListIdArray = e.target.parentElement.parentElement.id.split("-");

  console.log("itemToDelete", itemToDelete, "--> Type:", typeof itemToDelete);

  console.log(
    "sourceListIdArray",
    sourceListIdArray,
    "--> Type:",
    typeof sourceListIdArray
  );

  updateState(itemToDelete.id, {
    trash: true,
  });

  e.target.parentElement.remove();
}

// console.log("==============================================");
// const markBtnAll = document.querySelectorAll(".mark-btn");
// markBtnAll.forEach((item) => {
//   console.log(item);
//   // item.onclick = shiftToMarkEventHandler; // Bad Practice
//   item.addEventListener("click", shiftToMarkEventHandler);
// });

// console.log("-------------------------------------");
// const seekBtnAll = document.querySelectorAll(".seek-btn");
// seekBtnAll.forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", shiftToSeekEventHandler);
// });

// console.log("-------------------------------------");
// const deleteBtnAll = document.querySelectorAll(".delete-btn");
// deleteBtnAll.forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", deleteEventHandler);
// });

// ==============================================================
// Start: UI - Show/Hide Lists
// ==============================================================
const Headings1 = document.getElementsByTagName("h1");
const Headings2 = document.getElementsByTagName("h2");

// console.log(Headings1);
// console.log(Headings2);

for (element of Headings1) {
  element.addEventListener(
    "click",
    toggleContentEventHandler.bind(null, "lists")
  );
}

for (element of Headings2) {
  element.addEventListener(
    "click",
    toggleContentEventHandler.bind(null, "immediate")
  );
}

function toggleContentEventHandler(component, e) {
  console.log(e.target);
  console.log(e.target.nextElementSibling);
  console.log(e.target.nextElementSibling.style.display);

  switch (component) {
    case "immediate":
      {
        // Vanilla CSS: Inline style
        e.target.nextElementSibling.style.display == "none"
          ? (e.target.nextElementSibling.style.display = "block")
          : (e.target.nextElementSibling.style.display = "none");

        // // Bootstrap CSS: Inline style
        // e.target.nextElementSibling.classList.contains("d-none")
        //   ? e.target.nextElementSibling.classList.remove("d-none")
        //   : e.target.nextElementSibling.classList.add("d-none");
      }
      break;
    case "lists":
      {
        const elements = e.target.parentElement.querySelectorAll(
          ":scope  article > div"
        );

        // console.log(elements);

        elements.forEach((el) => {
          el.style.display == "none"
            ? (el.style.display = "block")
            : (el.style.display = "none");
        });

        // // Bootstrap CSS: Inline style
        // elements.forEach((el) => {
        //   el.classList.contains("d-none")
        //     ? el.classList.remove("d-none")
        //     : el.classList.add("d-none");
        // });
      }
      break;
  }
}
