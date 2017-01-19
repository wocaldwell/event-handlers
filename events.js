// Clicking on sections
document.addEventListener('click', clickOutput, true);

function clickOutput(element) {
    clickedElement = window.event.target.innerText;
    // console.log(clickedElement);
    document.getElementById("output-target").innerHTML = "You clicked on the " + clickedElement + " section";
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
document.getElementById("page-title").addEventListener('mouseenter', mouseOverH1);

function mouseOverH1() {
    document.getElementById("output-target").innerHTML = "You moved your mouse over the header";
}

// This is not needed, but I did it before the reading the next task
    // document.getElementById("page-title").addEventListener('mouseout', mouseOutH1);

    // function mouseOutH1() {
    //     document.getElementById("output-target").innerHTML = "";
    // }


// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
document.getElementById("page-title").addEventListener('mouseout', mouseOutH1);

function mouseOutH1() {
    document.getElementById("output-target").innerHTML = "You left me!!";
}

// When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById("keypress-input").addEventListener('keyup', mirror);

function mirror() {
    var keyPressed = document.getElementById("keypress-input").value;
    document.getElementById("output-target").innerHTML = keyPressed;
}

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener('click', addColor);

function addColor() {
    document.getElementById("guinea-pig").style.color = "blue";
}


// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener('click', makeLarge);

function makeLarge() {
    document.getElementById("guinea-pig").style.fontSize = "xx-large";
}

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener('click', addBorder);

function addBorder() {
    document.getElementById("guinea-pig").style.border = "2px solid #666";
}

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener('click', addBorderRadius);

function addBorderRadius() {
    document.getElementById("guinea-pig").style.borderRadius = "10px";
}

// The first section's text should be bold.

// The last section's text should be bold and italicized.

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
