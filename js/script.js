document.addEventListener("click", dogBark, false);

function dogBark(event){
        var dog = document.getElementById("mrpickles");

        dog.style.left = event.clientX - (dog.offsetWidth/2) + "px";
        dog.style.top = event.clientY - (dog.offsetHeight/2) + "px";

        var bark = new Audio("resources/zombie.mp3");
        bark.play();
}
