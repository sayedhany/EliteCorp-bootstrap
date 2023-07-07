$(function () {
  "use strict";

  let winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  console.log(winH, upperH, navH);
  $(".slider , .carousel-item").height(winH - (upperH + navH));
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-imgs .col-sm").css("opacity", 1);
      console.log(this);
    } else {
      console.log(this);
      $(".shuffle-imgs .col-sm").css("opacity", "0.08");
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
});
