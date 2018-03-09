$(document).ready(function(){

	var inputVal;
	$("#search input[type='text']").on("keypress keyup", function(){
		inputVal = $(this).val();
	});
	
	$("#search form").submit(function(e) {
        e.preventDefault();
        var seconds = new Date();
        $("#page").append("<p>" + inputVal + " - " + seconds.getSeconds() + "</p>");
    });
		
});

