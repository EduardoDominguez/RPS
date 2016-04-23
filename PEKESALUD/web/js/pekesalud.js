/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
page('/PEKESALUD/:section', getSeccions);
page();
var sx = 980, sy = 650, seccion2, PRUEBA="";
$(document).ready(function () {
    try {
        $(window).trigger("orientationchange");
        if (window.innerWidth) {
            sx = window.innerWidth;
        } else {
            sx = document.documentElement.clientWidth;
        }
        if (window.innerHeight) {
            sy = window.innerHeight;
        } else {
            sy = document.documentElement.clientHeight;
        }
        getSeccion();
    } catch (error) {
        alert(error);
    }
});

function getSeccions(obj){
    seccion2=obj.params.section.toLowerCase();
    getSeccion();
}

function getSeccion() {
    try {
        var url = "contenidos";
        $.ajax({
            type: "GET",
            url: url,
            async: false,
            data: {sec: seccion2},
            beforeSend: function () {
                load();
            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function () {
                $("#load").remove();
            },
            success: function (data) {
                $("#contenido").html("");
                $('#contenido').append(data).after(function () {
                    Section(seccion2);
                });
            }
        });
    } catch (ex) {
        alert(ex);
    }

}
function Section(ctx) {
    switch (ctx.toLowerCase()) {
        case 'login':
            break;
        case 'home':
            break;
        case 'usuarios':
            getUsuarios();
            cargaGridUsuarios();
            break;
        case 'instituciones':
            cargaGridInstituciones();
            getInstitutions();
            getMenu('1', "GridInstituciones", "id_institucion");
            break;
        case 'pacientes':
            cargarGridPacientes();
            getPacientes();
            getMenu('7', "GrigPacientes", "id_paciente");
            break;
        case'administrador_sistema':
            cargarGridASistema();
            getASistema();
            getMenu('5', "GridASistema", "id_admin_sistema");
            break;
        case'administrador_institucion':
            cargarGridAInstitucion();
            getAInstitucion();
            getMenu('6', "GridAInstitucion", "id_admin_institucion");
            break;
        case'nutriologos':
            cargarGridNutriologo();
            getNutriologos();
            getMenu('3', "GridNutriologo", "id_nutriologo");
            break;
        case'consultorios':
            cargarGridConsultorio();
            getConsultorios();
            getMenu('2', "GridConsultorio", "id_consultorio");
            break;
        case'tutores':
            cargarGridTutor();
            getTutores();
            getMenu('4', "GridTutor", "id_tutor");
            break;
    }
}

function getTutores() {
    try {
        var url = "tutores/getTutor.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {
            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (jqXHR, textStatus) {
                $("#load").remove();
            },
            success: function (data) {
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridTutor");
            }
        });
    } catch (e) {
        alert(e);
    }
}

function load() {
    $("#contenido").append("<img id='load' src=img/loading.gif>");
}

function closeLoading() {
    $("#load").remove();
}

function getInstitutions() {
    try {
        var url = "instituciones/getInstitutions.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (ex, e) {

            },
            success: function (data) {
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridInstituciones");
            }
        });
    } catch (e) {
        alert(e + "33");
    }
}

function getMenu(id_modulo, id_grid, nombre_id) {
    //alert(id_modulo+" "+id_grid+" "+nombre_id);
    try {
        var url = "menu/getMenu.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {'id_modulo': id_modulo},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (ex, e) {

            },
            success: function (data) {
                var datos = $.parseJSON(data);
                var botones = "";
                var funcion;
                $.each(datos, function (i, v) {
                    switch (v["nombre"].toLowerCase()) {
                        case "editar":
                            funcion = "actualizaDatos";
                            break;
                        case "alta":
                            funcion = "nuevoRegistro";
                            break;
                        case "estado":
                            funcion = "bajaRegistro";
                            break;
                    }
                    botones += "<button onclick='" + funcion + "(\"" + id_grid + "\", \"" + nombre_id + "\");' class='btn-main-edit'>" + v["nombre"] + "</button>";
                });
                $(".menu-edit").html(botones);
                //Crear ul con estructura del menu $scope.buttons = response.data;
            }
        });
    } catch (e) {
        alert(e + "ddd");
    }
}

