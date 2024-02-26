 
 // declaration // : 

var ColorBox = document.getElementById("color-box");
var ChangeColorBtns = document.getElementById("change-color-btn");

 
 
 
 // Random Color Generator // :

 function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}




// event listener  button-color changes the color-box element // : 


var ColorBox = document.getElementById("color-box");
var ChangeColorBtns = document.getElementById("change-color-btn");




ChangeColorBtns.addEventListener("click", function(){
    randomBgColor();

})


function randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var ColorBox = 'rgb(' + x + ',' + y + ',' + z + ')';
    console.log(ColorBox);
   document.getElementById("color-box").style.background = ColorBox;
   getElementById("color-box").style.backgroundColor = ColorBox;

} 