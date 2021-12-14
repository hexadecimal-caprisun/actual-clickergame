// variables
const counter = document.querySelector(".click-counter");
const counterBtn = document.querySelector(".funny-button");
let counterUpdate = 0

// event listeners
counterBtn.addEventListener('click', function(){
    counterUpdate++
    counter.innerHTML = "click counter = " + counterUpdate;
});
