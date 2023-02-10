function myFunction() {
  var x = document.getElementById("mySticky");
  if (x.className === "sticky") {
    x.className += " responsive";
  } else {
    x.className = "sticky";
  }
}