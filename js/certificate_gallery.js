var img = new Array(2);
img[0] = new Image();
img[0].src = "images/certificate1.jpg";
img[1] = new Image();
img[1].src = "images/certificate2.jpg"; //change image when number is 1
img[2] = new Image();
img[2].src = "images/certificate3.jpg"; //change image when number is 2


var number = 0;

function goToNextImage()
{
	number++; //increase number by 1 as users click.
	if(number > 3) //if number is bigger than 3
	{
		number = 0; //go back to image 0
	}
	document.getElementById("certificateSlider").src = img[number].src; //image number locates the image
}

function goToPreviousImage()
{
	number--; //decrease number by 1 as users click.
	if(number < 0) //if number is smaller than 0
	{
		number = 3; //go back to image 3
	}
	document.getElementById("certificateSlider").src = img[number].src; //image number locates the image
}
