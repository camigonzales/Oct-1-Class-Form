// JS scripts placed here

const littlebutton = document.getElementById("submit");
console.log(littlebutton);

littlebutton.addEventListener("click", (ev) => {
    ev.preventDefault();
    const body = document.querySelector('body');

})

const element = document.getElementsByTagName("p");
console.log(element);

const x = document.querySelectorAll(".logo");
console.log(x);

const y = document.querySelector(".logo"); //Use this one (most of the time)!!!!
console.log(y);

