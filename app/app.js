$(document).ready(function() {
  var googleKey = 'AIzaSyABcCfggiJ5nGLYYayruB5fWm8-flp1aEY';
  var p = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/ytscreeningroom\?v=|\/feeds\/api\/videos\/|\/user\S*[^\w\-\s]|\S*[^\w\-\s]))([\w\-]{11})[?=&+%\w-]*/gi;

  $('#myfield').bind('input', function() {
    var url = $(this).val();
    if(url.length && url.match(p)) {
      console.log(url);
      var elemenT = document.createElement('div');
      elemenT.innerHTML = url;
      $('#result').prepend(elemenT);
      var x = new EmbedJS({
        element: elemenT,
        googleAuthKey : googleKey,
        videoWidth: 800,
        tweetOptions: {
          hideMedia:true
        },
        codeEmbedHeight:600
      });

       x.render();
       $(this).val('');

     }
  });
});
