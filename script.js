'use strict'
function load(){

    var name = prompt("What is your name?");
    var pronoun = prompt("Do you prefer Mr. or Mrs.?");
    
    alert("Welcome " +pronoun+' '+name)
}   

function color() {
     var favcolor = prompt('Welcome '+name+'. '+"Do you like Red or Yellow more?");
    if (favcolor == "red" || favcolor == "Red") {
         document.getElementById("headlogo").style.backgroundColor = "rgb(192, 27, 27)";
    }
    else if (favcolor == "yellow" || favcolor == "Yellow") {
        document.getElementById("headlogo").style.backgroundColor = "rgb(185, 197, 21)";
    }
     else{
         document.getElementById("headlogo").style.backgroundColor = "black";
        }
    }
    
