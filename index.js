//document.querySelectorAll("button")[3].addEventListener("click", handleClick);



// you can use the event listener function in to different ways the top or the button one
//document.querySelectorAll("button").addEventListener("click", function () { 
//         alert("i got clicked by the mouse")} );


var buttonnuber = document.querySelectorAll("button").length;
for (var i = 0; i<buttonnuber; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}

// THIS CODE TO TO LISTEN FOR MOUSE CLICKS ON THE WEBSITE and show which button was clicked
function handleClick() {
    var buttonInnerHTML = this.innerHTML

        makeSound(buttonInnerHTML);
}

// this code after listening to the clicks it plays sound associated to it
// function handleClick() {
//     var buttonInnerHTML = this.innerHTML
//     console.log(this.innerHTML);
    
//     switch (buttonInnerHTML) {
//         case "w":
//             var audio = new Audio("/sounds/crash.mp3");
//             audio.play();
//         break;
        
//         case "a":
//             var audio1 = new Audio("/sounds/kick-bass.mp3");
//             audio1.play();
//         break;

//         case "s":
//             var audio2 = new Audio("/sounds/snare.mp3");
//             audio2.play();
//         break;

//         case "d":
//             var audio3 = new Audio("/sounds/tom-1.mp3");
//             audio3.play();
//         break;

//         case "j":
//             var audio4 = new Audio("/sounds/tom-2.mp3");
//             audio4.play();
//         break;

//         case "k":
//             var audio5 = new Audio("/sounds/tom-3.mp3");
//             audio5.play();
//         break;

//         case "l":
//             var audio6 = new Audio("/sounds/tom-4.mp3");
//             audio6.play();
//         break;

//         default:
//             console.log();
    
//     }
    
    
// }




// THIS CODE IS TO LISTEN TO KEYBOARD PRESSES ON THE WEBSITE

// adding an event listener for keybord presses
document.addEventListener("keypress", function (event){
    makeSound(event.key);
});




function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
        break;
        
        case "a":
            var audio1 = new Audio("/sounds/kick-bass.mp3");
            audio1.play();
        break;

        case "s":
            var audio2 = new Audio("/sounds/snare.mp3");
            audio2.play();
        break;

        case "d":
            var audio3 = new Audio("/sounds/tom-1.mp3");
            audio3.play();
        break;

        case "j":
            var audio4 = new Audio("/sounds/tom-2.mp3");
            audio4.play();
        break;

        case "k":
            var audio5 = new Audio("/sounds/tom-3.mp3");
            audio5.play();
        break;

        case "l":
            var audio6 = new Audio("/sounds/tom-4.mp3");
            audio6.play();
        break;

        default:
            console.log();
    
    }

}

