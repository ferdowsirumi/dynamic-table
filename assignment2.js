
var ROW_LIMIT = 15;
var COLUMN_LIMIT = 15;

window.addEventListener('load', drawTable, false);
function redrawTable() {
    ROW_LIMIT = parseInt(prompt("Enter a ROW Size", "0"));
    COLUMN_LIMIT = parseInt(prompt("Enter a COLUMN Size", "0"));
    drawTable();
}

function drawTable() {

    var myTable = "";

    for (var i = 1; i <= ROW_LIMIT; i++) {
        myTable += '<tr>';
        for (var j = 1; j <= COLUMN_LIMIT; j++) {
            myTable += 
            '<td> ' +
                    ' <p>' + i + ", " + j + '</p> ' +
            '</td>';
        }
        myTable += '</tr>'
    }
    
    document.getElementById("myTable").innerHTML = myTable;
}


































/* Hazera Ferdowsi : ID: 301168815 */

// var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex - 1].className += " active";
// }