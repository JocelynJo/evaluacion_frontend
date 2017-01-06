$(document).ready(function(){

	var ciudades = [
	{
		name: "arica",
		distance: 2059
	},
	{
		name: "iquique",
		distance: 1789
	},
	{
		name: "antofagasta",
		distance: 1368
	},
	{
		name: "copiapo",
		distance: 1567
	},
	{
		name: "la_serena",
		distance: 470
	},
	{
		name: "valparaiso",
		distance: 116
	},
	{
		name: "rancagua",
		distance: -84
	},
	{
		name: "talca",
		distance: -257
	},
	{
		name: "concepcion",
		distance: -500
	},
	{
		name: "temuco",
		distance: -690
	},
	{
		name: "valdivia",
		distance: -848
	},
	{
		name: "puerto_montt",
		distance: -1032
	},
	{
		name: "coyhaique",
		distance: -1888
	},
	{
		name: "punta_arenas",
		distance: -3004
	},
	{
		name: "santiago",
		distance: 0
	}

	];

	for(var i=0 ; i<ciudades.length ; ++i){
		$('.origen').append('<option value="'+(i+1)+'">'+ciudades[i].name+'</option>');
		$('.destino').append('<option value="'+(i+1)+'">'+ciudades[i].name+'</option>');
	}

	$('.origen, .destino').on('change', function(){
    // aca ponemos que pasa cuando un select cambia
    var origen = $('.origen').val();
    var destino = $('.destino').val();

    if (origen == '0' && destino == '0'){
    	$(".buscar").attr('disabled','disabled');

    }else{
    	$(".buscar").removeAttr('disabled');
    }

    var ciudad_1 = null;
    var ciudad_2 = null;

    	// Ahora encontrar ciudades
    for (var i=0 ; i<ciudades.length ; ++i){

    	if(ciudades[i].name == ciudad_1){
    		ciudad_1 = ciudades[i];
    	}
    	if(ciudades[i].name == ciudad_2){
    		ciudad_2 = ciudades[i];
    	}
    }
    var distancia=Math.abs(ciudad_1.distance-ciudad_2.distance);

    $(".buscar").click(function(evento){
		$(".oculto").css("display", "block");
	});

	//validaropcion de auto seleccionada
	$('.compartir').on('click', function(e) {
		e.preventDefault();

		var opAuto=$("input[name='group1']:checked").val();
		var pasajeros=$("#pasajeros").val();

		if(opAuto=="moto" && pasajeros>2 ){
			alert("excede el maximo de pasajeros-->2");
		}else{
			$('.modal').modal();
			$(".modal-content").append('<h4>'+"Cuanto gasta"+'<h4>');
			
		}


		/*else if(opAuto == "auto" && pasajeros>5){
			alert("excede el maximo de pasajeros-->5");
		}else if(opAuto == "minivan" && pasajeros>8){
			alert("excede el maximo de pasajeros-->8");
		}else if(opAuto == "camion" && pasajeros> 3){
			alert("excede el maximo de pasajeros-->3");
		}else{
			  
		}*/
	});	
	

    });
	//aparece div de vehiculos




});
 var valor=function(distancia,kilo,combus) {
	var valor=Math.round(distancia/kilo);
	var total=valor+combus;
	console.log(total);
};
