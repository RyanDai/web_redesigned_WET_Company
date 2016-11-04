var errorString; //Initialise the variable
//Validates the form to print appropriate error messages
function validateForm(){
	errorString = "";
	var error = document.getElementById('quoteErrors');
	
	var fName = document.getElementById("quote_fname");
	isEmpty(fName, "Enter your first name.");
	
	var lName = document.getElementById("quote_lname");
	isEmpty(lName, "Enter your last name.");
	
	var quotePhone = document.getElementById("quote_phone");
	isEmpty(quotePhone, "Enter your phone number.");
	numbersOnly(quotePhone, "Only numbers are allowed.");
	
	var quoteEmail = document.getElementById("quote_email");
	isEmpty(quoteEmail, "Enter your email address.");
	checkEmail(quoteEmail, "Email must be in correct format: email @ email.com");
	
	var rsaddr = document.getElementById("quote_address");
	isEmpty(rsaddr, "Enter you postal address.");
	
	var postcode = document.getElementById("quoteCode");
	isEmpty(postcode, "Enter the postcode of your suburb.");
	onlyFourNumbers(postcode, "Postcode must be 4 digits long.");
	numbersOnly(postcode, "Sorry ! The postcode must only contain numbers.");
	
	var service = document.getElementById("service_interested");
	isEmpty(service, "Please enter the service you are interested in.");
	
	var period = document.getElementById("service_period");
	isEmpty(period, "Enter the time you opt to use this service for.");
	
	//When error message string is not empty, DOM scripting 
	//is used to display the error messages and return false
	//implying an incomplete form.
	if (errorString != ""){
		error.innerHTML = 'Errors - please correct and resubmit:' + '<br></br>'+ errorString;
		return false;
	}
	//When error message string is empty, no message is displayed 
	//and the form is successfully submitted.
	else{
		error.innerHTML = "";
		alert('Thanks ! Your form has been submitted. A confirmation Email has been sent to your account.');
		return true;
	}
}

//Checks if the input value of the form field is empty and 
//displays the error message, else nothing happens.
function isEmpty(element, helperMsg){
	if (element.value == ""){
		errorString += '<li>' + helperMsg +'<p>' + "\n";
		element.style.backgroundColor="#FFCCCC";
	}
	else{
		element.style.backgroundColor="#ADEBAD";
	}
}

//Checks if the phone number in the phone field consists of
//only numbers. If not, an error message is displayed, or 
// nothing is displayed.
function numbersOnly(element, helperMsg){
	//Form validation for only numbers is done using the regular  
	// expression tutorial from the W3 Resource website 
	//"http://www.w3resource.com/javascript/form/all-numbers.php"
	var num = /^[0-9]+$/;
	if (!(element.value.match(num))) {
		errorString += '<li>' + helperMsg +'<p>' + "\n";
		element.style.backgroundColor="#FFCCCC";
	}
	else{
		element.style.backgroundColor="#ADEBAD";
	}
}

//Checks if the email entered in the email field is in the
//given format. If not, an error message is displayed, or 
// nothing happens.
function checkEmail(element, helperMsg){
	//Form validation for only numbers is done using the regular  
	// expression tutorial from the W3 Resource website 
	//"http://www.w3resource.com/javascript/form/all-numbers.php"
	var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!(element.value.match(format))) {
		errorString += '<li>' + helperMsg +'<p>' + "\n";
		element.style.backgroundColor="#FFCCCC";
	}
	else{
		element.style.backgroundColor="#ADEBAD";
	}
}

//Checks if the length of the input value of the postcode 
//is four characters long. If not, displays the error  
//message, else nothing happens.
function onlyFourNumbers(element, helperMsg){
	if (element.value.length != 4) {
		errorString += '<li>' + helperMsg +'<p>' + "\n";
		element.style.backgroundColor="#FFCCCC";
	}
	else{
		element.style.backgroundColor="#ADEBAD";
	}
}