function getConsultorios() {
    try {
        var url = "consultorios/getConsultorios.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            success: function (data) {
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridConsultorio");
                //Crear ul con estructura del menu $scope.buttons = response.data;
            }
        });
    } catch (e) {
        alert(e);
    }
}

function getNutriologos() {
    try {
        var url = "nutriologos/getNutriologo.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (ex, e) {

            },
            success: function (data) {
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridNutriologo");
                //Crear ul con estructura del menu $scope.buttons = response.data;
            }
        });
    } catch (e) {
        alert(e);
    }
}

function getAInstitucion() {
    try {
        var url = "ainstituciones/getAInstitutions.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (ex, e) {

            },
            success: function (data) {
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridAInstitucion");
                //Crear ul con estructura del menu $scope.buttons = response.data;
            }
        });
    } catch (e) {
        alert(e);
    }
}

function getASistema() {
    try {
        var url = "sistema/getAdminSistema.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (ex, e) {

            },
            success: function (data) {
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridASistema");
                //Crear ul con estructura del menu $scope.buttons = response.data;
            }
        });
    } catch (e) {
        alert(e);
    }
}

function getUsuarios() {
    try {
        var url = "usuarios/getUsuarios.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (ex, e) {

            },
            success: function (data) {
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridUsuarios");
            }
        });
    } catch (e) {
        alert(e);
    }
}

function getPacientes() {
    try {
        var url = "pacientes/getPacientes.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            complete: function (ex, e) {

            },
            success: function (data) {
                console.log(data);
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridPacientes");
                //Crear ul con estructura del menu $scope.buttons = response.data;
            }
        });
    } catch (e) {
        alert(e);
    }
}

