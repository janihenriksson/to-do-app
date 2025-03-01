//const input
//const submit

//function
//let currentValue = input.value 
// input.value = '' to --> to clear the input field
//FUNCTION BODY for adding new
//add list item with text set to currentValue
//add button 
//FUNCTION BODY for removing an item
//delete.listItem

const listItems = document.querySelector("#list-placeholder");
const userInput = document.querySelector("#user-input")
const submit = document.querySelector("#submit")

submit.addEventListener("click", () => {

    let currentValue = userInput.value;
    if (currentValue === '') {
        alert("Cannot add empty item");
        return;
    }
    currentValue.trim();

    userInput.value = '';

    const createListItem = document.createElement("li");
  
    createListItem.textContent = currentValue;
    listItems.appendChild(createListItem);

    const addDeleteButton = document.createElement("button");
    addDeleteButton.setAttribute("class", "remove")
    addDeleteButton.textContent = "Delete"
    createListItem.appendChild(addDeleteButton);

    addDeleteButton.addEventListener("click", () => {
        createListItem.remove();
    });

    userInput.focus();

});