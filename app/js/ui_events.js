$(document).ready(function(){

	$("#rb-main-refresh").on("click", function(){
		location.reload();
	});

	$("#rb-main-exit").on("click", function(){
		process.exit(0);
	});

});