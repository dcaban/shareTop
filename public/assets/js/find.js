
latLong();
function latLong() {
   $.get("/api/find", function(data) {
     found = data;
     for (var i = 0; i < found.length; i++) {
         var h = "<hr>"
         var name = found[i].model;
         var foundModels = "Model Name: " + found[i].model +h;
         var foundSpeed = "CPU: " + found[i].speed + "G";
         var foundRam = "   | Ram: " + found[i].ram + "G";
         var foundScreen = " | Screen Size: " + found[i].screen_size +" inch"+ h;
         var foundDescription = "Description " + found[i].description;
         var cardTitle = "<div class='col s12 l6'><div class='card search card'><div class='card-image'><img src='/assets/img/handbook.jpeg'><span class='card-title'>" + name + "</span> </div><div class='card-content'><p>"
         var cardContent = foundModels + foundSpeed + foundRam + foundScreen + foundDescription;
         var cardEnd= "</p></div><div class='card-action'><a href='#'>This is a link</a></div></div></div></div>"

         $("#searchresults").append( cardTitle + cardContent + cardEnd +"");
   }
   
   });
 }
 

