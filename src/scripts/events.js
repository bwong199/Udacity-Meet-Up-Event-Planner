		$(document).ready(function(){
      var ref = new Firebase("https://udacity-event-planne.firebaseio.com/event");


      ref.once("value", function(snapshot) {
        var data = snapshot.val();

        for (var x in data){
          $("tbody").append(
            "<tr>" + 
              "<td>" + data[x]["event"] + "</td>" + 
              "<td>" + data[x]["eventType"] + "</td>" + 
              "<td>" + data[x]["eventHost"] + "</td>" + 
              "<td>" + data[x]["startTime"] + "</td>" + 
              "<td>" + data[x]["endTime"] + "</td>" + 
              "<td>" + data[x]["guestList"] + "</td>" + 
              "<td>" + data[x]["location"] + "</td>" + 
            "</tr>"
          );
        }


      });
		});
