document.write('\
\
<style>\
a {\
  color: #333333;;\
}\
\
#exampleModal1, #exampleModal2 {\
  min-height: 420px;\
  width: 380px;\
}\
</style>\
\
<div class="top-bar">\
  <div class="row">\
    <a href="index.html"><div class="top-bar-left">\
      <ul class="dropdown menu" data-dropdown-menu>\
        <li class="img"><img style="height:70%" src="img/fft_minimal3_50px.png"></li>\
        <li class="menu-text" style="font-size: 22pt;">Food For Thought</li>\
      </ul>\
    </div></a>\
    <div class="top-bar-right" id="replaceTarget" style="transform: translate(0%,10%);">\
      <!-- <form id="loginForm" action="/handler" method="post"> -->\
        <ul class="menu">\
<!--           <input type="hidden" name="action" value="login" />\
\
          <li><input type="email" placeholder="Email" name="email"></li>\
          <li><input type="password" placeholder="Password" name="password"></li>\
          <li><button type="submit" class="button" value="Login">Login</button></li>\
 -->\
        <li><a class="warning button" data-open="exampleModal1">Sign Up</a></li>\
        <li><button class="warning hollow button" data-open="exampleModal2">Log In</button></li>\
        </ul>\
      <!-- </form> -->\
\
    </div>\
  </div>\
</div>\
\
<body>\
<!-- <p><a data-open="exampleModal1">Click me for a modal</a></p> -->\
  <!-- Modals -->\
\
<div class="reveal modals" id="exampleModal1" data-reveal>\
        <form>\
          <div class="row column log-in-form">\
            <h4 class="text-center">Sign up with you email account</h4>\
            <label>Email\
              <input type="text" placeholder="somebody@example.com">\
            </label>\
            <label>Password\
              <input type="text" placeholder="Password">\
            </label>\
            <label>Confirm Password\
              <input type="text" placeholder="Password">\
            </label>\
            <p><a type="submit" class="button warning expanded">Sign Up</a></p>\
\
            <p class="text-center">Already a member? <a data-open="exampleModal2"><span style="color: #FF9900">Log In</span></a></p>\
          </div>\
        </form>\
<!--         \
  <button class="close-button" data-close aria-label="Close modal" type="button">\
    <span aria-hidden="true">&times;</span>\
  </button> -->\
</div>\
\
<div class="reveal" id="exampleModal2" data-reveal>\
        <form>\
          <div class="row column log-in-form">\
            <h4 class="text-center">Log in with you email account</h4>\
            <label>Email\
              <input type="text" placeholder="somebody@example.com">\
            </label>\
            <label>Password\
              <input type="text" placeholder="Password">\
            </label>\
            <input id="show-password" type="checkbox"><label for="show-password">Show password</label>\
            <p><a type="submit" class="button warning expanded">Log In</a></p>\
            <p class="text-center"><a href="#"><span style="color: #FF6633">Forgot your password?</span></a></p>\
            <p class="text-center">Not a member yet? <a data-open="exampleModal1"><span style="color: #FF9900">Sign Up</span></a></p>   \
          </div>\
        </form>\
<!--         \
  <button class="close-button" data-close aria-label="Close modal" type="button">\
    <span aria-hidden="true">&times;</span>\
  </button> -->\
</div>\
\
  <!-- Scripts \
\
  <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>\
      <script src="http://dhbhdrzi4tiry.cloudfront.net/cdn/sites/foundation.js"></script>-->\
  <!-- \
  <script>\
    $(document).foundation();\
  </script> -->\
\
</body>\
\
');
