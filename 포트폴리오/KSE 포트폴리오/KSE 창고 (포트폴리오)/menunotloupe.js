$(function(){
  $(".menu-icon").click(function(){
    $(".menu").addClass("menu-jq");
  });

  $(".close").click(function(){
    $(".menu").removeClass("menu-jq");
  });

  $(".menu a").eq(0).hover(function(){
    $(".img-box").removeClass("img-box-bg1");
    $(".img-box").removeClass("img-box-bg2");
    $(".img-box").removeClass("img-box-bg3");
    $(".img-box").removeClass("img-box-bg4");
    $(".img-box").removeClass("img-box-bg5");
  });

  $(".menu a").eq(1).hover(function(){
    $(".img-box").removeClass("img-box-bg2");
    $(".img-box").removeClass("img-box-bg3");
    $(".img-box").removeClass("img-box-bg4");
    $(".img-box").removeClass("img-box-bg5");
    $(".img-box").addClass("img-box-bg1");
  });

  $(".menu a").eq(2).hover(function(){
    $(".img-box").removeClass("img-box-bg1");
    $(".img-box").removeClass("img-box-bg3");
    $(".img-box").removeClass("img-box-bg4");
    $(".img-box").removeClass("img-box-bg5");
    $(".img-box").addClass("img-box-bg2");
  });

  $(".menu a").eq(3).hover(function(){
    $(".img-box").removeClass("img-box-bg1");
    $(".img-box").removeClass("img-box-bg2");
    $(".img-box").removeClass("img-box-bg4");
    $(".img-box").removeClass("img-box-bg5");
    $(".img-box").addClass("img-box-bg3");
  });

  $(".menu a").eq(4).hover(function(){
    $(".img-box").removeClass("img-box-bg1");
    $(".img-box").removeClass("img-box-bg2");
    $(".img-box").removeClass("img-box-bg3");
    $(".img-box").removeClass("img-box-bg5");
    $(".img-box").addClass("img-box-bg4");
  });

  $(".menu a").eq(5).hover(function(){
    $(".img-box").removeClass("img-box-bg1");
    $(".img-box").removeClass("img-box-bg2");
    $(".img-box").removeClass("img-box-bg3");
    $(".img-box").removeClass("img-box-bg4");
    $(".img-box").addClass("img-box-bg5");
  });

  $(".color1").eq(0).click(function(){
    $(".menu").css("background-color" , "#1F85DE");
  });
  $(".color1").eq(1).click(function(){
    $(".menu").css("background-color" , "rgb(141,182,202)");
  });
  $(".color1").eq(2).click(function(){
    $(".menu").css("background-color" , "rgb(200,000,096)");
  });
  $(".color1").eq(3).click(function(){
    $(".menu").css("background-color" , "rgb(173,160,165)");
  });
  $(".color1").eq(4).click(function(){
    $(".menu").css("background-color" , "#456173");
  });
});
