// variables
const counter = document.querySelector(".click-counter");
const counterBtn = document.querySelector(".funny-button");
let counterUpdate = 0
let upgrade = "true"

// event listeners
counterBtn.addEventListener('click', function(){
    if(upgrade = "false"){
    counterUpdate++
    counter.innerHTML = "click counter = " + counterUpdate;
    } else if (upgrade = "true"){
    counterUpdate--
    counter.innerHTML = "click counter = " + counterUpdate;
    }
});