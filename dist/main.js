$(document).on('ready',function(){
	var keith = 0;
	$('button').on('click',function(){
		keith = keith + 1;
		if(keith === 1){$('button').html("1 like");}
		else{$('button').html(keith + " likes");}
		

		
	});

});