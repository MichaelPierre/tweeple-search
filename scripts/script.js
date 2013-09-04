$(document).ready(function() {
	$(".input-field").attr("value","I'm looking for...");
	
	var text = "I'm looking for...";
	
	$(".input-field").focus(function() {
		$(this).addClass("active");
		if($(this).attr("value") == text) $(this).attr("value", "");
	});
	$(".input-field").blur(function() {
		$(this).removeClass("active");
		if($(this).attr("value") == "") $(this).attr("value", text);
	});
});
