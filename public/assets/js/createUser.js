
function submitCustomer() {
    event.preventDefault();
    
    var newCustomer = {
      first_name: $("first_name").val(),
      last_name: $("last_name").val(),
      address: $("address").val(),
    //   address2: $("INPUTID").val(),
      city: $("city").val(),
    //   state: $("INPUTID").val(),
      postal_code: $("zip").val(),
    //   phone: $("NPUTID").val(),
      // ***These two are using Sequelize
      create_date: $("INPUTID").val(),
      last_update: $("INPUTID").val()   
    }
  
    console.log(newCustomer);
  
    $.post("/api/customer/", newCustomer, function () {
      console.log('New customer logged to db!');
    })
};
module.exports = createUser;