function cargarGridTutor() {
    var paginador;
    //Creando la Tabla
    $("#GridTutor").jqGrid({
        datatype: "local",
        height: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', 'relación', "estado"],
        colModel: [
            {
                name: 'id_tutor',
                index: 'id_tutor',
                width: 5,
                formatter: 'int',
                align: 'right'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 30,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 20,
                align: 'right',
                formatter: 'int',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'relacion',
                index: 'relacion',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 5,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
        ],
        pager: "#PagerTutor",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        pgbuttons: true,
        width: sx,
        caption: "Administrador de sistema",
        loadComplete: function () {
        }
    });
    paginador = $("#GridTutor").getGridParam('pager');
    jQuery("#GridTutor").navGrid(paginador, {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
    }).jqGrid("filterToolbar");
}

function cargarGridASistema() {
    var paginador;
    //Creando la Tabla
    $("#GridASistema").jqGrid({
        datatype: "local",
        height: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', 'email', "Fecha Alta", "Estado"],
        colModel: [
            {
                name: 'id_admin_sistema',
                index: 'id_admin_sistema',
                width: 5,
                formatter: 'int',
                align: 'right'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 20,
                align: 'right',
                formatter: 'int',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 20,
                align: 'left',
                formatter: 'date',
                formatoptions: {newformat: 'd/m/Y'},
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 5,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
        ],
        pager: "#PagerASistema",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        pgbuttons: true,
        width: sx,
        caption: "Administrador de sistema",
        loadComplete: function () {
        }
    });
    paginador = $("#GridASistema").getGridParam('pager');
    jQuery("#GridASistema").navGrid(paginador, {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
    }).jqGrid("filterToolbar");
}

function cargarGridConsultorio() {
    var paginador;
    //Creando la Tabla
    $("#GridConsultorio").jqGrid({
        datatype: "local",
        height: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'institución', 'nombre', 'email', "Fecha Alta", "Estado"],
        colModel: [
            {
                name: 'id_consultorio',
                index: 'id_consultorio',
                width: 5,
                formatter: 'int',
                align: 'right'
            },
            {
                name: 'institucion',
                index: 'institucion',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 30,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 20,
                align: 'left',
                formatter: 'date',
                formatoptions: {newformat: 'd/m/Y'},
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 5,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
        ],
        pager: "#PagerConsultorio",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        width: sx,
        pgbuttons: true,
        caption: "Consultorios",
        loadComplete: function () {
        }
    });
    paginador = $("#GridConsultorio").getGridParam('pager');
    jQuery("#GridConsultorio").navGrid(paginador, {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
    }).jqGrid("filterToolbar");
}

function cargarGridNutriologo() {
    var paginador;
    //Creando la Tabla
    $("#GridNutriologo").jqGrid({
        datatype: "local",
        height: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'consultorio', 'teléfono', "email", 'fecha alta', 'estado'],
        colModel: [
            {
                name: 'id_nutriologo',
                index: 'id_nutriologo',
                width: 5,
                formatter: 'right',
                align: 'right'
            },
            {
                name: 'nutriologo',
                index: 'nutriologo',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 10,
                align: 'right',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 10,
                formatter: 'date',
                formatoptions: {newformat: 'd/m/Y'},
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 5,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
        ],
        pager: "#PagerNutriologo",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        pgbuttons: true,
        width: sx,
        caption: "Administrador de institución",
        loadComplete: function () {
        }
    });
    paginador = $("#GridNutriologo").getGridParam('pager');
    jQuery("#GridNutriologo").navGrid(paginador, {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
    }).jqGrid("filterToolbar");
}

function cargarGridAInstitucion() {
    var paginador;
    //Creando la Tabla
    $("#GridAInstitucion").jqGrid({
        datatype: "local",
        height: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', 'email', "fecha_alta", 'institución', 'estado'],
        colModel: [
            {
                name: 'id_admin_institucion',
                index: 'id_admin_institucion',
                width: 5,
                formatter: 'int',
                align: 'right'
            },
            {
                name: 'persona',
                index: 'persona',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 20,
                formatter: 'int',
                align: 'right',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 20,
                align: 'left',
                formatter: 'text',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 20,
                align: 'left',
                formatter: 'date',
                formatoptions: {newformat: 'd/m/Y'},
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 5,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
        ],
        pager: "#PagerAInstitucion",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        pgbuttons: true,
        width: sx,
        caption: "Administrador de institución",
        loadComplete: function () {
        }
    });
    paginador = $("#GridAInstitucion").getGridParam('pager');
    jQuery("#GridAInstitucion").navGrid(paginador, {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
    }).jqGrid("filterToolbar");
}

function cargaGridInstituciones() {
    var paginador;
    //Creando la Tabla
    $("#GridInstituciones").jqGrid({
        datatype: "local",
        height: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', "email", "fecha_alta", "Estado"],
        colModel: [
            {
                name: 'id_institucion',
                index: 'id_institucion',
                width: 5,
                formatter: 'int',
                formatoptions: {newformat: 'd/m/Y'},
                align: 'right'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 30,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 20,
                align: 'right',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 20,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
            ,
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 20,
                align: 'left',
                formatter: 'date',
                formatoptions: {newformat: 'd/m/Y'},
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 5,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
        ],
        pager: "#PagerInstituciones",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        pgbuttons: true,
        ignoreCase: true,
        width: 700,
        caption: "Tabla de instituciones",
        loadComplete: function () {
        }
    });
    paginador = $("#GridInstituciones").getGridParam('pager');
    jQuery("#GridInstituciones").navGrid(paginador, {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
    }).jqGrid("filterToolbar");
}

function cargarGridPacientes() {
    var paginador;
    //Creando la Tabla
    $("#GridPacientes").jqGrid({
        datatype: "local",
        height: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'genero', 'fecha de nacimiento', 'estatura', "peso", 'Estado'],
        colModel: [
            {
                name: 'id_paciente',
                index: 'id_paciente',
                width: 5,
                formatter: 'int',
                align: 'right'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 30,
                align: 'left',
                formatter: 'text',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'genero',
                index: 'genero',
                width: 20,
                align: 'left',
                formatter: 'text',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_nacimiento',
                index: 'fecha_nacimiento',
                width: 20,
                align: 'left',
                formatter: 'date',
                formatoptions: {newformat: 'd/m/Y'},
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estatura_actual',
                index: 'estatura_actual',
                width: 10,
                align: 'right',
                formatter: 'int',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'peso_actual',
                index: 'peso_actual',
                width: 10,
                align: 'right',
                formatter: 'int',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 5,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
        ],
        pager: "#PagerPacientes",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        pgbuttons: true,
        width: sx,
        caption: "Tabla de Pacientes",
        loadComplete: function () {
        }
    });
    paginador = $("#GridPacientes").getGridParam('pager');
    jQuery("#GridPacientes").navGrid(paginador, {
        edit: false,
        add: false,
        del: false,
        search: false,
        refresh: false
    }).jqGrid("filterToolbar");
}

function fillGrids(datos, idgrid) {
    for (var i = 0; i <= datos.length; i++) {
        $("#" + idgrid).jqGrid('addRowData', i + 1, datos[i]);
    }
}

function cerrarSesion() {
    var url = "login/salir.htm";
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        data: {},
        beforeSend: function () {
            load();
        },
        complete: function () {
            closeLoading()
        },
        error: function (ex) {
            alert('Ha ocurrido un error favor de intentar más tarde' + ex);
        },
        success: function (data) {
            if (data === "fail") {
                alert('Ha ocurrido un error al intentar cerrar la sesión, favor de intentarlo nuevamente');
            } else {
                location.href = "Login";
            }

        }
    });
}

function createUrl(val) {
    val = val.replace('á', 'a');
    val = val.replace('é', 'e');
    val = val.replace('í', 'i');
    val = val.replace('ó', 'o');
    val = val.replace('ú', 'u');
    val = val.replace('Á', 'A');
    val = val.replace('É', 'E');
    val = val.replace('Í', 'I');
    val = val.replace('Ó', 'O');
    val = val.replace('Ú', 'U');
    val = val.replace(' ', '_');
    return val;
}

function modulos() {
    try {
        var url = "login/modulos.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {},
            beforeSend: function () {

            },
            complete: function () {

            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            success: function (data) {
                var datos = $.parseJSON(data);
                var menu = "";
                $.each(datos, function (i, v) {
                    menu += "<li id ='" + v["nombre_modulo"] + "' onclick='navegacion(this.id)'>" + v["nombre_modulo"] + "</li>";
                });
                menu += "<li onclick='cerrarSesion()'>Cerrar sesi&oacute;n</li>";
                $("#lista-menu").html(menu);
            }
        });
    } catch (e) {
        alert(e);
    }
}

function navegacion(ele) {
    ele = createUrl(ele);
    if (ele !== seccion2) {
        seccion2 = ele; History.pushState({ seccion2: ele }, 'PEKESALUD', ele); 
    }
}

function limpiar() {
    $("#usr-login").val("");
    $("#psw-login").val("");
}

function login() {
    var usuario = $("#usr-login").val().trim();
    var pass = $("#psw-login").val().trim();
    if (usuario === "") {
        alert("Debes ingresar tu nombre de usuario");
        if (pass === "") {
            alert("Debes ingresar tu contraseña");
        }
    } else {
        var url = "login/ingresar.htm";
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {
                "usr": usuario,
                "psw": pass
            },
            beforeSend: function () {
                $(".container-login").append("<img id='load' src=img/loading.gif>");
            },
            complete: function () {
                closeLoading();
            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            success: function (data) {

                //var datos = $.parseJSON(data);
                //console.log(datos);
                switch (data) {
                    case "ok" :
                        //alert('Bienvenido');
                        location.href = "Home";
                        //modulos();
                        break;
                    case "caduco" :
                        alert('Su password ha caducado, favor de cambiarlo');
                        break;
                    default :
                        alert(data);
                        break;
                }

            }
        });
    }
}
function nuevoRegistro(id_grid, id_tabla) {

}
function bajaRegistro(id_grid, id_tabla) {
    var grid = $("#" + id_grid);
    var fila = grid.jqGrid('getGridParam', "selrow");
    if (fila) {
        var id = grid.jqGrid('getCell', fila, id_tabla);
        bajaDatos(id, id_grid);
    } else {
        alert("Debes seleccionar una fila para poder darla de baja");
    }
}
function actualizaDatos(id_grid, id_tabla) {
    var grid = $("#" + id_grid);
    var fila = grid.jqGrid('getGridParam', "selrow");

    if (fila) {
        var id = grid.jqGrid('getCell', fila, id_tabla);
        obtieneDatosActualizar(id, id_grid);
    } else {
        alert("Debes seleccionar una fila para poder editar");
    }
}
function obtieneDatosActualizar(id, id_grid) {
    switch (id_grid) {
        case "GridAInstitucion":
            getUrlEditar(id, id_grid, "Edita_Admin_Institucion");
            break;
        case "GridASistema":
            navegacion("Edita_Admin_Sistema");
            break;
        case "GridNutriologo":
            break;
        case "GrigPacientes":
            break;
        case "GridInstituciones":
            getUrlEditar(id, id_grid, "Edita_Institucion");
            break;
        case "GridTutor":
            break;
        case "GridConsultorio":
            break;
    }
}

