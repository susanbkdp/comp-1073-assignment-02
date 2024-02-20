// constants for query selector
var p = document.querySelector("#myStudentId");
var customNumberInput = document.getElementById("customNumber");
var imageSelect = document.getElementById("imageSelect");
var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = customNumberInput.value;
    // validate user input
    if (userInput !== "") {
        p.textContent = "Student ID: " + 1179966;
        document.body.style.backgroundColor = getColorFunction(userInput)
    }
    else {
        alert("Please enter a valid number.");
    }
}

// function to get color based on input
function getColorFunction(input) {
    if (input < 0 || input > 100) {
        return "red";
    }
    else if (input >= 0 && input <= 20) {
        return "green";
    }
    else if (input > 20 && input <= 40) {
        return "blue";
    }
    else if (input > 40 && input <= 60) {
        return "orange";
    }
    else if (input > 60 && input <= 80) {
        return "purple";
    }
    else if (input > 80 && input <= 100) {
        return "yellow";
    }
}

// function to change bg color from random number
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function changeRandomColor(event) {
    // generate a random number between 1 and 100
    var randomNum = random(100);
    // get the color based on the random number
    var color = getColorFunction(randomNum);
    document.body.style.backgroundColor = color;
    // display the generated color and number
    var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.textContent = "Random Number: " + randomNum;
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    for (let i = 0; i < images.length; i++) {
        const option = document.createElement("option");
        option.value = images[i];
        option.text = "Image " + (i + 1);
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    const imageElement = document.getElementById("images");
    if (selectedImage !== "") {
        imageElement.src = "img/" + selectedImage;
        imageElement.alt = "Selected Image";
    } 
    else {
        imageElement.src = "";
        imageElement.alt = "";
    }
}

// event listeners for on click event of buttons and select
document.querySelector(".custColor").addEventListener("click", changeCustomColor);
document.querySelector(".randColor").addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// initialize the select list
addList();