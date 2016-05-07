$(document).ready(function(){
    var myFirebaseRef = new Firebase("https://udacity-event-planne.firebaseio.com/");

   $("input").focusout(function(){
      if($("#event").val().length < 1 | 
        $("#eventType").val().length  < 1 | 
        $("#eventHost").val().length < 1 |
        $("#startTime").val().length < 1 |
        $("#endTime").val().length < 1 |
        $("#guestList").val().length < 1 |
        $("#location").val().length < 1 
        ){
        $("#alert").html("All fields must be filled");
        $("button").prop("disabled", true);
      } else {
        $("#alert").html(" ");
        $("button").prop("disabled", false);
      }


   });

    $("#createEventButton").click(function(event){
        event.preventDefault();
        // console.log('hello world');
        var event = $('#event').val();
        var eventType = $('#eventType').val();
        var eventHost = $('#eventHost').val();
        var startTime = $('#startTime').val();
        var endTime = $('#endTime').val();
        var guestList = $('#guestList').val();
        var location = $('#location').val();
        console.log(event + eventType + eventHost + startTime + endTime + guestList + location);
      // // Login Users
      
        myFirebaseRef.child("event").push({
          event: event,
          eventType: eventType,
          eventHost: eventHost, 
          startTime: startTime, 
          endTime: endTime, 
          guestList: guestList, 
          location: location
        });

        window.location.href="events.html";


    });
});