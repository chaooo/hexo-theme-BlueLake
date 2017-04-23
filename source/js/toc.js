window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  var changeSize = document.getElementById("header").offsetHeight + document.getElementById("sidebar").offsetHeight;
  var fixedToc = document.getElementById("toc");
  function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
  function addClass(obj, cls) {
    if (!hasClass(obj, cls)) obj.className += " " + cls;
  }
  function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
      var reg = new RegExp('(\\s+|^)' + cls + '(\\s|$)');
      obj.className = obj.className.replace(reg, ' ');
    }
  }
  scrollTop >= changeSize ? addClass(fixedToc, "fixed") : removeClass(fixedToc, "fixed");
  if (hasClass(fixedToc, "fixed")){
    fixedToc.style.width= document.getElementById("sidebar").offsetWidth+ 'px';
  }
  var winHeight;
  if ((document.body) && (document.body.clientHeight)) {
    winHeight = document.body.clientHeight;
  }
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    winHeight = document.documentElement.clientHeight;
  }
  if(fixedToc.offsetHeight > winHeight ) {
    addClass(fixedToc, "scroll");
  }
}
