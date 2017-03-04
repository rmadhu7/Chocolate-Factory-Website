   
function shopping_cart(owner) {
    this.owner = $.trim(owner);
    this.skuArray = new Array();
    this.qtyArray = new Array();
	this.retArray = new Array();

//////////////////////////////////////////////////////////////////////////
// Do not use the following two methods;  they are private to this class
    this.getCookieValues = function() {  // PRIVATE METHOD
        var raw_string = document.cookie;        
        var arr = new Array();
        if(raw_string == undefined)
            return;
        var tmp = raw_string.split(";");
        var myValue = null;        
        for(i=0; i < tmp.length; i++)
            if(tmp[i].indexOf(owner) != -1)
                myValue = tmp[i].split("=");
        if(!myValue)
            return;
        arr = myValue[1].split("||");
        for(i=0; i < arr.length; i++) {
            var pair = arr[i].split("|"); 
            if(pair[0] == undefined || pair[1] == undefined || pair[2] == undefined) continue;
            this.skuArray[i] = pair[0];
            this.qtyArray[i] = pair[1];
			this.retArray[i] = pair[2];
            }         
        }
        
    this.writeCookie = function() {  // PRIVATE METHOD
        var toWrite = this.owner+"=";
        for(i=0; i < this.skuArray.length; i++) 
            toWrite += this.skuArray[i] + "|" + this.qtyArray[i] + "|" + this.retArray[i] +"||";
        toWrite = toWrite.substring(0,toWrite.length - 2);
        toWrite += "; path=/";
        document.cookie = toWrite;
        }
//////////////////////////////////////////////////////////////////////////            
        
    this.add = function(sku, quantity,retail) {
        sku = $.trim(sku);
        quantity = $.trim(quantity);
		//retail = $.trim(retail);
        this.getCookieValues(); 
        var found = false;
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku) {        
            this.qtyArray[i] = parseInt(quantity,10) + parseInt(this.qtyArray[i],10);
			this.retArray[i] = parseFloat(retail,10) + parseFloat(this.retArray[i],10);
            found = true;            
            }
        if(!found) {       
            this.skuArray.push(sku);
            this.qtyArray.push(quantity);
			this.retArray.push(retail);
            }
        this.writeCookie();         
    }
        
    this.delete = function(sku) {
        sku = $.trim(sku);
        var index = -1;
        this.getCookieValues();       
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku)  
            index = i;               
        if(index != -1) {      
            this.skuArray.splice(index,1);
            this.qtyArray.splice(index,1);
			this.retArray.splice(index,1);
            }         
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1;path=/";
            }
        else
            this.writeCookie();
        }
     this.minus = function (sku) { // Removes one item
        for(i=0; i < this.skuArray.length; i++) {
            if (this.skuArray[i] === sku) { 
                this.skuArray[i].count--; 
                if (this.skuArray[i].count === 0) {
                    this.skuArray.splice(i, 1);
                }
                break;
            }
        }
        this.writeCookie();
    };    
   
    this.getCartArray = function() {
        this.getCookieValues();
        var returnArray = new Array();
        for(i=0; i < this.skuArray.length; i++) {
            returnArray[i] = new Array();
            returnArray[i].push(this.skuArray[i]);
            returnArray[i].push(this.qtyArray[i]);
			returnArray[i].push(this.retArray[i]);
            }
        return returnArray;
        }                    
}    
        
