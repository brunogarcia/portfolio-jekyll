// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Google Fonts
// https://www.google.com/fonts#UsePlace:use
WebFontConfig = {
    google: { families: [ 'Cabin::latin', 'Lobster+Two::latin' ] }
  };
  
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();