$(".box.orange").click(function () {
  $(".group-photos .orange").addClass("visible");
  $(".group-photos .yellow").removeClass("visible");
  $(".group-photos .green").removeClass("visible");
  console.log("hola");
});
$(".box.yellow").click(function () {
  $(".group-photos .yellow").addClass("visible");
  $(".group-photos .green").removeClass("visible");
  $(".group-photos .orange").removeClass("visible");
});
$(".box.green").click(function () {
  $(".group-photos .green").addClass("visible");
  $(".group-photos .yellow").removeClass("visible");
  $(".group-photos .orange").removeClass("visible");
});

function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  var scrollSpeed = 60; // Janky jank <<<<<<<<<<<<<<
  document.documentElement.scrollLeft -= delta * scrollSpeed;
  document.body.scrollLeft -= delta * scrollSpeed;
  e.preventDefault();
}

if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
  // IE 6/7/8
  window.attachEvent("onmousewheel", scrollHorizontally);
}
