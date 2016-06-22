$(document).ready(function(){


   // $("input").keyup(function(){
   //    if($("#name").val().length < 1 | 
   //      $("#email").val().length  < 1 | 
   //      $("#pwd").val().length < 1 
   //      ){
   //      $("#alert").html("All fields must be filled");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#alert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });


      $("#name").keyup(function(){
        if($("#name").val().length < 5){
          $("#nameAlert").html("Name field must have more than 4 characters");
          $("button").prop("disabled", true);
        } else {
          $("#nameAlert").html(" ");
          $("button").prop("disabled", false);
        }
      });

      $("#pwd").keyup(function(){
        if($("#pwd").val().length < 1 ){
          $("#passwordAlert").html("Password field cannot be empty");
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


	var myFirebaseRef = new Firebase("https://udacity-event-planne.firebaseio.com/");

    $("#registerButton").click(function(){
    	event.preventDefault();
        console.log('hello world');
        var name = $('#name').val();
        var pwd = $('#pwd').val();
        var email = $('#email').val();
        var bio = $('#bio').val();
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
	              email: email, 
                biography: bio
	        });

	        alert("Successfully created user account with uid:" + userData.uid);

	        window.location.href="index.html";


		  }

	});

    });
});