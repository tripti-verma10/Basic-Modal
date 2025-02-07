// Get Modal Element
var Modal = document.getElementById('simplemodal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    Modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    Modal.style.display = 'none';
}

// Function to close modal if clicked outside
function outsideClick(e) {
    if (e.target == Modal) {
        Modal.style.display = 'none';
    }
}
