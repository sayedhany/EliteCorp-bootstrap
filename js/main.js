$(function () {
  "use strict";

  let winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  console.log(winH, upperH, navH);
  $(".slider , .carousel-item").height(winH - (upperH + navH));
});
