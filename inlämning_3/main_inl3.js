"use strict";

// we are jsut changing the class here.
// uppgift 1

function updateMessageBoxClass(className) {
    const messageBox = document.getElementById("message-box");
    messageBox.className = ''; 
    messageBox.classList.add(className); 
}


// uppgift 2
// that function takes input string from the promt and 
// then it displays it as the list item.
function addListItem(){
    // we  will show a prompt in the display
    const userInput = prompt("Enter a new items");
    
    // it checks if the user input is null or empty
    if(userInput === null || userInput === ''){
        return;
    }
    else{
        // it will create a new list item and append it to
        const newItem = document.createElement('li');
        newItem.textContent = userInput;
        document.getElementById('items').appendChild(newItem);
    }

}




// this function will remove the last item from the list
// uppgift 3
function removeListItem(){
    const items = document.getElementById('items');
    const lastItem = items.lastElementChild;
    if(lastItem !== null){
        items.removeChild(lastItem);
    }
}


// uppgift 4
function removeListByClick() {
    const buttons = document.getElementsByClassName("remove-list-item");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this item?")) {
                this.parentElement.remove();
            }
        });
    }
}

removeListByClick();


// uppgift 5 (del 1 och del 2 tillsammans)
function giveAlert(form) {
    let isValid = true;

    // Access form values
    const firstName = form.elements.firstname.value;
    if (firstName.length === 0 || firstName.length > 50) {
        alert("First name must be between 1 and 50 characters");
        isValid = false;
    }

    const lastName = form.elements.lastname.value;
    if (lastName.length === 0 || lastName.length > 50) {
        alert("Last name must be between 1 and 50 characters");
        isValid = false;
    }

    const age = form.elements.age.value;
    if (isNaN(age) || age <= 0) {
        alert("Age must be a positive number");
        isValid = false;
    }

    const email = form.elements.email.value;
    if (email.length === 0 || email.length > 50) {
        alert("Email must be between 1 and 50 characters");
        isValid = false;
    }

    // Check if a pet type is selected
    const petOptions = form.elements.pet;
    let petSelected = false;
    for (const pet of petOptions) {
        if (pet.checked) {
            petSelected = true;
            break;
        }
    }
    if (!petSelected) {
        alert("Please select a pet");
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        form.submit();
    }
}


