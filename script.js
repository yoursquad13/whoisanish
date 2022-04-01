$(".windows-layer > div").draggable({
  containment: "parent"
});

  $(document).keyup(function(e) {
    $(".windows-layer").css('display', 'block')
    $(this).unbind('mouseenter mouseleave');
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $(".grid-layer").stop(true,false).animate({
        opacity: "0"
      }, 300, function() {
        $(".grid-layer").css('display', 'none');
        $(".windows-layer").stop(true,false).animate({
          opacity: "1"
        }, 300, function() {
          $(".gedit-window").draggable("enable");
        });
      });
      $(".background-image .overlay").stop(true,false).animate({
        opacity: "0"
      }, 300);
    }
  });

$(".hot-spot").hover(function() {
  $(".background-image .overlay").stop(true,false).animate({
    opacity: "1"
  }, 300);
  $(".grid-layer").css('display','flex');
  $(".grid-layer").stop(true,false).animate({
    opacity: "1"
  }, 300, function() {
    $(".windows-layer").stop(true,false).animate({
      opacity: "0"
    }, 300, function() {$(".windows-layer").css('display', 'none');});
  });
  $(".gedit-window").draggable("disable")
  /*.stop(true,false).animate({
    zoom: "50%",
    top: "20px",
    right: "20px"
  }, 300, function() {})*/;
});

$(".grid-layer div").hover(function() {
  $(this).append('<div class="entypo-cancel-circled close"></div>');
}, function() {
  $(this).find('.close').remove();
});

/*$(document).ready(function(){
  $("#closeterm").click(function() {
    $("#terminalapp").fadeIn("slow");
  });*/

setInterval(function() {
  $('.windows-layer').scrollTop();
}, 1100);
