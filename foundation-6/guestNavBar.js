document.write('\
\
<style>\
a {\
  color: #333333;;\
}\
</style>\
\
<script>\
/* This script here enables the ajax response. Whatever is returned will\
 appear at the id tag specified after target. */\
// prepare the form when the DOM is ready\
$(document).ready(function() {\
  // bind form using ajaxForm\
  $('#loginForm').ajaxForm({\
      // target identifies the element(s) to update with the server response\
      target: '#replaceTarget',\
\
      // success identifies the function to invoke when the server response\
      // has been received; here we apply a fade-in effect to the new content\
      success: function() {\
          $('#replaceTarget').fadeIn('slow');\
          //$('#entryForm').each(function() {\
              //this.reset();\
          //});\
      }\
  });\
});\
</script>\
\
<div class="top-bar">\
  <div class="row">\
    <a href="index.html"><div class="top-bar-left">\
      <ul class="dropdown menu" data-dropdown-menu>\
        <li class="img"><img style="height:70%" src="img/fft_minimal3_50px.png"></li>\
        <li class="menu-text" style="font-size: 22pt;">Food for Thought</li>\
      </ul>\
    </div></a>\
    <div class="top-bar-right" id="replaceTarget" style="transform: translate(0%,10%);">\
      <form id="loginForm" action="/handler" method="post">\
        <ul class="menu">\
          <input type="hidden" name="action" value="loginData" />\
\
          <li><input type="email" placeholder="Email"></li>\
          <li><input type="password" placeholder="Password"></li>\
          <li><input type="submit" class="button" value="Login"></li>\
\
        </ul>\
      </form>\
    </div>\
  </div>\
</div>\
\
');
