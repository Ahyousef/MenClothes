'use strict'

function load(){

    /*var name = prompt("What is your name?");
    var pronoun = prompt("Do you prefer Mr. or Mrs.?");
    
    while (pronoun !== "Mr" && pronoun !== "Mr." && pronoun !== "Mrs" && pronoun !== "Mrs."){
        pronoun = prompt("Please choose either Mr. or Mrs."); }
    alert("Welcome " +pronoun+' '+name)
*/
}   


function color() {
     var favcolor = prompt('Welcome '+name+'. '+"Do you like Red, Yellow or Black more?");

     while (favcolor !== "Black" & favcolor !== "Red" & favcolor !== "Yellow"){
        favcolor = prompt('Please '+name+'. '+"Do you like Red, Yellow or Black more?");
     }
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

function color2() {
    var number = prompt("Choose 3");

    for (var i = 1; i <= number; i++) {
        if (i == 1){
            black();
        }
        else if (i == 2){
            red();
        }
        else if (i == 3){
            yellow();
        }

        console.log(i)
        }
    }

function buttonbuy(param) {
   // console.log(param," params data type is ",typeof(param))
    var times = prompt("How many do you need?");

    for (var i=0; i <=times; i++){
        if (param == 1)
            document.write('<p class="product"><img src="https://cdn11.bigcommerce.com/s-rxzabllq/images/stencil/1280x1280/products/910/18045/Kids-Plain-Poly-Fit-Quick_Dry-Tshirt-red__13799.1567089094.jpg?c=2"></p>');
        else if (param == 2)
            document.write('<p><img src="https://www.joma-sport.com/files/0001/jomabeta987543098359809538245098/web.system/assets/products/20171106171651.100913.331.jpg"></p>');
        else if (param == 3)
            document.write('<p><img src="https://cdn1.brandability.co.za/2017/07/20005817/180g-Barron-T-shirt-khaki.jpg"></p>');
        }       
}

