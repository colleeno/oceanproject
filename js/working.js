function twoRight(event) {
	event.preventDefault();
	$('#two-right p').fadeIn('slow');
	$('#two-right span').addClass('display-none');
	$('#section-three').slideDown();
		setTimeout(function(){ 
			$('.footer-color').css('background-color', '#44739d');
			$('html, body').animate({
	        scrollTop: $("#section-three").offset().top
		    }, 2000)}, 3000);
		setTimeout(function(){ 
			$('.sm-height').animate({height: '+=100px'},6300);
			$('.med-height').animate({height: '+=150px'},6300);
			$('.lg-height').animate({height: '+=200px'},6300)});
}

	$('#circle').circleProgress({
        value: 0.5,
        size: 150,
        fill: {
            gradient: ["red", "orange"]     
        }
        startAngle: -Math.PI / 4 * 3
    });

	$('#circle').circleProgress({
	startAngle: -Math.PI / 2,	
    value: 0.48,
    size: 200,
    fill: {color: '#6798c4'},
    emptyFill: 'rgba(255, 255, 255, .8)',
    thickness: 10
	}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html('48%');
	});


	<img class="percent" id="four-a" src="images/fourpercent.png" />
	<img class="percent" id="four-b" src="images/sixteenpercent.png" />
	<img class="percent" id="four-c" src="images/thirtytwopercent.png" />
	<img class="percent" id="four-d" src="images/fortyeightpercent.png" />

