// Get the modal
var projectModal = document.getElementById('projectModal');

// Get the button that opens the modal
var btn = document.getElementById("projectModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modalClose")[0];


// When the user clicks the button, open the modal
btn.onclick = function() {
    projectModal.style.display = "block";
}

// When the user clicks on cross icon, close the modal
span.onclick = function() {
    projectModal.style.display = "none";
}
