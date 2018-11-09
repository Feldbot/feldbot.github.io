// Shrinkable nav menu
window.onscroll = ( () => { scrollFunction() });

// see Notes 1)
function scrollFunction() {
  if ($('body')[0].scrollTop > 80 ||
      $('html')[0].scrollTop > 80) {
    $("nav")[0].style.padding = "30px 10px";
    $(".site-id")[0].style.fontSize = "25px";
  } else {
    $("nav")[0].style.padding = "80px 10px";
    $(".site-id")[0].style.fontSize = "35px";
  }
}

/***** Notes *****
1) jQuery returns a wrapped array-like object, which includes all the jQuery methods. To manipulate the raw DOM element's native properties (like those here), it requires accessing the jQuery wrapped object with array-like notation `[0]` (or jQuery's .get(0) method). Similarly, $('nav')[0].text('wrong!') will not work since it's trying to call a jQuery method on a native DOM element, but $('nav').text('right!') will work.
Reference: https://learn.jquery.com/using-jquery-core/jquery-object/
Navbar shrink scroll code modified from:
https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
2)
*/
