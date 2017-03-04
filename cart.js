
var proj4_data; var cartArray; var toWrite; var sku;
$(document).ready( function() {
    var cart = new shopping_cart("jadrn041");
        proj4_data = new Array();
    $.get('/perl/jadrn041/proj4/get_products.cgi', storeData);

    $('#addButton').on('click', function() {
        cart.add($('#sku').val(), $('#qty').val());
        updateDisplay();
        });
  
    $("#cart").on("click", ".delete-item", function(event){
                var name = $(this).attr("data-name");
                cart.delete(name);
                updateDisplay();
            });
	$("#cart").on("click", ".subtract-item", function(event){
                var name = $(this).attr("data-name");
                cart.minus(name);
                updateDisplay();
            });

    $("#cart").on("click", ".plus-item", function(event){
                var name = $(this).attr("data-name");
				var price = $(this).attr("data-price");
                cart.add(name, 1,price);
                updateDisplay();
            });
             
               
    function updateDisplay() {
        var cartArray = cart.getCartArray();
        var toWrite = "<table>";
        toWrite += "<tr><th>SKU</th><th>Quantity</th><th>Price</th></tr>";
        for(var i=0; i < cartArray.length; i++) {
            toWrite += "<tr>";
            toWrite += "<td>"+cartArray[i][0]+"</td>";
            toWrite += "<td>"+cartArray[i][1]+"</td>";
			toWrite += "<td>"+cartArray[i][2]+"</td>";
			sku = cartArray[i][0];
			
			toWrite += "<td><button class='delete-item' data-name='"+cartArray[i][0]+"'>x</button></td>";
			var subt = cartArray[i][1] * cartArray[i][2];
			var subtotal = subt.toFixed(2);
            toWrite += "<td>" + subtotal + "</td></tr>";
            }
        toWrite += "</table><br/>";
		toWrite += "<b>Sub-Total:</b> $";
		var totalCost = 0;
        for(var i=0; i < cartArray.length; i++){
            totalCost += cartArray[i][1] * cartArray[i][2];
        }
        var total = totalCost.toFixed(2);
		toWrite += total;
		toWrite += "<br/> <b>Shipping:</b> $2.00:";
		toWrite += "<br/><b>Tax:</b> $" + 0.08*total ;
		var tax = 0.08*total;
		var total1 = +2.00 + +total + +tax;
		//var final1 = total1.toFixed(2);
		toWrite += "<br/><b>Total:</b> $" +total1 ;
		document.cookie= "total=" +total1;
		toWrite += "<br/><a href='checkout.html' id='order_button'>Proceed to Checkout </a>";
        $('#cart').html(toWrite);     
        } 
        
    $( "#dialog-modal" ).dialog({
            height: 350,
            width: 500,
            modal: true,
            autoOpen: false
    });
    
    $('#order_button').on('click', function($e) {       
            $("#dialog-modal").dialog('open');
            });                 
    });
