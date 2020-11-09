
for (i = 0; i < document.querySelectorAll(".drum").length; i++)

    document.querySelectorAll("button")[i].addEventListener("click", handClick);
function handClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
document.addEventListener("keypress", function () {
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio('sounds/drum1.wav');
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio('sounds/drum2.wav');
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio('sounds/drum3.wav');
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio('sounds/drum4.wav');
            audio4.play();
            break;
        case "j":
            var audio3 = new Audio('sounds/drum3.wav');
            audio3.play();
            break;
        case "k":
            var audio1 = new Audio('sounds/drum1.wav');
            audio1.play();
            break;
        case "l":
            var audio4 = new Audio('sounds/drum4.wav');
            audio4.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}