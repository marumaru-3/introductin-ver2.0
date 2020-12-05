$(function(){
  let pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 2800) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});



$('.animate__animated').waypoint({
  handler(direction) {
    // direction引数には、下方向のスクロールのときは"down"、
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
    
    // 上方向のスクロールのときは"up"が入る。
     /**
       * waypointを削除することで、この要素に対しては
       * これ以降handlerが呼ばれなくなる
       */
      this.destroy();
    }
  },

  // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
  // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
  offset: '50%',
})


$(function() {
  $('.profile-title').on('inview', function(event, isInView) {

    
    if (isInView) {
      // element is now visible in the viewport
      $('#profile').addClass('active');
    } else {
      // element has gone out of viewport
      $('#profile').removeClass('active');
    }
  });
})
$(function() {
  $('.skill-title').on('inview', function(event, isInView) {

    
    if (isInView) {
      // element is now visible in the viewport
      $('#skill').addClass('active');
    } else {
      // element has gone out of viewport
      $('#skill').removeClass('active');
    }
  });
})
$(function() {
  $('.product-title').on('inview', function(event, isInView) {

    
    if (isInView) {
      // element is now visible in the viewport
      $('#product').addClass('active');
    } else {
      // element has gone out of viewport
      $('#product').removeClass('active');
    }
  });
})
$(function() {
  $('.message-title').on('inview', function(event, isInView) {

    
    if (isInView) {
      // element is now visible in the viewport
      $('#message').addClass('active');
    } else {
      // element has gone out of viewport
      $('#message').removeClass('active');
    }
  });
})


$("#profile").click(function () {
      
  const position = $('.profile').offset().top;
  const speed = 500;
  $("html,body").animate({scrollTop:position},speed);

});
$("#skill").click(function () {
      
  const position = $('.skill').offset().top;
  const speed = 500;
  $("html,body").animate({scrollTop:position},speed);

});
$("#product").click(function () {
      
  const position = $('.product').offset().top;
  const speed = 500;
  $("html,body").animate({scrollTop:position},speed);

});
$("#message").click(function () {
      
  const position = $('.message').offset().top;
  const speed = 500;
  $("html,body").animate({scrollTop:position},speed);

});