function bajaDatos(id, id_grid) {
    switch (id_grid) {
        case "GridAInstitucion":
            getUrlBaja(id, id_grid);
            break;
        case "GridASistema":
            navegacion("Edita_Admin_Sistema");
            break;
        case "GridNutriologo":
            break;
        case "GrigPacientes":
            break;
        case "GridInstituciones":
            getUrlBaja(id, id_grid);
            break;
        case "GridTutor":
            break;
        case "GridConsultorio":
            break;
    }
}

function getUrlBaja(id, id_grid){
    switch (id_grid){
        case'GridAInstitucion':
            bajarDatos(id, id_grid, "ainstituciones/cambia_estado.htm");
            break;
        case'GridInstituciones':
            bajarDatos(id, id_grid, "instituciones/cambia_estado.htm");
            break;
    }
}

function getUrlEditar(id, id_grid){
    switch (id_grid){
        case'GridAInstitucion':
            editarDatos(id, "ainstituciones/obtiene_datos.htm", "Edita_Admin_Institucion");
            break;
        case'GridInstituciones':
            editarDatos(id, "instituciones/obtiene_datos.htm", "Edita_Institucion");
            break;
    }
}

function bajarDatos(id, grid, url, sections) {
    if (confirm("¿Desea el estado de este registro?")) {
        try {
            $.ajax({
                type: "POST",
                url: url,
                async: false,
                data: {"id": id},
                beforeSend: function () {
                    load();
                },
                complete: function () {
                    closeLoading();
                },
                error: function (ex) {
                    alert('Ha ocurrido un error favor de intentar más tarde' + ex);
                },
                success: function (data) {
                    if (data === "ok") {
                        alert("El registro ha cambiado de estado correctamente");
                        location.href=sections;
                    } else {
                        alert("No se ha podido dar de baja, intente más tarde");
                    }
                }
            });
        } catch (e) {
            alert(e + "bajaAinstitucion");
        }
    }
}
function editarDatos(id, url, sectcall) {
    try {
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: {"id": id},
            beforeSend: function () {
                load();
            },
            complete: function () {
                closeLoading();
            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
            },
            success: function (data) {
                var datos = $.parseJSON(data);
                PRUEBA=20;
                $.when(navegacion(sectcall).then(function (){
                    eval(sectcall+'_fill('+data+')');
                }));
            }
        });
    } catch (e) {
        alert(e + "datosAInstitucion");
    }
}

function Edita_Institucion_fill(datos){
    $('#edita-nombre-institucion').val('hgsdja');
}

History.Adapter.bind(window, 'statechange', function () {
    var State = History.getState();
    seccion2 = State.url.substring(State.url.lastIndexOf('/') + 1, State.url.length);
    if(seccion2!=''){
        getSeccion();
    }
});