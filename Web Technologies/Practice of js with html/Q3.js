document.addEventListener("DOMContentLoaded", function(){
    const add_list = document.getElementById("NewFood"); //In html we have added an id to the plus button
    const food_list = document.getElementsById("FoodList");
    const plus_list = document.getElementsById("Plus");

    plus_list.addEventListener("click", function(){
        const food_item = add_list.value;
        if(food_item.trim()!== ""){
            const new_item = document.createElement("li");
            new_item.textContent= food_item;
            food_list.appendChild(new_item);
            add_list.value = "";
        }
    });
});

//<li>banana</li>