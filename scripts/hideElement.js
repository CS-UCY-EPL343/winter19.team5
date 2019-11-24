





function hideElement(id)
{

	
	
	if (confirm('Are you sure you want to discrad this Food from your list?')) {
		
		var temp='#'+id;
		$(temp).hide();
	} 
	else {
   
	}
	

}
