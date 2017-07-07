$(document).ready(function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		dataType: 'JSON',
		data: {'limit': '20'},
	})
	.done(function(respuesta){
		console.log(respuesta)
		mostrarPokemon(respuesta.results)
		console.log("succes");
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("complete");
	})

	var mostrarPokemon = function(data){

	    data.forEach(function(e){
	    	var pokeName = e.name;
	    	$("#pokepoke").append("<div class='thepoke'><img class='pokeImg' src='http://img.pokemondb.net/artwork/"+ pokeName + ".jpg'><span class='pname'>"+ pokeName +"</span></div> ");
	    })
	};

	
});