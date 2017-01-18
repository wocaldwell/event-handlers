// Clicking on sections
document.addEventListener('click', clickOutput, true);


function clickOutput(element) {
    clickedElement = window.event.target.innerText;
    console.log(clickedElement);
    document.getElementById("output-target").innerHTML = "You clicked on the " + clickedElement + " section";
}