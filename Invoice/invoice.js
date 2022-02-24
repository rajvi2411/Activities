
//currency change
$("#currency").on("click",function(){
	prev = $(this).val(); // get the prev value of currency
}).on("change",function(){
	var cur = $("#currency").val(); //get current value of currency
	//console.log("Prev : ",prev);
	//console.log("Curr : ",cur);
	$(".curr").html(cur);  //update currency
	$("#btnCurr").html(cur);

	var tbl = document.getElementsByClassName('ptable')[0];
	var rows = tbl.getElementsByClassName('items');

	//update each row for price and total
	for(var i=0;i<rows.length ; i++){
		var rtd = rows[i];
		if(prev == "INR"){
			if(cur == "EUR"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 0.011818297 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "GBP"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 0.0098619892  *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "SGD"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 0.018033106 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
		}
		else if(prev == "EUR"){
			if(cur == "INR"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 84.591648 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "GBP"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 0.83477628 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "SGD"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 1.5254372  *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
		}
		else if(prev == "GBP"){
			if(cur == "EUR"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 1.1979133 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "INR"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 101.3321 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "SGD"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 1.8276085*100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
		}
		else if(prev == "SGD"){
			if(cur == "EUR"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 0.65555835 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "GBP"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 0.54716314 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
			else if(cur == "INR"){
				var price=rtd.getElementsByClassName('price')[0];
				var amt = (Math.floor(parseFloat(price.value) * 55.451636 *100))/100;
				rtd.getElementsByClassName('price')[0].value = amt;
			}
		
		}
		
	}
	updateRowAmount();
});

//add new blank line
function nLine(){
	var txt = "<tr id=\"items\" class=\"items\"><td class=\"product\">";
		txt+= "<input type=\"text\" placeholder=\"Item Name\" id=\"name\">"; 
		txt+= "<button class=\"clone\" id=\"clone\" onclick=\"cloneRow()\"> ";
		txt+= "<i class=\"fa fa-files-o\"></i> </button> </td>";
		txt+= "<td style=\"width:10%\" id=\"qtd\"> <input type=\"number\" min=1 ";
		txt+= "style=\"width:90%\" id=\"qty\" class=\"qty\" value=\"1\" onchange=\"updateRowAmount()\">";
		txt+= "</td><td style=\"width:10%\" id=\"ptd\"><input type=\"text\" style=\"width:90%\" id=\"price\" ";
		txt+= "class=\"price\" value=\"0.00\" onkeyup=\"updateRowAmount()\"></td>";
		txt+= "<td style=\"width:20%\" id=\"rtd\"> ";
		txt+= "<label id=\"curr\" class=\"curr\">INR</label> ";
		txt+= "<input type=\"text\" id=\"rowAmt\" value=\"00.00\" class=\"rowAmt\" disabled> ";
		txt+= "</td> <td> <button class=\"remove\" id=\"remove\" onclick=\"removeRow()\">X</button>";
		txt+= "</td> </tr>";
		var table = document.getElementById("ptable").tbody;
		$('#ptable').append(txt);
}

//new Line with copy
function newLine(){
	var rcnt = ($('.items')).length ; 
	if(rcnt == 0)
		nLine();
	else{
		var lastrow = $('.items:last');
		console.log(lastrow)
		var newrow = lastrow.clone();
		newrow.find('#name').val("");
		newrow.find('#rowAmt').text("0.00");
		newrow.find('#qty').val("1");
		newrow.find('#price').val("00.00");
		newrow.find('#rowAmt').val("00.00");
		newrow.insertAfter(lastrow);
		updateTotal();
	}
}

//clone function
function cloneRow() {
	//console.log("in, : ", event.target.tagName);
	var tmp= event.target;
	var row ;
	if(tmp.tagName == "I")
		row = tmp.parentElement.parentElement.parentElement// find row to copy
	else
		row = tmp.parentElement.parentElement
	var table = document.getElementById("ptable"); // find table to append to
	var clone = row.cloneNode(true); // copy children too
	table.appendChild(clone); // add new row to end of table
	updateTotal();  //update the total
}

//update each row for change in price or qty
function updateRowAmount(){
	var tbl = document.getElementsByClassName('ptable')[0];
	var rows = tbl.getElementsByClassName('items');
	for(var i=0;i<rows.length ; i++){
		var rtd = rows[i];
		var qty=rtd.getElementsByClassName('qty')[0];
		var price=rtd.getElementsByClassName('price')[0];
		var amt = (qty.value )* (price.value) ;
		rtd.getElementsByClassName('rowAmt')[0].value = amt;
		//console.log("qty :" ,qty.value , "\nPrice : ",price.value , "\namt : ",amt)
	}
	updateTotal();
}

//on change of tax
function updateTax(){
	total = parseFloat(document.getElementById('subtotal').textContent)
	console.log(document.getElementById('subtotal').text);
	var tax = Math.round(total * parseFloat(document.getElementById('per').value) )/ 100;
	var final = (Math.round((total + tax)*100 ))/100;
	$("#tax").html(tax);
	$("#total").html(final);
	$("#btnAmt").html(final);
	console.log("sub total : " , total , "\n tax : ",tax ,"\n total : ",final);	
}

//updates the sub total and total
function updateTotal(){
	var tbl = document.getElementsByClassName('ptable')[0];
	var rows = tbl.getElementsByClassName('items');
	let total = 0;
	for(var i=0;i<rows.length ; i++){
		var rtd = rows[i];
		let amt=rtd.getElementsByClassName('rowAmt')[0].value;
		//console.log(amt);
		total = total + parseFloat(amt);
	}
	//calculate tax and total amount
	var tax = Math.round(total * parseFloat(document.getElementById('per').value) )/ 100;
	var final = (Math.round((total + tax)*100 ))/100;
	//put updated value
	$("#subtotal").html(total);
	$("#tax").html(tax);
	$("#total").html(final);
	$("#btnAmt").html(final);
	//console.log("sub total : " , total , "\n tax : ",tax ,"\n total : ",final);	
}

//jsPDF : convert html to pdf
function convertHTMLToPDF() {
	const { jsPDF } = window.jspdf;
 	var doc = new jsPDF('l', 'mm', [1000, 900]);
	//var doc = new jsPDF();
	var pdfjs = document.querySelector('#mainbody');
	doc.html(pdfjs, {
		callback: function(doc) {
			doc.save("invoice.pdf");
		},
		x: 10,
		y: 10
	});
}

//remove the row
function removeRow(){
	var tmp= event.target;
	var row =tmp.parentElement.parentElement;
	row.remove();
	updateTotal();
	//console.log("done");
}


