$(document).ready(function(){

	var myFirebaseRef = new Firebase("https://udacity-event-planne.firebaseio.com/");

    $("#registerButton").click(function(){
    	event.preventDefault();
        console.log('hello world');
        var name = $('#name').val();
        var pwd = $('#pwd').val();
        var email = $('#email').val();
        console.log(name + email + pwd);
		// Create Users
    	myFirebaseRef.createUser({
		  email    : email,
		  password : pwd
		}, function(error, userData) {
		  if (error) {
		    console.log("Error creating user:", error);

		    $("#alert").html("Error creating user:" + error);
	
		  } else {
		    console.log("Successfully created user account with uid:", userData.uid);

		   	myFirebaseRef.child("users").push({
	              name: name,
	              password: pwd,
	              email: email
	        });

	        alert("Successfully created user account with uid:" + userData.uid);

	        window.location.href="index.html";


		  }

	});

    });
});