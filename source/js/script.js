(function($){
  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox') || $(this).parent().is('a')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" data-fancybox=\"gallery\" data-caption="' + alt + '"></a>')
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // reward
  $('#reward-btn').on("click", function(){
    $('#reward-content').slideToggle(500);
    return false;
  });

  var isPC = ($(window).width()>768);
  // toc
  if($('#toc-article').length>0){
    if(isPC) {
      $('#sidebar').prepend($('#toc-article').html());
    }
    $('#toc-article').remove();
  }

  $(window).on("scroll", function(){
    var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
    // go to top
    if (scroll >= 300) {
      $('#totop').addClass("show");
    } else {
      $('#totop').removeClass("show").removeClass("launch");
    }
    //toc fixed
    if(isPC && $('#toc-wrap').length>0){
      var tocWrap = $('#toc-wrap'),
          changeSize = document.getElementById("header").offsetHeight + document.getElementById("sidebar").offsetHeight;
      scroll >= changeSize ? tocWrap.addClass("fixed") : tocWrap.removeClass("fixed");
      if (tocWrap.hasClass("fixed")){
        tocWrap.css("width", $('#sidebar').width());
      }
      var maxHeight;
      if ((document.body) && (document.body.clientHeight)) {
        maxHeight = document.body.clientHeight - 50;
      }
      if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        maxHeight = document.documentElement.clientHeight -50;
      }
      if(maxHeight && tocWrap.height() > maxHeight ) {
        tocWrap.css("height", maxHeight);
        tocWrap.addClass("scroll");
      }
    }
  });
  $('#totop').on("click", function(){
    gotoTop(0.1, 20);
    $(this).addClass("launch");
    return false;
  });
})(jQuery);

function gotoTop(aSpeed, time) {
  aSpeed = aSpeed || 0.1;
  time = time || 10;
  var scroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
  var speeding = 1 + aSpeed;
  window.scrollTo(0, Math.floor(scroll / speeding));
  if (scroll > 0) {
    var run = "gotoTop(" + aSpeed + ", " + time + ")";
    window.setTimeout(run, time);
  }
}
