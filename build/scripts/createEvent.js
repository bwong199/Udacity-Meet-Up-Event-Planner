$(document).ready(function(){var e=new Firebase("https://udacity-event-planne.firebaseio.com/");$("input").focusout(function(){$("#event").val().length<1|$("#eventType").val().length<1|$("#eventHost").val().length<1|$("#startTime").val().length<1|$("#endTime").val().length<1|$("#guestList").val().length<1|$("#location").val().length<1?($("#alert").html("All fields must be filled"),$("button").prop("disabled",!0)):($("#alert").html(" "),$("button").prop("disabled",!1))}),$("#createEventButton").click(function(t){t.preventDefault();var t=$("#event").val(),n=$("#eventType").val(),l=$("#eventHost").val(),a=$("#startTime").val(),v=$("#endTime").val(),i=$("#guestList").val(),o=$("#location").val();console.log(t+n+l+a+v+i+o),e.child("event").push({event:t,eventType:n,eventHost:l,startTime:a,endTime:v,guestList:i,location:o}),window.location.href="events.html"})});