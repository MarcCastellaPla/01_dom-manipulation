// EXERCISE 1: Selecting Elements
// Select the element with the ID 'mainTitle' and log it to the console.

let mainTitle = document.getElementById("mainTitle");
console.log(mainTitle)


// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."

let paragraph = document.getElementsByClassName("paragraph");
paragraphsList[1].innerText = "This paragraph has been changed.";

// EXERCISE 3: Changing CSS Styles
// Change the background color of the element with the ID 'content' to 'lightgreen'.

let content = document.getElementById("content");
content.style.backgroundColor = "lightgreen";

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds

paragraphsList[0].classList.add("highlight");
setTimeout(function () { 
    paragraph[0].classList.remove("highlight");
}, 3000);

 // EXERCISE 5: Creating and Appending Elements
 // Create a new <button> element with the text 'Click Me'.
 // Append this button to the element with the ID 'content'.

 let button = document.createElement("button");
 button.textContent = "Click Me";
 document.getElementById("content").appendChild(button); 

 // EXERCISE 6: Removing Elements
 // Select the element with the ID 'result' and remove it from the DOM.

 let result = document.getElementById("result");
 result.remove();

 // EXERCISE 7: Handling Events
 // Add a 'click' event listener to the button created in Exercise 5.
 // When clicked, the button should alert "Button Clicked!".

 button.addEventListener("click", function () {
    alert("Button clicked!")

 })

 // Exercise 8: Working with Input
 // Add an input event listener to the input field that displays the current input value in the result div.

 let input = document.getElementById("inputField");
 input.addEventListener("input", function () {
    result.innerText = input.value;
})

 // Exercise 9: Toggling Visibility
 // Add a click event listener to the button with ID 'actionButton' that toggles the visibility of the content div.

let actionButton = document.getElementById("actionButton");
actionButton.addEventListener("click", function() {
    content.classList.toggle("hidden");

})

 // Exercise 10: Modifying Attributes
 // Select the input field and change its placeholder text to "Enter your name".

input.placeholder = "Enter your name";
