

var languageDatatable = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ning&uacute;n dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "&Uacute;ltimo",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
};

var showMessageInModal = function(status, message, confirmWindow, callbackOnClose, callbackOnConfirm){
	
	var bodyContent = "<div class=\"alert "+ ((status == true) ? "alert-success" : "alert-danger")+"\">"+message+"</div>";
	var footerButtons ="<button type=\"button\" class=\"btn btn-default closeModal\">Cerrar</button>"
	    +"<button type=\"button\" class=\"btn btn-primary confirmModal\">Confirmar</button>";
	var footerButtonsClose ="<button type=\"button\" class=\"btn btn-default closeModal\">Cerrar</button>";
	var footerContent = (confirmWindow == true) ? footerButtons : footerButtonsClose;
	
	$('#showMessageInModal').find(".modal-body").html("").append(bodyContent);
	$('#showMessageInModal').find(".modal-footer").html("").append(footerContent);
	$('#showMessageInModal').modal('show');
	
	$(".closeModal").off("click");
	$(".confirmModal").off("click");
	
	if(callbackOnClose!=undefined){
		$(".closeModal").on("click", function(e){
			e.preventDefault();
			callbackOnClose();
		});
	} else {
		$(".closeModal").on("click", function(e){
			e.preventDefault();
			$('#showMessageInModal').modal("hide");
		});
	}
	
	if(callbackOnConfirm!=undefined){
		$(".confirmModal").on("click", function(e){
			e.preventDefault();
			callbackOnConfirm();
		});
	} else {
		$(".confirmModal").on("click", function(e){
			e.preventDefault();
			$('#showMessageInModal').modal("hide");
		});
	}
	
};