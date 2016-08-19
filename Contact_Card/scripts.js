    	$(document).ready(function(){
			$('#contact').submit(function(){
	    		var fname = $('#name input').val();
	    		var lname = $('#name input:nth-of-type(2)').val();
	    		var description = $('#name textarea').val();
	    		$('#cards').append('<div class="box">'
	    			+ '<h2>' + fname + ' ' + lname + '</h2>'
	    			+ '<h3>Click for Description</h3>'
	    			+ '<h4 style="display: none">' + description + '</h4>'
	    			+ '</div>'
	    			);
	        return false;
	       });
			$(document).on('click', '.box', function(){
				$(this).children().toggle('');
			});
	   	});