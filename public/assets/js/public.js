$( document ).ready(function(){
      
  //materialize javascript
        $('.sidenav').sidenav();
        $('select').select();


        var isLoggedIn = sessionStorage.setItem("isLoggedOn", false);

        $('.timepicker').timepicker({
          default: 'now', // Set default time: 'now', '1:30AM', '16:30'
          fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
          twelvehour: false, // Use AM/PM or 24-hour format
          donetext: 'OK', // text for done-button
          cleartext: 'Clear', // text for clear-button
          canceltext: 'Cancel', // Text for cancel-button
          autoclose: false, // automatic close timepicker
          ampmclickable: true, // make AM PM clickable
          aftershow: function(){} //Function for after opening timepicker
        });

          $('.datepicker').datepicker({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 1, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
          });

          $('.carousel.carousel-slider').carousel({
            fullWidth: true
          });


        setInterval(function(){
        $('.carousel').carousel('next');
        }, 6000);

        //On click on button function that calls post function with signUp form data
          // $(".button").on('click', function (event) {
          //   event.preventDefault();
          // });
        
        //
              
});
       
       //onclick for form button
      
       $("#searchbutton").click(function(event) {
         event.preventDefault();
        console.log( "button was clicked" );
     
          var newSearch = {
            location: $("#where").val().trim(),
            startTime: $("#time1").val().trim(),
            endTime: $("#time2").val().trim(),
            startDate: $("#date1").val().trim(),
            endDate: $("#date2").val().trim()
          };
          
          console.log(newSearch);

          $.post("/api/search", newSearch, function() {
            // window.location.href = "/results";
          });
        });
       //make values object

       //ajax post

      // });
