
latLong();
function latLong() {
   $.get("/api/find", function(data) {
     found = data;
     for (var i = 0; i < found.length; i++) {
         var h = "<hr>"
         var id = found[i].id; 
         var name = found[i].model;
         var foundModels = "Model Name: " + found[i].model +h;
         var foundSpeed = "CPU: " + found[i].speed + "G";
         var foundRam = "   | Ram: " + found[i].ram + "G";
         var foundScreen = " | Screen Size: " + found[i].screen_size +" inch"+ h;
         var foundDescription = found[i].description;
         var cardTitle = "<div class='col s12 l6 xl4'><div class='card searchcard'><div class='card-image'><img src='/assets/img/handbook.jpeg'><span class='card-title'>" + name + "</span> </div><div class='card-content'><p>"
         var cardContent = foundModels + foundSpeed + foundRam + foundScreen + foundDescription;
         var cardEnd= "</p></div><div class='card-action'><button name='requestbutton"+[i+1]+"' class='btn-flat orange-text' id='request"+[i+1]+"' value=' "+id+" '>Request Sharetop</button></div></div></div></div>"

         $("#searchresults").append( cardTitle + cardContent + cardEnd +"");
         console.log(found)
   }
   
   $("#request1").click(function(event) {
    event.preventDefault();
   console.log( "button was clicked" );

     var newRequest = {requestid : $('button[name=requestbutton1]').val()}
    
     
     console.log(newRequest);
     $.post("/api/request", newRequest, function() {
        window.location.href = "/admin";
      });
    });
    $("#request2").click(function(event) {
        event.preventDefault();
       console.log( "button was clicked" );
    
         var newRequest =  $('button[name=requestbutton2]').val();
        
         
         console.log(newRequest);
         $.post("/api/request", newRequest, function() {
            window.location.href = "/admin";
          });
        });
        $("#request3").click(function(event) {
            event.preventDefault();
           console.log( "button was clicked" );
        
             var newRequest =  $('button[name=requestbutton3]').val();
            
             
             console.log(newRequest);
             $.post("/api/request", newRequest, function() {
                window.location.href = "/admin";
              });
            });
            $("#request4").click(function(event) {
                event.preventDefault();
               console.log( "button was clicked" );
            
                 var newRequest =  $('button[name=requestbutton4]').val();
                
                 
                 console.log(newRequest);
                 $.post("/api/request", newRequest, function() {
                    window.location.href = "/admin";
                  });
                });
                $("#request5").click(function(event) {
                    event.preventDefault();
                   console.log( "button was clicked" );
                
                     var newRequest =  $('button[name=requestbutton5]').val();
                    
                     
                     console.log(newRequest);
                     $.post("/api/request", newRequest, function() {
                        window.location.href = "/admin";
                      });
                    });
                    $("#request6").click(function(event) {
                        event.preventDefault();
                       console.log( "button was clicked" );
                    
                         var newRequest =  $('button[name=requestbutton6]').val();
                        
                         
                         console.log(newRequest);
                         $.post("/api/request", newRequest, function() {
                            window.location.href = "/admin";
                          });
                        });
                        $("#request7").click(function(event) {
                            event.preventDefault();
                           console.log( "button was clicked" );
                        
                             var newRequest =  $('button[name=requestbutton7]').val();
                            
                             
                             console.log(newRequest);
                             $.post("/api/request", newRequest, function() {
                                window.location.href = "/admin";
                              });
                            });
                            $("#request8").click(function(event) {
                                event.preventDefault();
                               console.log( "button was clicked" );
                            
                                 var newRequest =  $('button[name=requestbutton8]').val();
                                
                                 
                                 console.log(newRequest);
                                 $.post("/api/request", newRequest, function() {
                                    window.location.href = "/admin";
                                  });
                                });
                                $("#request9").click(function(event) {
                                    event.preventDefault();
                                   console.log( "button was clicked" );
                                
                                     var newRequest =  $('button[name=requestbutton9]').val();
                                    
                                     
                                     console.log(newRequest);
                                     $.post("/api/request", newRequest, function() {
                                        window.location.href = "/admin";
                                      });
                                    });
                                    $("#request10").click(function(event) {
                                        event.preventDefault();
                                       console.log( "button was clicked" );
                                    
                                         var newRequest =  $('button[name=requestbutton10]').val();
                                        
                                         
                                         console.log(newRequest);
                                         $.post("/api/request", newRequest, function() {
                                            window.location.href = "/admin";
                                          });
                                        });
                                        $("#request11").click(function(event) {
                                            event.preventDefault();
                                           console.log( "button was clicked" );
                                        
                                             var newRequest =  $('button[name=requestbutton11]').val();
                                            
                                             
                                             console.log(newRequest);
                                             $.post("/api/request", newRequest, function() {
                                                window.location.href = "/admin";
                                              });
                                            });
                                            $("#request12").click(function(event) {
                                                event.preventDefault();
                                               console.log( "button was clicked" );
                                            
                                                 var newRequest =  $('button[name=requestbutton12]').val();
                                                
                                                 
                                                 console.log(newRequest);
                                                 $.post("/api/request", newRequest, function() {
                                                    window.location.href = "/admin";
                                                  });
                                                });
                                                $("#request13").click(function(event) {
                                                    event.preventDefault();
                                                   console.log( "button was clicked" );
                                                
                                                     var newRequest =  $('button[name=requestbutton13]').val();
                                                    
                                                     
                                                     console.log(newRequest);
                                                     $.post("/api/request", newRequest, function() {
                                                        window.location.href = "/admin";
                                                      });
                                                    });
                                                    $("#request14").click(function(event) {
                                                        event.preventDefault();
                                                       console.log( "button was clicked" );
                                                    
                                                         var newRequest =  $('button[name=requestbutton14]').val();
                                                        
                                                         
                                                         console.log(newRequest);
                                                         $.post("/api/request", newRequest, function() {
                                                            window.location.href = "/admin";
                                                          });
                                                        });
                                                        $("#request15").click(function(event) {
                                                            event.preventDefault();
                                                           console.log( "button was clicked" );
                                                        
                                                             var newRequest =  $('button[name=requestbutton15]').val();
                                                            
                                                             
                                                             console.log(newRequest);
                                                             $.post("/api/request", newRequest, function() {
                                                                window.location.href = "/admin";
                                                              });
                                                            });


 




   });
 }


 