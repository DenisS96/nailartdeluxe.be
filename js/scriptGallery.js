$(".navicon").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("navicon--active");
  $(".toggle").toggleClass("toggle--active");
});

$(".toggle__menu--item").click(function () {
  $(".navicon").click();
});
myID = document.getElementById("myID");

$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});

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
