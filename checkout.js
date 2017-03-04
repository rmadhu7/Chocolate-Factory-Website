$(document).ready(function() {
	$('[name="name"]').focus();
	var data = document.cookie;
			var total1= data.substr(6,5);
			
			document.cookie = "total="; 
            $("#total1").val(total1);
	$(':submit').on('click', function() {
		return check();
        });
	
});

function FillBilling(f) {
  if(f.same.checked == true) {
    f.nameBill.value = f.name.value;
    f.streetBill.value = f.street.value;
	f.streetBill1.value = f.street1.value;
	f.cityBill.value = f.city.value;
    f.stateBill.value = f.state.value;
	f.zipcodeBill.value = f.zipcode.value;
	f.contactBill.value = f.contact.value;
  }
 
}


function check()
{
	var name = document.forms["myform"]["name"].value;
	var nameBill = document.forms["myform"]["nameBill"].value;
	var street = document.forms["myform"]["street"].value;
	var streetBill = document.forms["myform"]["streetBill"].value;
	var city = document.forms["myform"]["city"].value;
	var cityBill = document.forms["myform"]["cityBill"].value;
	var state = document.forms["myform"]["state"].value;
	var stateBill = document.forms["myform"]["stateBill"].value;
	var zipcode = document.forms["myform"]["zipcode"].value;
	var zipcodeBill = document.forms["myform"]["zipcodeBill"].value;
	var contact = document.forms["myform"]["contact"].value;
	var contactBill = document.forms["myform"]["contactBill"].value;
	var one = document.forms["myform"]["one"].value;
	var two = document.forms["myform"]["two"].value;
	var three = document.forms["myform"]["three"].value;
	var four = document.forms["myform"]["four"].value;
	var sec = document.forms["myform"]["sec"].value;
	
	if(name == null || name == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the Name field";
                    document.myform.name.focus();
                    return false;          
                }
	if(nameBill == null || nameBill == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the Name field";
                    document.myform.nameBill.focus();
                    return false;          
                }
	if(street == null || street == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the Street field";
                    document.myform.street.focus();
                    return false;          
                }
	if(streetBill == null || streetBill == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the Street field";
                    document.myform.streetBill.focus();
                    return false;          
                }
	if(city == null || city == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the city field";
                    document.myform.city.focus();
                    return false;          
                }
	if(cityBill == null || cityBill == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the city field";
                    document.myform.cityBill.focus();
                    return false;          
                }
if(state == null || state == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the state field";
                    document.myform.state.focus();
                    return false;          
                }
if(stateBill == null || stateBill == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the state field";
                    document.myform.stateBill.focus();
                    return false;          
                }
if(zipcode == null || zipcode == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the zipcode field";
                    document.myform.zipcode.focus();
                    return false;          
                }
if(zipcodeBill == null || zipcodeBill == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the zipcodeBill field";
                    document.myform.zipcodeBill.focus();
                    return false;          
                }
	if( isNaN(zipcode) || zipcode.length != 5 ||isNaN(zipcodeBill) || zipcodeBill.length != 5 ){
		document.getElementById("message_line").innerHTML = "Please input numbers in zipcode field of length 5";
		document.myform.zipcode.focus();
        return false;
	}
if(contact == null || contact == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the contact field";
                    document.myform.contact.focus();
                    return false;          
                }
if(contactBill == null || contactBill == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the contact field";
                    document.myform.contactBill.focus();
                    return false;          
                }
if( isNaN(contact) || contact.length != 10 || isNaN(contactBill) || contactBill.length != 10){
		document.getElementById("message_line").innerHTML = "Phone number should be 10 digit numbers";
		document.myform.contact.focus();
        return false;
	}
if(one == null || one == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the credit card field";
                    document.myform.one.focus();
                    return false;          
                }
if(two == null || two == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the credit card field";
                    document.myform.two.focus();
                    return false;          
                }	
if(three == null || three == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the credit card field";
                    document.myform.three.focus();
                    return false;          
                }
if(four == null || four == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the credit card field";
                    document.myform.four.focus();
                    return false;          
                }				

if(sec == null || sec == "")
                {
                    document.getElementById("message_line").innerHTML = "Please Enter a value for the Security code field";
                    document.myform.sec.focus();
                    return false;          
                }
if( isNaN(one) || one.length != 4 || isNaN(two) || two.length != 4 || isNaN(three) || three.length != 4 || isNaN(four) || four.length != 4 ){
		document.getElementById("message_line").innerHTML = "Credit card should be numbers";
		document.myform.one.focus();
        return false;
	}
				
}