$("#popup .icon-gallery, #popup .capitulo").click(function(e) {
  e.preventDefault();
  console.log("click");

  $(".popup").css("display", "block");
  $("html").css("overflow", "hidden");
});
$("i.close").click(function() {
  $(".popup").css("display", "none");
  $("html").css("overflow", "inherit");
});
