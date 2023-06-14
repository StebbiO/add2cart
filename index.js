/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
const addBtnEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")

addBtn.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    console.log(inputValue)
})