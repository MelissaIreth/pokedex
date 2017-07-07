$(document).ready(function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		dataType: 'JSON',
		data: {'limit': '811'},
	})
	.done(function(respuesta){
		console.log(respuesta)
		console.log("succes");
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("complete");
	})
});