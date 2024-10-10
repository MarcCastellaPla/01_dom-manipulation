// EXERCISE 1: Selecting Elements
// Select the element with the ID 'mainTitle' and log it to the console.

let mainTitle = document.getElementById("mainTitle");
console.log(mainTitle)


// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let content = document.getElementById("paragraph");

content.innerHTML = "<p>Updated content</p>";

// EXERCISE 3: Changing CSS Styles
// Change the background color of the element with the ID 'content' to 'lightgreen'.

content.style.backgroundColor = "lightgreen";

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds

let list_element = document.getElementById("list");
console.log(list_element)
list_element.classList.add("active");
setTimeout(2000)
list_element.remove()

 // EXERCISE 5: Creating and Appending Elements
 // Create a new <button> element with the text 'Click Me'.
 // Append this button to the element with the ID 'content'.


 // EXERCISE 6: Removing Elements
 // Select the element with the ID 'result' and remove it from the DOM.


 // EXERCISE 7: Handling Events
 // Add a 'click' event listener to the button created in Exercise 5.
 // When clicked, the button should alert "Button Clicked!".


 // Exercise 8: Working with Input
 // Add an input event listener to the input field that displays the current input value in the result div.


 // Exercise 9: Toggling Visibility
 // Add a click event listener to the button with ID 'actionButton' that toggles the visibility of the content div.


 // Exercise 10: Modifying Attributes
 // Select the input field and change its placeholder text to "Enter your name".
