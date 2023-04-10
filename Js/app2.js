console.log("Que se te perdio aqui 🤨")

var cantidad = 0;

$('#cantidad1Form').submit(function(e) {
  e.preventDefault();
  
  var quantity = parseInt($("#cantidad option:selected").val());
  
  cantidad += quantity;
  
  if (cantidad >= 10) {
    $("#cartItems").text("Ya es mucho weeeeeeeeeeeeeeeeeeeeeeeeee XD");
  } else {
    $("#cartItems").text(cantidad);
  }
});
