$(function() {
  $(".contact input").eq(0).focus(function() {
    $(".contact span").eq(0).css("transform", "translateY(0)").css("transition", ".7s").css("color", "tomato")
  }), $(".contact input").eq(1).focus(function() {
    $(".contact span").eq(1).css("transform", "translateY(0)").css("transition", ".7s").css("color", "tomato")
  }), $(".contact input").eq(2).focus(function() {
    $(".contact span").eq(2).css("transform", "translateY(0)").css("transition", ".7s").css("color", "tomato")
  }), $(".contact input").eq(3).focus(function() {
    $(".contact span").eq(3).css("transform", "translateY(0)").css("transition", ".7s").css("color", "tomato")
  })
});
