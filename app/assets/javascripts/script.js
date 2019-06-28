$(document).ready(function() { //navbar after scroll
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
$(document).ready(function(){ //our services images
		$(".card-1").mouseenter(function() {
				$(".card1").hide();
				$(".card1-hover").show();
				$(this).css("cursor","pointer");
		});		
		$(".card-1").mouseleave(function() {
				$(".card1").show();
				$(".card1-hover").hide();

		});
		$(".card-2").mouseenter(function() {
				$(".card2").hide();
				$(".card2-hover").show();
				$(this).css("cursor","pointer");
		});		
		$(".card-2").mouseleave(function() {
				$(".card2").show();
				$(".card2-hover").hide();

		});
		$(".card-3").mouseenter(function() {
				$(".card3").hide();
				$(".card3-hover").show();
				$(this).css("cursor","pointer");
		});		
		$(".card-3").mouseleave(function() {
				$(".card3").show();
				$(".card3-hover").hide();

		});
		$(".card-4").mouseenter(function() {
				$(".card4").hide();
				$(".card4-hover").show();
				$(this).css("cursor","pointer");
		});		
		$(".card-4").mouseleave(function() {
				$(".card4").show();
				$(".card4-hover").hide();
		});
});
$(document).ready(function() { //logo change
    $(document).scroll(function () {
        if ($(this).scrollTop() > 30) { 
            $('.logo').attr('src','/assets/logo.png');
        }
        if ($(this).scrollTop() < 30) { 
            $('.logo').attr('src','/assets/logo-white.png');
        }
    });
});
$(document).ready(function() { //when mouse enter on navbar
	$('.navbar-fixed-top').mouseenter(function()	{
		$(this).addClass('scrolled');
		$('.logo').attr('src','/assets/logo.png');
	});
	$('.navbar-fixed-top').mouseleave(function()	{
		$(this).removeClass('scrolled');
		$('.logo').attr('src','/assets/logo-white.png');
	});

});
