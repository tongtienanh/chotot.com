var openModal=document.querySelector(".select")
var modalOverlay = document.querySelector(".modal-overlay")
openModal.addEventListener('click',function () {
    document.querySelector(".modal").style.display="block";
})
console.log(modalOverlay)
window.onclick = function(event) {
    if (event.target == modalOverlay) {
        modal.style.display = "none";
    }}