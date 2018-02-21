$(window).scroll(function(){
var st =$(this).scrollTop();
 $(".zz img").css({
"transform":"translate(0%, "+  st + "%"

 });
});
