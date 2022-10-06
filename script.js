$(".navicon").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("navicon--active");
  $(".toggle").toggleClass("toggle--active");
});

myID = document.getElementById("myID");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 700) {
    myID.className = "prijslijst show";
  } else {
    myID.className = "prijslijst hide";
  }
};

window.addEventListener("scroll", myScrollFunc);
