





function hideElement(id)
{
	
	if (confirm('Are you sure you want to save this thing into the database?')) {
		
		var temp='#'+id;
		$(temp).hide();
	} 
	else {
   
	}
	

}
