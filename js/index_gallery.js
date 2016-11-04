$(function(){
	//Developed using the slider gallery tutorials from the
	//CoDrops website and the JS Fiddle website
	//"http://tympanus.net/codrops/2011/09/20/responsive-image-gallery/"
	//Initialise the variables
	var $potrait = $('.index_images img');
	var $thumbnails = $('.thumbnail_images img');
	//only first image is shown while the rest are hidden
	$potrait.not(':first').hide();
	// image style changes when 'selected' class is applied
	$thumbnails.first().addClass('selected');
	
	//mouse click on a particular thumbnail image displays
	//the same image in the portrait image section
	$thumbnails.click(function(f){
		$thumbnails.removeClass('selected');
		var count = $(this).addClass('selected').index();
		$potrait.hide().eq(count).show();
	});
	
	//adds active class and only shows the first image
	$('.index_images img').first().addClass('active');
	$('.index_images img').hide();    
	$('.active').show();
	
	//Clicking on the next button displays the following image
	$('.next_button').click(function(){
		$('.active').removeClass('active').addClass('oldActive');
		//If the last image from the list is currently active,
		//the slider then again retrieves the first image from the list
		if ( $('.oldActive').is(':last-child')) {
			$('.index_images img').first().addClass('active');
		}
		else{
			$('.oldActive').next().addClass('active');
			}
		$('.oldActive').removeClass('oldActive');
		//no fadeOut and fadeIn time for the portrait images
		$('.index_images img').fadeOut(0);
		$('.active').fadeIn(0);
	 });
	 
	 //Clicking on the previous button displays the preceding image
	$('.prev_button').click(function(){
		$('.active').removeClass('active').addClass('oldActive');
		//If the first image from the list is currently active,
		//the slider then retrieves the last image from the list
		if ( $('.oldActive').is(':first-child')) {
			$('.index_images img').last().addClass('active');
		}
		else{
			$('.oldActive').prev().addClass('active');
			}
		$('.oldActive').removeClass('oldActive');
		//no fadeOut and fadeIn time for the portrait images
		$('.index_images img').fadeOut(0);
		$('.active').fadeIn(0);
	 });	 
	 
});
