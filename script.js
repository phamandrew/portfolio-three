
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


// on scroll, let interval know that scroll has occurred

$(window).scroll(function(event){
	didScroll = true;

	$('.projects').each(function(i){
		var bottomElement = $(this).position().top + $(this).outerHeight();
		var bottomWindow = $(window).scrollTop() + $(window).height();

		if (bottomWindow > bottomElement - 200){
			$(this).animate({'opacity':'1'},1000);
		}
	});
});

// run hasScrolled() and reset didScroll status

setInterval(function(){
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);


function hasScrolled(){
	var scrollTop = $(this).scrollTop();

	if(Math.abs(lastScrollTop - scrollTop) <= delta)
		return;

	if(scrollTop > lastScrollTop && scrollTop > navbarHeight){
		$('header').removeClass('nav-down').addClass('nav-up');
	}
	else{
		if (scrollTop + $(window).height() < $(document).height()){
			$('header').removeClass('nav-up').addClass('nav-down');
		}
	}

	lastScrollTop = scrollTop;
}



	$('.hamburger, .mobile-nav-down i').on('click', function(){
		$('.mobile-nav').toggleClass('nav-up').toggleClass('mobile-nav-down');
		
	});

	$('.mobile-nav ul a').on('click', function(){
		$('.mobile-nav').removeClass('mobile-nav-down').addClass('nav-up');
	});

	$('.nav-close').on('click', function(){
		$('.mobile-nav').removeClass('mobile-nav-down').addClass('nav-up');
	});

	// Smooth Scroll

$(document).ready(function(){

	$('.smooth').on('click', function(e){
		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		}, 1500);

		e.preventDefault();
	});

});





// fade in






