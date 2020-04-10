$(document).ready(function(){

	var socket = new WebSocket('ws://127.0.0.1:8000');
	socket.onopen = websocket_conexion_ok;
	socket.onmessage = websocket_msj_recibido;

	

});

function websocket_conexion_ok(){
	//alert('La conexión se ha establecidoo');
}

function websocket_msj_recibido(e){
	datos = JSON.parse(e.data);
	//alert('mensaje recibido'+datos.fecha);
	
	$('#contador').text(datos.monto)
	if (datos.fecha == undefined){datos.fecha = "-"}
	if (datos.monto_ingresar == undefined){datos.monto_ingresar = "-"}
	if (datos.monto_ingresado == undefined | datos.monto_ingresado == 0){datos.monto_ingresado = "--"}
	if (datos.monto_a_dispensar == undefined){datos.monto_a_dispensar = "-"}
	if (datos.folio == undefined){datos.folio = "-"}
	if (datos.hora_entrada == undefined){datos.hora_entrada = "-"}
	if (datos.tiempo_total == undefined){datos.tiempo_total = "-"}
	if (datos.descuento == undefined | datos.descuento == 0){datos.descuento = "--"}

	if (datos.X_17 == undefined){datos.X_17 = "-"} else{datos.X_17 =  "$"+ datos.X_17 +".00"}
	if (datos.X_20 == undefined){datos.X_20 = "-"} else{datos.X_20 =  "$"+ datos.X_20 +".00"}

	$('.date').text( datos.fecha)
	$('.total-td').text(datos.X_17)
	$('.ingresado-td').text(datos.X_20)

	$('#monto_ingresar').text(datos.monto_ingresar)
	$('#monto_ingresado').text(datos.monto_ingresado)
	$('#monto_a_dispensar').text(datos.monto_a_dispensar)
	$('#folio').text(datos.folio)
	$('#hora_entrada').text(datos.hora_entrada)
	$('#tiempo_total').text(datos.tiempo_total)
	$('#descuento').text(datos.descuento)
	//$("#t1").click(function () {
	if (datos.interfaz == 1) {
		$("#tab-4").prop("checked", true);
	  } 
	  if (datos.interfaz == 2) {
		$("#tab-5").prop("checked", true);
	  } 
	
	//$("#tab-4").prop("checked", true);
		//$("#tab-4").attr("checked", "checked");
		//alert($('input:radio[id=tab-4]:checked').val());
		//$("#tab-4").attr("checked", "checked");

	//	})
	//$('#X_20').text(datos.monto)
	
	//$('#tabs').tabs('opcion','active',2)
	//$tabs.tabs('select', 1);
	//$("#tabs").tabs("option", "active", 1);
	
	//var tabs = $("#tabs").tabs();
	//var $tabs = $('#tabs').tabs(); // first tab selected
	//$tabs.tabs('select', 1);

	$('.tabs a[href="#tab-1"]').tab('show')

	//$("#tab-5").prop("checked", false);
	$("#t1").prop("checked", true);

	//var index = $('#tabs a[href="#tab-1"]').parent().index();
	//$("#tabs").tabs("option", "active", index);
	
	
}