$(document).ready(function(){
    var myFirebaseRef = new Firebase("https://udacity-event-planne.firebaseio.com/");

 

   

   // $("#event").keyup(function(){
   //    if($("#event").val().length < 1 
   //      ){
   //      $("#eventAlert").html("Event name cannot be blank");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#eventAlert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });

   //  $("#eventType").keyup(function(){
   //    if($("#eventType").val().length < 1 
   //      ){
   //      $("#eventTypeAlert").html("Event Type cannot be blank");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#eventTypeAlert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });

   //  $("#eventHost").keyup(function(){
   //    if($("#eventHost").val().length < 1 
   //      ){
   //      $("#eventHostAlert").html("Event Host cannot be blank");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#eventHostAlert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });

   //  $("#startTime").keyup(function(){
   //    if($("#startTime").val().length < 1 
   //      ){
   //      $("#startTimeAlert").html("Start time cannot be blank");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#startTimeAlert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });

   //  $("#endTime").keyup(function(){
   //    if($("#endTime").val().length < 1 
   //      ){
   //      $("#endTimeAlert").html("Start time cannot be blank");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#endTimeAlert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });

   //  $("#guestList").keyup(function(){
   //    if($("#guestList").val().length < 1 
   //      ){
   //      $("#guestListAlert").html("Start time cannot be blank");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#guestListAlert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });

    $("input").keyup(function(){
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
    })



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