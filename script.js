$(".navicon").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("navicon--active");
  $(".toggle").toggleClass("toggle--active");
});

$(".toggle__menu--item").click(function () {
  $(".navicon").click();
});
myID = document.getElementById("myID");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 500) {
    myID.className = "prijslijst show";
  } else {
    myID.className = "prijslijst hide";
  }
};

window.addEventListener("scroll", myScrollFunc);
