$(document).ready(function(){
  fly();
  var score = 0;
$('.butterfly').click( function() {
  var newScore = score + 1;
  score = newScore;
  console.log(score);
  $('.score').html(score);
});

});

function move(){

  var h = $(window).height()- $(".butterfly").height();
  var w = $(window).width() - $(".butterfly").height();

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  console.log(h,w);
  console.log(nh,nw);
  $(".butterfly").css('left',nw );
  $(".butterfly").css('top',nh);
}

function fly(){
  setInterval ("move()",1000);
}
