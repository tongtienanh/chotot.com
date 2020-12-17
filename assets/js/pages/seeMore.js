var expand = document.querySelector(".expand");
var hidden = document.querySelector(".hidden-text");
var block  =document.querySelector(".description");
console.log(hidden)
expand.addEventListener('click',function () {
    console.log(hidden.style.display);
if (hidden.style.display ==="none"){
    hidden.style.display="block";
    expand.innerHTML="Thu gọn"
    block.style.maxHeight="80em";
}
else {
    hidden.style.display="none";
    expand.innerHTML="Mở rộng";
    block.style.maxHeight="10em";
}
})
