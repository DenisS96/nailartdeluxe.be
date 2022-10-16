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
  if (y >= 600) {
    myID.className = "prijslijst show";
  } else {
    myID.className = "prijslijst hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

var wa_btnSetting = {
  btnColor: "#6b16c0",
  ctaText: "WhatsApp mij",
  cornerRadius: 40,
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20,
  btnPosition: "right",
  whatsAppNumber: "0477595627",
  welcomeMessage: "Hoe kan ik je helpen?",
  zIndex: 999999,
  btnColorScheme: "light",
};
window.onload = () => {
  _waEmbed(wa_btnSetting);
};

var wa_btnSetting = {
  btnColor: "#6b16c0",
  ctaText: "WhatsApp mij",
  cornerRadius: 40,
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20,
  btnPosition: "right",
  whatsAppNumber: "0477595627",
  welcomeMessage: "Hello",
  zIndex: 999999,
  btnColorScheme: "light",
};
