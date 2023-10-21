document.querySelectorAll("button")[3].addEventListener("click", handleClick);

var buttonnuber = document.querySelectorAll("button").length;

// you can use the event listener function in to different ways the top or the button one
//document.querySelectorAll("button").addEventListener("click", function () { 
//         alert("i got clicked by the mouse")} );

for (var i = 0; i<buttonnuber; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}

function handleClick() {
    alert("i got clicked");
}

