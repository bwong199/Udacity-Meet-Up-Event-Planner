$(document).ready(function(){

	// var Firebase = require("firebase");
	var myFirebaseRef = new Firebase("https://udacity-event-planne.firebaseio.com/");

    $("#loginButton").click(function(){
		event.preventDefault();
    	event.preventDefault();
        console.log('hello world');
        var name = $('#name').val();
        var pwd = $('#pwd').val();
        var email = $('#email').val();
        console.log(name + email + pwd);
		// Login Users
		
		myFirebaseRef.authWithPassword({
		  email    : email,
		  password : pwd
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		    $("#alert").html("Error creating user:" + error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		    window.location.href="events.html";
		  }
		});

    });
});