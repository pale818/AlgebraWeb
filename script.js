/*
var x corresponds to the topnav element in teh HTML file
if it was topnam on click it becomes responsive and gain on click it becomes topnav
and so on, this function changes class from topnav to responsive and vice versa
*/
function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}