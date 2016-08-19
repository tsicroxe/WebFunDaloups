$(document).ready(function(){
	$('form').submit(function(){
	    console.log("Submit is working");
	    var fname = $('#firstName input').val();
	    var lname = $('#lastName input').val();
	    var email = $('#email input').val();
	    var contact = $('#contact input').val();
	        $('#info').append('<tr' + '<td>'
	        	+ '<td>' + fname + '</td>' 
	        	+ '<td>' + lname + '</td>' 
	        	+ '<td>' + email + '</td>'
	        	+ '<td>' + contact + '</td>' + 
	        	'</tr>'
	  			);
	        return false;
	       });
	   	});