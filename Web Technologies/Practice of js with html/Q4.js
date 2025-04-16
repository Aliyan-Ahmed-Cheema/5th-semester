var counterState;
document.addEventListener("DOMContentLoaded", function() {
    counterState = getElementById("Counter");
    const add = getElementById("Plus");
    const subtract = getElementById("Minus");

    add.addEventListener("click", function() {
        counterState.value = counterState.value + 1;
    });
    subtract.addEventListener("click", function() {
        counterState.value = counterState.value - 1;
    });
});