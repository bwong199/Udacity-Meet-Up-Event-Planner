$(document).ready(function(){var t=new Firebase("https://udacity-event-planne.firebaseio.com/event");t.once("value",function(t){var e=t.val();for(var d in e)$("tbody").append("<tr><td>"+e[d].event+"</td><td>"+e[d].eventType+"</td><td>"+e[d].eventHost+"</td><td>"+e[d].startTime+"</td><td>"+e[d].endTime+"</td><td>"+e[d].guestList+"</td><td>"+e[d].location+"</td></tr>")})});