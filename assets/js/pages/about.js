var hearts = document.querySelector(".heart-icon");
for (var i =0;i<hearts.length;i++){
    hearts[i].addEventListener('click',function () {
        hearts.classList.toggle("hidden");
        document.querySelector(".heart-red").classList.toggle("hidden");
    })
}
console.log(hearts)