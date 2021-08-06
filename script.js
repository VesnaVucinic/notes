let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementsById("check-ikon");
let xIcon = document.getElementsById("x-icon");
let i = 0;

xIcon.addEventListener("click", function() {
    typeNote()
})

checkIcon.addEventListener("click", function() {
    createNote();
})

