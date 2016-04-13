$(document).ready(function(){

$('#start-quiz').click(startQuiz);

function startQuiz(event) {
	event.preventDefault();
	$('.footer-color').css('background-color', '#6798c4');
	$('#section-one').slideDown().css('border-top', '3px solid white');
	$('html, body').animate({
        scrollTop: $("#section-one").offset().top
    }, 1500);
}

$('.one-a').click(oneAWrong);
$('.one-b').click(oneBWrong);
$('.one-c').click(oneCRight);
$('.one-d').click(oneDWrong);

function oneAWrong(event) {
	event.preventDefault();
	$('.one-a').css('background-color', 'rgba(255, 255, 255, 0.3)');
	$('#one-wrong, #one-right').css('display', 'none');
	$('#one-wrong').slideDown();

}
function oneBWrong(event) {
	event.preventDefault();
	$('.one-b').css('background-color', 'rgba(255, 255, 255, 0.3)');
	$('#one-wrong, #one-right').css('display', 'none');
	$('#one-wrong').slideDown();
}

function oneCRight(event) {
	event.preventDefault();
	$('.one-c').css('background-color', 'white');
	$('.one-c').css('box-shadow', '2px 4px 7px black');
	$('#one-wrong, #one-right').css('display', 'none');
	$('#one-right').slideDown("slow", function(){
    	$('#section-two').slideDown();
		$('.footer-color').css('background-color', '#4b85ba')
		$('html, body').animate({
        scrollTop: $('#section-two').offset().top}, 1500);
   			});	 
	
}

function oneDWrong(event) {
	event.preventDefault();
	$('.one-d').css('background-color', 'rgba(255, 255, 255, 0.3)');
	$('#one-wrong, #one-right').css('display', 'none');
	$('#one-wrong').slideDown();
}

$('#two-wrong').click(twoWrong);
$('#two-right').click(twoRight);

function twoWrong(event) {
	event.preventDefault();
	$('#two-wrong span').addClass('display-none');
	$('#two-wrong p').fadeIn('slow');

}

function twoRight(event) {
	event.preventDefault();
	$('#two-right p').fadeIn('slow');
	$('#two-right span').addClass('display-none');
	$('#section-three').slideDown();
		setTimeout(function(){ 
			$('html, body').animate({
	        scrollTop: $("#section-three").offset().top
		    }, 2000);
		    $('.footer-color').css('background-color', '#44739d');
			}, 3000);
}

$('.sm-height').click(threeWrong);
$('.med-height').click(threeRight);
$('.lg-height').click(threeWrong);

function threeWrong(event){
	event.preventDefault();
	$('.three-wrong, .three-right').css('display', 'none');
	$('.three-wrong').fadeIn('slow');
}	

function threeRight(event){
	event.preventDefault();
	$('.three-wrong, .three-right').css('display', 'none');
	$('.three-right').fadeIn('slow');
	$('#section-four').slideDown();
		setTimeout(function(){ 
			$('html, body').animate({
	        scrollTop: $("#section-four").offset().top
		    }, 2000);
		    $('.footer-color').css('background-color', '#3a5f81');
			}, 4000);
}	

$('#four-a').click(fourARight);
$('#four-b').click(fourBWrong);
$('#four-c').click(fourCWrong);
$('#four-d').click(fourDWrong);

function fourARight(event){
	event.preventDefault();
	$('.four-wrong').css('display','none');
	$('.four-right').fadeIn(1000);
	$('.learn-more, .learn-more-icon').fadeIn(3000);

}

function fourBWrong(event){
	event.preventDefault();
	$('.four-right, .four-wrong').css('display','none');
	$('.four-wrong').slideDown();
}

function fourCWrong(event){
	event.preventDefault();
	$('.four-right, .four-wrong').css('display','none');
	$('.four-wrong').slideDown();
}

function fourDWrong(event){
	event.preventDefault();
	$('.four-right, .four-wrong').css('display','none');
	$('.four-wrong').slideDown();
}

$('.learn-more-icon').click(showForm);

function showForm(event) {
	event.preventDefault();
	$('#section-five').slideDown("slow", function(){
    	$('#section-five').slideDown();
		$('footer').removeClass('footer-color').addClass('footer-background')
		$('html, body').animate({
        scrollTop: $('#section-five').offset().top}, 1500);
   			});	 
	// setTimeout(function(){ 
	// 	$('html, body').animate({
	//        scrollTop: $("#section-five").offset().top
	// 	    }, 2000);
	// 	$('footer').removeClass('footer-color').addClass('footer-background');
	// 		}, 1000);
}

// TO DO still
// add event listener and function for 
// 	section four right answer
// add section five dropdown and form actions
// refactor

});
