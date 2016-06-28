$(document).ready(function(){
    var myFirebaseRef = new Firebase("https://udacity-event-planne.firebaseio.com/");

 

   

   $("#event").keyup(function(){
      if($("#event").val().length < 1 
        ){
        $("#eventAlert").addClass("alert alert-danger");
        $("#eventAlert").html("Event name cannot be blank");
        $("button").prop("disabled", true);
      } else {
        $("#eventAlert").removeClass("alert alert-danger");
        $("#eventAlert").html(" ");
        $("button").prop("disabled", false);
      }
   });

    $("#eventType").keyup(function(){
      if($("#eventType").val().length < 1 
        ){
        $("#eventTypeAlert").addClass("alert alert-danger");
        $("#eventTypeAlert").html("Event Type cannot be blank");
        $("button").prop("disabled", true);
      } else {
        $("#eventTypeAlert").removeClass("alert alert-danger");
        $("#eventTypeAlert").html(" ");
        $("button").prop("disabled", false);
      }
   });

    $("#eventHost").keyup(function(){
      if($("#eventHost").val().length < 1 
        ){
        $("#eventHostAlert").addClass("alert alert-danger");
        $("#eventHostAlert").html("Event Host cannot be blank");
        $("button").prop("disabled", true);
      } else {
        $("#eventHostAlert").removeClass("alert alert-danger");
        $("#eventHostAlert").html(" ");
        $("button").prop("disabled", false);
      }
   });

    $("#startDate").keyup(function(){
      if($("#startTime").val().length < 1 
        ){
        $("#startDateAlert").addClass("alert alert-danger");
        $("#startDateAlert").html("Start date and time cannot be blank");
        $("button").prop("disabled", true);
      } else {
        $("#startDateAlert").removeClass("alert alert-danger");
        $("#startDateAlert").html(" ");
        $("button").prop("disabled", false);
      }
   });

    $("#endDate").keyup(function(){
      if($("#endDate").val().length < 1 || $("#endDate").val() <= $("#startDate").val()
        ){
        $("#endDateAlert").addClass("alert alert-danger");
        $("#endDateAlert").html("Start date and time cannot be blank, and end time cannot be at or before start time.");
        $("button").prop("disabled", true);
      } else {
        $("#endDateAlert").removeClass("alert alert-danger");
        $("#endDateAlert").html(" ");
        $("button").prop("disabled", false);
      }
   });

    $("#guestList").keyup(function(){
      if($("#guestList").val().length < 1 
        ){
        $("#guestListAlert").addClass("alert alert-danger");
        $("#guestListAlert").html("Guest list field cannot be blank");
        $("button").prop("disabled", true);
      } else {
        $("#guestListAlert").removeClass("alert alert-danger");
        $("#guestListAlert").html(" ");
        $("button").prop("disabled", false);
      }
   });

    $("#location").keyup(function(){
      if($("#location").val().length < 1 
        ){
        $("#locationAlert").addClass("alert alert-danger");
        $("#locationAlert").html("Location field cannot be blank");
        $("button").prop("disabled", true);
      } else {
        $("#locationAlert").removeClass("alert alert-danger");
        $("#locationAlert").html(" ");
        $("button").prop("disabled", false);
      }
   });

   //  $("#guestMessage").keyup(function(){
   //    if($("#guestMessage").val().length < 1 
   //      ){
   //      $("#guestMessageAlert").addClass("alert alert-danger");
   //      $("#guestMessageAlert").html("Guest message cannot be blank");
   //      $("button").prop("disabled", true);
   //    } else {
   //      $("#guestMessageAlert").removeClass("alert alert-danger");
   //      $("#guestMessageAlert").html(" ");
   //      $("button").prop("disabled", false);
   //    }
   // });

    // $("input").keyup(function(){
    //     if($("#event").val().length < 1 | 
    //       $("#eventType").val().length  < 1 | 
    //       $("#eventHost").val().length < 1 |
    //       $("#startDate").val().length < 1 |
    //       $("#endDate").val().length < 1 |
    //       $("#guestList").val().length < 1 |
    //       $("#location").val().length < 1 
    //       ){
    //       $("#alert").html("All fields must be filled");
    //       $("button").prop("disabled", true);
    //   } else {
    //     $("#alert").html(" ");
    //     $("button").prop("disabled", false);
    //   }
    // })



    $("#createEventButton").click(function(event){
        event.preventDefault();
        // console.log('hello world');
        var event = $('#event').val();
        var eventType = $('#eventType').val();
        var eventHost = $('#eventHost').val();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var guestList = $('#guestList').val();
        var location = $('#location').val();
        var guestMessage = $('#guestMessage').val();
        console.log(event + eventType + eventHost + startDate + endDate + guestList + location);
      // // Login Users
      
        myFirebaseRef.child("event").push({
          event: event,
          eventType: eventType,
          eventHost: eventHost, 
          startDate: startDate, 
          endDate: endDate, 
          guestList: guestList, 
          location: location, 
          guestMessage: guestMessage
        });

        window.location.href="events.html";


    });
});