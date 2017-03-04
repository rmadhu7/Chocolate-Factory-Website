
var proj4_data;

$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn041/proj4/get_products.cgi', storeData);
	//milk();
    var cart = new shopping_cart("jadrn041");
	
        $('#milk').on('click',function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/>";
				
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"' /><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";    
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
                        tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/>";
				
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"' /><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";   
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
                        tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/>";
				
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"' /><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }); 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
                        tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/>";
				
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"' /><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
	   $('#truffles').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
                        tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/>";
				
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"' /><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";   
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
        
		$('#gifts').on('click',function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/>";
				
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"' /><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";          
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
		
		$('#holiday').on('click',function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/><br/>";
				
                tmpString += "<input type='button' class='buy' value='Add to Cart' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"'/><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";            
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
$('#content').on('click',$('input[type="button"]'), function(e) {
    if($(e.target).val() != 'Add to Cart') return;
    //alert("The SKU is " + $(e.target).attr("data-price"));
    });
        
    $(document).on('click', ".buy", function() {  
        var sku = $(this).attr("data-name");
		var retail = $(this).attr("data-price");
		//alert(retail);
        cart.add(sku,1,retail);
        $(this).next().fadeIn(50).fadeOut(1500);
        });      
        
                    
    });    

    
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
         
           
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     
function milk(){
	tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<div class=\"home3\"><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /></div><br />";
				tmpString += "<b>SKU:</b>" + proj4_data[i][0] +"<br/>";
				tmpString += "<b>Title:</b>" + proj4_data[i][2] +"<br/>";
				tmpString += "<b>About:</b>" + proj4_data[i][3] +"<br/>";
				tmpString += "<b>Description:</b>" + proj4_data[i][4] +"<br/>";
				tmpString += "<b>Cost:</b>" + proj4_data[i][5] +"<br/>";
				
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' data-name='" + proj4_data[i][0]+"' data-price='" + proj4_data[i][5]+"' /><span>Added to Cart</span><br /><br/><br/><br/><br/><br/><br/>";    
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
}
