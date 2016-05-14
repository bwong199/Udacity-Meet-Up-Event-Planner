$(document).ready(function(){

  $("#pwd").keyup(function(){
    if($("#pwd").val().length < 7 ){
      $("#passwordAlert").html("Password field must have more than 8 characters");
      $("button").prop("disabled", true);
    } else {
      $("#passwordAlert").html(" ");
      $("button").prop("disabled", false);
    }
  })


  function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
      return true;
    }
    else {
      return false;
    }
  }

  $("#email").keyup(function(){
    if(!validateEmail($('#email').val()) || $("#email").val().length < 9   ){
      $("#emailAlert").html("Email is not valid and/or is less than 8 characters");
      $("button").prop("disabled", true);
    } else {
      $("#emailAlert").html(" ");
      $("button").prop("disabled", false);
    }
  })
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