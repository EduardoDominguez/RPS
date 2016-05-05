/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
page('/PEKESALUD/:section', getSeccions);
page();
var sx = 980, sy = 650, seccion2, PRUEBA = "";
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
        console.log("Cargado!");
        getSeccion();
    } catch (error) {
        alert(error);
    }
});

function getSeccions(obj) {
    seccion2 = obj.params.section.toLowerCase();
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
        alert(ex + " get section");
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
            getMenu('7', "GridPaciente", "id_paciente");
            break;
        case 'administrador_sistema':
            cargarGridASistema();
            getASistema();
            getMenu('5', "GridASistema", "id_admin_sistema");
            break;
        case 'administrador_institucion':
            cargarGridAInstitucion();
            getAInstitucion();
            getMenu('6', "GridAInstitucion", "id_admin_institucion");
            break;
        case 'nutriologos':
            cargarGridNutriologo();
            getNutriologos();
            getMenu('3', "GridNutriologo", "id_nutriologo");
            break;
        case 'consultorios':
            cargarGridConsultorio();
            getConsultorios();
            getMenu('2', "GridConsultorio", "id_consultorio");
            break;
        case'edita_consultorio':
            carga_instituciones();
            break;
        case 'tutores':
            cargarGridTutor();
            getTutores();
            getMenu('4', "GridTutor", "id_tutor");
            break;
        case 'edita_tutor':
            carga_relaciones();
            carga_instituciones();
            carga_consultorios();
            carga_ocupacion();
            carga_estado_civil();
            break;
        case 'alta_tutor':
            carga_relaciones();
            carga_instituciones();
            carga_consultorios();
            carga_ocupacion();
            carga_estado_civil();
            break;
        case 'edita_admin_institucion':
            carga_instituciones();
            break;
        case 'alta_admin_institucion':
            carga_instituciones();
            break;
        case'alta_consultorio':
            carga_instituciones();
            break;
        case'edita_nutriologo':
            carga_instituciones();
            carga_consultorios();
            break;
        case'alta_nutriologo':
            carga_instituciones();
            carga_consultorios();
            break;
        case'edita_paciente':
            carga_instituciones();
            carga_consultorios();
            carga_tutores();
            carga_educativo();
            break;
        case'alta_paciente':
            carga_instituciones();
            carga_consultorios();
            carga_tutores();
            carga_educativo();
            break;
    }
}

function carga_educativo() {
    try {
        $.post("educativo/getEducativo.htm", "", on_carga_educativo);
    } catch (ex) {
        alert(ex + " carga_educativo");
    }
}
function on_carga_educativo(data) {
    var select = "", datos = $.parseJSON(data);
    $.each(datos, function (i, v) {
        select += "<option value ='" + v["id_nivel_educativo"] + "' id='" + v["id_nivel_educativo"] + "'>" + v["nivel_educativo"] + "</option>";
    });
    $(".combo-educativo").append(select);
}

function carga_tutores() {
    try {
        $.post("tutores/getTutor.htm", "", on_carga_tutores);
    } catch (ex) {
        alert(ex + " carga_tutores");
    }
}
function on_carga_tutores(data) {
    var select = "", datos = $.parseJSON(data);
    $.each(datos, function (i, v) {
        select += "<option value ='" + v["id_tutor"] + "' id='" + v["id_tutor"] + "'>" + v["nombre"] + "</option>";
    });
    $(".combo-tutores").append(select);
}

/*Funcion que recupera el catalogo de relaciones dadas de alta*/
function carga_relaciones() {
    try {
        $.post("relacion/getRelacion.htm", "", on_carga_relaciones);
    } catch (ex) {
        alert(ex + " carga_relaciones");
    }
}
function on_carga_relaciones(data) {
    var select = "", datos = $.parseJSON(data);
    $.each(datos, function (i, v) {
        select += "<option value ='" + v["id_relacion"] + "' id='" + v["id_relacion"] + "'>" + v["relacion"] + "</option>";
    });
    $(".combo-relaciones").append(select);
}

/*Función que recupera el catalogo de instituciones dadas de alta*/
function carga_instituciones() {
    try {
        $.post("instituciones/getInstitutions.htm", "", on_carga_instituciones);
    } catch (ex) {
        alert(ex + " carga_instituciones");
    }
}
function on_carga_instituciones(data) {
    var select = "", datos = $.parseJSON(data);
    $.each(datos, function (i, v) {
        select += "<option value ='" + v["id_institucion"] + "' id='" + v["id_institucion"] + "'>" + v["nombre"] + "</option>";
    });
    $(".combo-instituciones").append(select);
}

/*Función que recupera el catalogo de consultorios dados de alta*/
function carga_consultorios() {
    try {
        $.post("consultorios/getConsultorios.htm", "", on_carga_consultorios);
    } catch (ex) {
        alert(ex + " carga_consultorios");
    }
}

function on_carga_consultorios(data) {
    var select = "", datos = $.parseJSON(data);
    $.each(datos, function (i, v) {
        select += "<option value ='" + v["id_consultorio"] + "' id='" + v["id_consultorio"] + "'>" + v["nombre"] + "</option>";
    });
    $(".combo-consultorios").append(select);
}

/*Función que recupera el catalogo de ocupaciones dadas de alta*/
function carga_ocupacion() {
    try {
        $.post("ocupacion/getOcupacion.htm", "", on_carga_ocupacion);
    } catch (ex) {
        alert(ex + " carga_ocupacion");
    }
}

function on_carga_ocupacion(data) {
    var select = "", datos = $.parseJSON(data);
    $.each(datos, function (i, v) {
        select += "<option value ='" + v["id_ocupacion"] + "' id='" + v["id_ocupacion"] + "'>" + v["ocupacion"] + "</option>";
    });
    $(".combo-ocupaciones").append(select);
}

/*Función que recupera el catalogo de estados civiles dados de alta*/
function carga_estado_civil() {
    try {
        $.post("estado_civil/getEstado_civil.htm", "", on_carga_estado_civil);
    } catch (ex) {
        alert(ex + " carga_estado_civil");
    }
}

function on_carga_estado_civil(data) {
    var select = "", datos = $.parseJSON(data);
    $.each(datos, function (i, v) {
        select += "<option value ='" + v["id_estado_civil"] + "' id='" + v["id_estado_civil"] + "'>" + v["estado_civil"] + "</option>";
    });
    $(".combo-estado-civil").append(select);
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
                if (data !== 'fail') {
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
                }
            }
        });
    } catch (e) {
        alert(e + "get menu");
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
                var datos = $.parseJSON(data);
                fillGrids(datos, "GridPaciente");
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
        width: sx - 230,
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
        width: sx - 230,
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
        width: sx - 230,
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
        width: sx - 230,
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
        width: sx - 230,
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
        width: sx - 230,
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
    $("#GridPaciente").jqGrid({
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
        pager: "#PagerPaciente",
        sortorder: "asc",
        viewrecords: true,
        hidegrid: false,
        altRows: true,
        pgbuttons: true,
        width: sx - 230,
        caption: "Pacientes",
        loadComplete: function () {
        }
    });
    paginador = $("#GridPaciente").getGridParam('pager');
    jQuery("#GridPaciente").navGrid(paginador, {
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
            closeLoading();
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
        seccion2 = ele;
        History.pushState({seccion2: ele}, 'PEKESALUD', ele);
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
    switch (id_grid) {
        case'GridInstituciones':
            navegacion("Alta_institucion");
            break;
        case'GridAInstitucion':
            navegacion("Alta_admin_institucion");
            break;
        case'GridTutor':
            navegacion("Alta_tutor");
            break;
        case'GridConsultorio':
            navegacion("Alta_Consultorio");
            break;
        case'GridNutriologo':
            navegacion("Alta_Nutriologo");
            break;
        case'GridASistema':
            navegacion("Alta_admin_sistema");
            break;
        case'GridPaciente':
            navegacion("Alta_paciente");
            break;

    }
}

$('.btn-alta-pacientes').live('click', function (e) {
    e.preventDefault();
    try {
        var id_tutor = $("#alta-tutor-pacientes").val();
        var id_institucion = $("#alta-institucion-pacientes").val();
        var id_consultorio = $("#alta-consultorio-pacientes").val();
        var nombre = $("#alta-nombre-pacientes").val();
        var nick = $("#alta-nick-pacientes").val();
        var foto = $("#alta-foto-pacientes").val();
        var genero = $("#alta-genero-pacientes").val();
        var nacimiento = $("#alta-nacimieto-pacientes").val();
        var estatura = $("#alta-estatura-pacientes").val();
        var peso = $("#alta-peso-pacientes").val();
        var grado = $("#alta-grado-pacientes").val();
        var face = $("#alta-facebook-pacientes").val();
        if(id_tutor.trim()!=="" && id_institucion.trim()!=="" && id_consultorio.trim()!=="" && nombre.trim()!=="" && nick.trim()!=="" && genero.trim()!=="" && nacimiento.trim()!=="" && estatura.trim()!=="" && peso.trim()!=="" && grado.trim()!==""){
            var datos=[];
            datos={id_tutor:id_tutor, id_institucion:id_institucion, id_consultorio:id_consultorio, nombre:nombre, nick_name:nick, fotografia:foto, genero:genero, fecha_nacimiento:nacimiento, estatura_actual:estatura, peso_actual:peso, id_nivel_educativo:grado, facebook:face};
            var url = "pacientes/alta_datos.htm";
            altaDatos(datos, url, "Pacientes");
        }
    } catch (e) {
        alert(e + " btn alta paciente");
    }
});
$('.btn-alta-admin-sistema').live('click', function (e) {
    e.preventDefault();
    try {
        var nombre = $("#alta-nombre-admin-sistema").val();
        var curp = $("#alta-curp-admin-sistema").val();
        var clave = $("#alta-clave-admin-sistema").val();
        var pais = $("#alta-pais-admin-sistema").val();
        var entidad = $("#alta-entidad-admin-sistema").val();
        var ciudad = $("#alta-ciudad-admin-sistema").val();
        var delegacion = $("#alta-delegacion-admin-sistema").val();
        var colonia = $("#alta-colonia-admin-sistema").val();
        var cp = $("#alta-cp-admin-sistema").val();
        var direccion = $("#alta-direccion-admin-sistema").val();
        var telefono = $("#alta-telefono-admin-sistema").val();
        var email = $("#alta-email-admin-sistema").val();
        var face = $("#alta-face-admin-sistema").val();
        var usr = $("#alta-user-admin-sistema").val();
        var pass = $("#alta-pass-admin-sistema").val();
        if (nombre.trim() !== "" && curp.trim() !== "" && clave.trim() !== "" && pais.trim() !== "" && entidad.trim() !== "" && ciudad.trim() !== "" && delegacion.trim() !== "" && colonia.trim() !== "" && cp.trim() !== "" && direccion.trim() !== "" && telefono.trim() !== "" && email.trim() !== "" && usr.trim() !== "" && pass.trim() !== "") {
            var datos = [];
            datos = {nombre: nombre, curp: curp, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, face: face, usr: usr, pass: pass};
            var url = "sistema/alta_datos.htm";
            altaDatos(datos, url, "Administrador_sistema");
        }
    } catch (e) {
        alert(e + "btn alta admin sistem");
    }
});
$('.btn-alta-nutriologo').live('click', function (e) {
    e.preventDefault();
    try {
        var id_institucion = $('#alta-institucion-nutriologo').val();
        var id_consultorio = $('#alta-consultorio-nutriologo').val();
        var nombre = $('#alta-nombre-nutriologo').val();
        var curp = $('#alta-curp-nutriologo').val();
        var clave = $('#alta-clave-nutriologo').val();
        var pais = $('#alta-pais-nutriologo').val();
        var entidad = $('#alta-entidad-nutriologo').val();
        var ciudad = $('#alta-ciudad-nutriologo').val();
        var delegacion = $('#alta-delegacion-nutriologo').val();
        var colonia = $('#alta-colonia-nutriologo').val();
        var cp = $('#alta-cp-nutriologo').val();
        var direccion = $('#alta-direccion-nutriologo').val();
        var telefono = $('#alta-telefono-nutriologo').val();
        var email = $('#alta-email-nutriologo').val();
        var facebook = $('#alta-face-nutriologo').val();
        var usr = $('#alta-user-nutriologo').val();
        var pass = $('#alta-pass-nutriologo').val();
        if (id_institucion.trim() !== "" && id_consultorio.trim() !== "" && nombre.trim() !== "" && curp.trim() !== "" && clave.trim() !== "" && pais.trim() !== "" && entidad.trim() !== "" && ciudad.trim() !== "" && delegacion.trim() !== "" && colonia.trim() !== "" && cp.trim() !== "" && direccion.trim() !== "" && telefono.trim() !== "" && email.trim() !== "" && usr.trim() !== "" && pass.trim() !== "") {
            var datos = [];
            datos = {id_institucion: id_institucion, id_consultorio: id_consultorio, nombre: nombre, curp: curp, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, face: facebook, usr: usr, pass: pass};
            var url = "nutriologos/alta_datos.htm";
            altaDatos(datos, url, "Nutriologos");
        }
    } catch (e) {
        alert(e + " btn alta nutriologo");
    }
});

$('.btn-alta-consultorio').live('click', function (e) {
    e.preventDefault();
    try {
        var id_institucion = $('#alta-institucion-consultorio').val();
        var nombre = $('#alta-nombre-consultorio').val();
        var rfc = $('#alta-rfc-consultorio').val();
        var clave = $('#alta-clave-consultorio').val();
        var pais = $('#alta-pais-consultorio').val();
        var entidad = $('#alta-entidad-consultorio').val();
        var ciudad = $('#alta-ciudad-consultorio').val();
        var delegacion = $('#alta-delegacion-consultorio').val();
        var colonia = $('#alta-colonia-consultorio').val();
        var cp = $('#alta-cp-consultorio').val();
        var direccion = $('#alta-direccion-consultorio').val();
        var telefono = $('#alta-telefono-consultorio').val();
        var email = $('#alta-email-consultorio').val();
        var web = $('#alta-web-consultorio').val();
        var face = $('#alta-face-consultorio').val();
        if (id_institucion.trim() !== "" && nombre.trim() !== "" && rfc.trim() !== "" && clave.trim() !== "" && pais.trim() !== "" && entidad.trim() !== "" && ciudad.trim() !== "" && delegacion.trim() !== "" && colonia.trim() !== "" && cp.trim() !== "" && direccion.trim() !== "" && telefono.trim() !== "" && email.trim() !== "" && web.trim() !== "" && face.trim() !== "") {
            var datos = [];
            datos = {id_institucion: id_institucion, nombre: nombre, rfc: rfc, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, web: web, face: face};
            var url = "consultorios/alta_datos.htm";
            altaDatos(datos, url, "Consultorios");
        }
    } catch (e) {
        alert(e + " btn alta consultorio");
    }
});
$('.btn-alta-instituciones').live('click', function (e) {
    e.preventDefault();
    try {
        var nombre = $('#alta-nombre-institucion').val();
        var rfc = $('#alta-rfc-institucion').val();
        var clave = $('#alta-clave-institucion').val();
        var pais = $('#alta-pais-institucion').val();
        var entidad = $('#alta-entidad-institucion').val();
        var ciudad = $('#alta-ciudad-institucion').val();
        var delegacion = $('#alta-delegacion-institucion').val();
        var colonia = $('#alta-colonia-institucion').val();
        var cp = $('#alta-cp-institucion').val();
        var direccion = $('#alta-direccion-institucion').val();
        var telefono = $('#alta-telefono-institucion').val();
        var email = $('#alta-email-institucion').val();
        var web = $('#alta-web-institucion').val();
        var face = $('#alta-facebook-institucion').val();
        var lconsult = $('#alta-lconsult-institucion').val();
        var lpatien = $('#alta-lpatien-institucion').val();
        if (nombre !== "" && rfc !== "" && clave !== "" && pais !== "" && entidad !== "" && ciudad !== "" && delegacion !== "" && colonia !== "" && cp !== "" && direccion !== "" && telefono !== "" && email !== "" && web !== "" && face !== "" && lconsult !== "" && lpatien !== "") {
            var datos = [];
            datos = {nombre: nombre, rfc: rfc, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, web: web, face: face, lconsult: lconsult, lpatien: lpatien};
            var url = "instituciones/alta_datos.htm";
            altaDatos(datos, url, "Instituciones");
        } else {
            alert("No puede haber datos vacios");
        }
    } catch (e) {
        alert(e + " btn alta institucion");
    }
});

function bajaRegistro(id_grid, id_tabla) {
    var grid = $("#" + id_grid);
    var fila = grid.jqGrid('getGridParam', "selrow");
    if (fila) {
        var id = grid.jqGrid('getCell', fila, id_tabla);
        getUrlBaja(id, id_grid);
    } else {
        alert("Debes seleccionar una fila para poder cambiar el estado");
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

//function bajaDatos(id, id_grid) {
//    switch (id_grid) {
//        case "GridAInstitucion":
//            getUrlBaja(id, id_grid);
//            break;
//        case "GridASistema":
//            navegacion("Edita_Admin_Sistema");
//            break;
//        case "GridNutriologo":
//            break;
//        case "GrigPacientes":
//            break;
//        case "GridInstituciones":
//            getUrlBaja(id, id_grid);
//            break;
//        case "GridTutor":
//            break;
//        case "GridConsultorio":
//            break;
//    }
//}

function getUrlBaja(id, id_grid) {
    switch (id_grid) {
        case "GridAInstitucion":
            bajarDatos(id, id_grid, "ainstituciones/cambia_estado.htm", "Administrador_institucion");
            break;
        case "GridNutriologo":
            bajarDatos(id, id_grid, "nutriologos/cambia_estado.htm", "Nutriologos");
            break;
        case "GridPaciente":
            bajarDatos(id, id_grid, "pacientes/cambia_estado.htm", "Pacientes");
            break;
        case "GridInstituciones":
            bajarDatos(id, id_grid, "instituciones/cambia_estado.htm", "Instituciones");
            break;
        case "GridTutor":
            bajarDatos(id, id_grid, "tutores/cambia_estado.htm", "Tutores");
            break;
        case "GridConsultorio":
            bajarDatos(id, id_grid, "consultorios/cambia_estado.htm", "Consultorios");
            break;
        case "GridASistema":
            bajarDatos(id, id_grid, "sistema/cambia_estado.htm", "Administrador_sistema");
            break;
    }
}

function obtieneDatosActualizar(id, id_grid) {
    switch (id_grid) {
        case "GridAInstitucion":
            getUrlEditar(id, id_grid, "Edita_Admin_Institucion");
            break;
        case "GridASistema":
            getUrlEditar(id, id_grid, "Edita_Admin_Sistema");
            break;
        case "GridNutriologo":
            getUrlEditar(id, id_grid, "Edita_Nutriologo");
            break;
        case "GridPaciente":
            getUrlEditar(id, id_grid, "Edita_Paciente");
            break;
        case "GridInstituciones":
            getUrlEditar(id, id_grid, "Edita_Institucion");
            break;
        case "GridTutor":
            getUrlEditar(id, id_grid, "Edita_Tutor");
            break;
        case "GridConsultorio":
            getUrlEditar(id, id_grid, "Edita_Consultorio");
            break;
    }
}

function getUrlEditar(id, id_grid, go_to) {
    switch (id_grid) {
        case'GridAInstitucion':
            editarDatos(id, "ainstituciones/obtiene_datos.htm", go_to);
            break;
        case'GridInstituciones':
            editarDatos(id, "instituciones/obtiene_datos.htm", go_to);
            break;
        case "GridTutor":
            editarDatos(id, "tutores/obtiene_datos.htm", go_to);
            break;
        case "GridNutriologo":
            editarDatos(id, "nutriologos/obtiene_datos.htm", go_to);
            break;
        case "GridPaciente":
            editarDatos(id, "pacientes/obtiene_datos.htm", go_to);
            break;
        case "GridConsultorio":
            editarDatos(id, "consultorios/obtiene_datos.htm", go_to);
            break;
        case "GridASistema":
            editarDatos(id, "sistema/obtiene_datos.htm", go_to);
            break;
    }
}

function altaDatos(datos, url, sectioncall) {
    try {
        $.ajax({
            type: "POST",
            url: url,
            async: false,
            data: datos,
            beforeSend: function () {
                load();
            },
            complete: function () {
                closeLoading();
            },
            error: function (ex) {
                alert('Ha ocurrido un error favor de intentar más tarde' + ex);
                console.log(ex);
            },
            success: function (data) {
                if (data === "ok") {
                    alert("El registro se ha dado de alta");
                    location.href = sectioncall;
                } else {
                    console.log(data);
                    alert("No se ha podido dar de alta, intente más tarde");
                }
            }
        });
    } catch (e) {
        alert(e + " Alta datos");
    }
}

function bajarDatos(id, grid, url, sections) {
    console.log(url);
    if (confirm("¿Desea cambiar el estado de este registro?")) {
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
                    console.log(data);
                    if (data === "ok") {
                        alert("El registro ha cambiado de estado correctamente");
                        location.href = sections;
                    } else {
                        console.log(data);
                        alert("No cambiar el estado del registro, intente más tarde");
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
                console.log(data);
                var datos = $.parseJSON(data);
                console.log(data);
                $.when(navegacion(sectcall)).then(function () {
                    eval(sectcall + '_fill(' + data + ')');
                });
            }
        });
    } catch (e) {
        alert(e + "EditarDatos");
    }
}

function Edita_Consultorio_fill(datos) {
    try {
        console.log(datos);
        setTimeout(function () {
            $('#edita-id-consultorio').val(datos[0]['id_consultorio']);
            $('#edita-institucion-consultorio').val(datos[0]['id_institucion']);
            $('#edita-nombre-consultorio').val(datos[0]['nombre']);
            $('#edita-rfc-consultorio').val(datos[0]['rfc']);
            $('#edita-clave-consultorio').val(datos[0]['clave']);
            $('#edita-pais-consultorio').val(datos[0]['id_pais']);
            $('#edita-entidad-consultorio').val(datos[0]['id_entidad']);
            $('#edita-ciudad-consultorio').val(datos[0]['id_ciudad']);
            $('#edita-delegacion-consultorio').val(datos[0]['id_delegacion']);
            $('#edita-colonia-consultorio').val(datos[0]['id_colonia']);
            $('#edita-cp-consultorio').val(datos[0]['codigo_postal']);
            $('#edita-direccion-consultorio').val(datos[0]['direccion']);
            $('#edita-telefono-consultorio').val(datos[0]['telefono']);
            $('#edita-email-consultorio').val(datos[0]['email']);
            $('#edita-web-consultorio').val(datos[0]['web']);
            $('#edita-face-consultorio').val(datos[0]['facebook']);
        }, 300);
    } catch (e) {
        alert(e + " edita consultorios fill");
    }
}

function Edita_Nutriologo_fill(datos) {
    try {
        console.log(datos);
        setTimeout(function () {
            $('#edita-id-nutriologo').val(datos[0]['id_nutriologo']);
            $('#edita-institucion-nutriologo').val(datos[0]['id_institucion']);
            $('#edita-consultorio-nutriologo').val(datos[0]['id_consultorio']);
            $('#edita-nombre-nutriologo').val(datos[0]['nombre']);
            $('#edita-curp-nutriologo').val(datos[0]['CURP']);
            $('#edita-clave-nutriologo').val(datos[0]['clave']);
            $('#edita-pais-nutriologo').val(datos[0]['id_pais']);
            $('#edita-entidad-nutriologo').val(datos[0]['id_entidad']);
            $('#edita-ciudad-nutriologo').val(datos[0]['id_ciudad']);
            $('#edita-delegacion-nutriologo').val(datos[0]['id_delegacion']);
            $('#edita-colonia-nutriologo').val(datos[0]['id_colonia']);
            $('#edita-cp-nutriologo').val(datos[0]['codigo_postal']);
            $('#edita-direccion-nutriologo').val(datos[0]['direccion']);
            $('#edita-telefono-nutriologo').val(datos[0]['telefono']);
            $('#edita-email-nutriologo').val(datos[0]['email']);
            $('#edita-face-nutriologo').val(datos[0]['facebook']);
            $('#edita-user-nutriologo').val(datos[0]['login']);
            $('#edita-pass-nutriologo').val(datos[0]['password']);
        }, 300);
    } catch (e) {
        alert(e + " edita consultorios fill");
    }
}

$('.btn-edit-nutriologo').live('click', function (e) {
    e.preventDefault()
    try {
        var id_nutriologo = $('#edita-id-nutriologo').val();
        var id_institucion = $('#edita-institucion-nutriologo').val();
        var id_consultorio = $('#edita-consultorio-nutriologo').val();
        var nombre = $('#edita-nombre-nutriologo').val();
        var curp = $('#edita-curp-nutriologo').val();
        var clave = $('#edita-clave-nutriologo').val();
        var pais = $('#edita-pais-nutriologo').val();
        var entidad = $('#edita-entidad-nutriologo').val();
        var ciudad = $('#edita-ciudad-nutriologo').val();
        var delegacion = $('#edita-delegacion-nutriologo').val();
        var colonia = $('#edita-colonia-nutriologo').val();
        var cp = $('#edita-cp-nutriologo').val();
        var direccion = $('#edita-direccion-nutriologo').val();
        var telefono = $('#edita-telefono-nutriologo').val();
        var email = $('#edita-email-nutriologo').val();
        var facebook = $('#edita-face-nutriologo').val();
        var usuario = $('#edita-user-nutriologo').val();
        var password = $('#edita-pass-nutriologo').val();
        if (id_nutriologo.trim() !== "" && id_institucion.trim() !== "" && id_consultorio.trim() !== "" && nombre.trim() !== "" && curp.trim() !== "" && clave.trim() !== "" && pais.trim() !== "" && entidad.trim() !== "" && ciudad.trim() !== "" && delegacion.trim() !== "" && colonia.trim() !== "" && cp.trim() !== "" && direccion.trim() !== "" && telefono.trim() !== "" && email.trim() !== "" && usuario.trim() !== "" && password.trim() !== "") {
            var datos = [];
            datos = {id_institucion: id_institucion, id_consultorio: id_consultorio, nombre: nombre, curp: curp, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, face: facebook, usr: usuario, pass: password, id_nutriologo: id_nutriologo};
            $.ajax({
                type: "POST",
                url: "nutriologos/edita_datos.htm",
                async: false,
                data: datos,
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
                    if (data === 'ok') {
                        alert("Datos actualizados");
                        location.href = "Nutriologos";
                    } else {
                        console.log(data);
                        alert("Ha ocurrido un error");
                    }
                }
            });
        }
    } catch (e) {
        alert(e + " btn edita nutriologo");
    }
});

$('.btn-edit-consultorio').live('click', function (e) {
    e.preventDefault();
    try {
        var id = $('#edita-id-consultorio').val();
        var institucion = $('#edita-institucion-consultorio').val();
        var nombre = $('#edita-nombre-consultorio').val();
        var rfc = $('#edita-rfc-consultorio').val();
        var clave = $('#edita-clave-consultorio').val();
        var pais = $('#edita-pais-consultorio').val();
        var entidad = $('#edita-entidad-consultorio').val();
        var ciudad = $('#edita-ciudad-consultorio').val();
        var delegacion = $('#edita-delegacion-consultorio').val();
        var colonia = $('#edita-colonia-consultorio').val();
        var cp = $('#edita-cp-consultorio').val();
        var direccion = $('#edita-direccion-consultorio').val();
        var telefono = $('#edita-telefono-consultorio').val();
        var email = $('#edita-email-consultorio').val();
        var web = $('#edita-web-consultorio').val();
        var face = $('#edita-face-consultorio').val();

        var datos = [];
        if (face.trim() !== "" && id.trim() !== "" && institucion.trim() !== "" && nombre.trim() !== "" && rfc.trim() !== "" && clave.trim() !== "" && pais.trim() !== "" && entidad.trim() !== "" && ciudad.trim() !== "" && delegacion.trim() !== "" && colonia.trim() !== "" && cp.trim() !== "" && direccion.trim() !== "" && telefono.trim() !== "" && email.trim() !== "" && web.trim() !== "") {
            datos = {id: id, institucion: institucion, nombre: nombre, rfc: rfc, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, web: web, face: face};
            $.ajax({
                type: "POST",
                url: "consultorios/edita_datos.htm",
                async: false,
                data: datos,
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
                    if (data === 'ok') {
                        alert("Datos actualizados");
                        location.href = "Consultorios";
                    } else {
                        alert("Ha ocurrido un error");
                    }
                }
            });
        } else {
            alert('Los datos no pueden estar vacios');
        }
    } catch (e) {
        alert(e + " btn edita consultorio");
    }
});

function Edita_Institucion_fill(datos) {
    try {
        $('#edita-id-institucion').val(datos[0]['id_institucion']);
        $('#edita-nombre-institucion').val(datos[0]['nombre']);
        $('#edita-rfc-institucion').val(datos[0]['rfc']);
        $('#edita-clave-institucion').val(datos[0]['clave']);
        $('#edita-pais-institucion').val(datos[0]['id_pais']);
        $('#edita-entidad-institucion').val(datos[0]['id_entidad']);
        $('#edita-ciudad-institucion').val(datos[0]['id_ciudad']);
        $('#edita-delegacion-institucion').val(datos[0]['id_delegacion']);
        $('#edita-colonia-institucion').val(datos[0]['id_colonia']);
        $('#edita-cp-institucion').val(datos[0]['codigo_postal']);
        $('#edita-direccion-institucion').val(datos[0]['direccion']);
        $('#edita-telefono-institucion').val(datos[0]['telefono']);
        $('#edita-email-institucion').val(datos[0]['email']);
        $('#edita-web-institucion').val(datos[0]['web']);
        $('#edita-facebook-institucion').val(datos[0]['facebook']);
        $('#edita-lconsult-institucion').val(datos[0]['limite_consultorios']);
        $('#edita-lpatien-institucion').val(datos[0]['limite_pacientes']);
    } catch (e) {
        alert(e + "Edita_Institucion_fill");
    }
}

$('.btn-edit-instituciones').live('click', function (e) {
    e.preventDefault();
    var id = $('#edita-id-institucion').val();
    var nombre = $('#edita-nombre-institucion').val();
    var rfc = $('#edita-rfc-institucion').val();
    var clave = $('#edita-clave-institucion').val();
    var pais = $('#edita-pais-institucion').val();
    var entidad = $('#edita-entidad-institucion').val();
    var ciudad = $('#edita-ciudad-institucion').val();
    var delegacion = $('#edita-delegacion-institucion').val();
    var colonia = $('#edita-colonia-institucion').val();
    var cp = $('#edita-cp-institucion').val();
    var direccion = $('#edita-direccion-institucion').val();
    var telefono = $('#edita-telefono-institucion').val();
    var email = $('#edita-email-institucion').val();
    var web = $('#edita-web-institucion').val();
    var face = $('#edita-facebook-institucion').val();
    var lconsult = $('#edita-lconsult-institucion').val();
    var lpatien = $('#edita-lpatien-institucion').val();
    var datos = [];
    try {
        if (id !== '' && nombre !== '' && rfc !== '' && clave !== '' && pais !== '' && entidad !== '' && ciudad !== '' && delegacion !== '' && colonia !== '' && cp !== '' && direccion !== '' && telefono !== '' && email !== '' && web !== '' && face !== '' && lconsult !== '' && lpatien !== '') {
            datos = {id: id, nombre: nombre, rfc: rfc, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, web: web, face: face, lconsult: lconsult, lpatien: lpatien};
            $.ajax({
                type: "POST",
                url: "instituciones/edita_datos.htm",
                async: false,
                data: datos,
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
                    if (data === 'ok') {
                        alert("Datos actualizados");
                        location.href = "Instituciones";
                    } else {
                        alert("Ha ocurrido un error");
                    }
                }
            });
        }
    } catch (e) {
        alert(e + " btn editar institucines");
    }
});

/*Llena campos con datos admin.institucion*/
function Edita_Admin_Institucion_fill(datos) {
    try {
        console.log(datos);
        $("#edita-id-admin-institucion").val(datos[0]["id_admin_institucion"]);
        $("#edita-nombre-admin-institucion").val(datos[0]['nombre']);
        $("#edita-curp-admin-institucion").val(datos[0]['CURP']);
        $("#edita-clave-admin-institucion").val(datos[0]['clave']);
        $("#edita-pais-admin-institucion").val(datos[0]['id_pais']);
        $("#edita-entidad-admin-institucion").val(datos[0]['id_entidad']);
        $("#edita-ciudad-admin-institucion").val(datos[0]['id_ciudad']);
        $("#edita-delegacion-admin-institucion").val(datos[0]['id_delegacion']);
        $("#edita-colonia-admin-institucion").val(datos[0]['id_colonia']);
        $("#edita-cp-admin-institucion").val(datos[0]['codigo_postal']);
        $("#edita-direccion-admin-institucion").val(datos[0]['direccion']);
        $("#edita-telefono-admin-institucion").val(datos[0]['telefono']);
        $("#edita-email-admin-institucion").val(datos[0]['email']);
        $("#edita-face-admin-institucion").val(datos[0]['facebook']);
        $("#edita-institucion-admin-institucion").val(datos[0]['id_institucion']);
    } catch (ex) {
        alert(ex + "Edita_Admin_institucion_fill");
    }
}

function Edita_Admin_Sistema_fill(datos) {
    try {
        console.log(datos);
        $("#edita-id-admin-sistema").val(datos[0]["id_admin_sistema"]);
        $("#edita-nombre-admin-sistema").val(datos[0]['nombre']);
        $("#edita-curp-admin-sistema").val(datos[0]['CURP']);
        $("#edita-clave-admin-sistema").val(datos[0]['clave']);
        $("#edita-pais-admin-sistema").val(datos[0]['id_pais']);
        $("#edita-entidad-admin-sistema").val(datos[0]['id_entidad']);
        $("#edita-ciudad-admin-sistema").val(datos[0]['id_ciudad']);
        $("#edita-delegacion-admin-sistema").val(datos[0]['id_delegacion']);
        $("#edita-colonia-admin-sistema").val(datos[0]['id_colonia']);
        $("#edita-cp-admin-sistema").val(datos[0]['codigo_postal']);
        $("#edita-direccion-admin-sistema").val(datos[0]['direccion']);
        $("#edita-telefono-admin-sistema").val(datos[0]['telefono']);
        $("#edita-email-admin-sistema").val(datos[0]['email']);
        $("#edita-face-admin-sistema").val(datos[0]['facebook']);
        $("#edita-institucion-admin-sistema").val(datos[0]['id_institucion']);
        $("#edita-user-admin-sistema").val(datos[0]['login']);
        $("#edita-pass-admin-sistema").val(datos[0]['password']);
    } catch (ex) {
        alert(ex + "Edita_Admin_institucion_fill");
    }
}

function Edita_Paciente_fill(datos) {
    try {
        setTimeout(function () {
            $("#edita-id-paciente").val(datos[0]["id_paciente"]);
            $("#edita-tutor-pacientes").val(datos[0]["id_tutor"]);
            $("#edita-institucion-pacientes").val(datos[0]['id_institucion']);
            $("#edita-consultorio-pacientes").val(datos[0]['id_consultorio']);
            $("#edita-nombre-pacientes").val(datos[0]['nombre']);
            $("#edita-nick-pacientes").val(datos[0]['nick_name']);
            $("#edita-foto-pacientes").val(datos[0]['fotografia']);
            $("#edita-genero-pacientes").val(datos[0]['genero']);
            $("#edita-nacimieto-pacientes").val(datos[0]['fecha_nacimiento']);
            $("#edita-estatura-pacientes").val(datos[0]['estatura_actual']);
            $("#edita-peso-pacientes").val(datos[0]['peso_actual']);
            $("#edita-grado-pacientes").val(datos[0]['id_nivel_educativo']);
            $("#edita-facebook-pacientes").val(datos[0]['facebook']);
        }, 300);
    } catch (ex) {
        alert(ex + "Edita_Paciente_fill");
    }
}

$('.btn-edita-pacientes').live('click', function (e) {
    e.preventDefault();
    try {
        var id_paciente = $("#edita-id-paciente").val();
        var id_tutor = $("#edita-tutor-pacientes").val();
        var id_institucion = $("#edita-institucion-pacientes").val();
        var id_consultorio = $("#edita-consultorio-pacientes").val();
        var nombre = $("#edita-nombre-pacientes").val();
        var nick = $("#edita-nick-pacientes").val();
        var foto = $("#edita-foto-pacientes").val();
        var genero = $("#edita-genero-pacientes").val();
        var nacimiento = $("#edita-nacimieto-pacientes").val();
        var estatura = $("#edita-estatura-pacientes").val();
        var peso = $("#edita-peso-pacientes").val();
        var grado = $("#edita-grado-pacientes").val();
        var face = $("#edita-facebook-pacientes").val();
        var datos = [];
        if (id_paciente.trim() !== "" && id_tutor.trim() !== "" && id_institucion.trim() !== "" && id_consultorio.trim() !== "" && nombre.trim() !== "" && genero.trim() !== "" && nacimiento.trim() !== "" && estatura.trim() !== "" && grado.trim() !== "") {
            datos = {id_paciente: id_paciente, id_tutor: id_tutor, id_institucion: id_institucion, id_consultorio: id_consultorio, nombre: nombre, nick: nick, foto: foto, genero: genero, nacimiento: nacimiento, estatura: estatura, peso: peso, grado: grado, face: face};
            $.ajax({
                type: "POST",
                url: "pacientes/edita_datos.htm",
                async: false,
                data: datos,
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
                    if (data === 'ok') {
                        alert("Datos actualizados");
                        location.href = "Pacientes";
                    } else {
                        alert("Ha ocurrido un error");
                    }
                }
            });
        }

    } catch (e) {
        alert(e + " btn edita pacientes");
    }
});


$('.btn-edit-admin-sistema').live('click', function (e) {
    e.preventDefault();
    try {
        var id_admon = $("#edita-id-admin-sistema").val();
        var nombre = $("#edita-nombre-admin-sistema").val();
        var curp = $("#edita-curp-admin-sistema").val();
        var clave = $("#edita-clave-admin-sistema").val();
        var pais = $("#edita-pais-admin-sistema").val();
        var entidad = $("#edita-entidad-admin-sistema").val();
        var ciudad = $("#edita-ciudad-admin-sistema").val();
        var delegacion = $("#edita-delegacion-admin-sistema").val();
        var colonia = $("#edita-colonia-admin-sistema").val();
        var cp = $("#edita-cp-admin-sistema").val();
        var direccion = $("#edita-direccion-admin-sistema").val();
        var telefono = $("#edita-telefono-admin-sistema").val();
        var email = $("#edita-email-admin-sistema").val();
        var face = $("#edita-face-admin-sistema").val();
        var usr = $("#edita-user-admin-sistema").val();
        var pass = $("#edita-pass-admin-sistema").val();
        if (id_admon !== '' && nombre !== '' && curp !== '' && clave !== '' && pais !== '' && entidad !== '' && ciudad !== '' && delegacion !== '' && colonia !== '' && cp !== '' && direccion !== '' && telefono !== '' && email !== '') {
            datos = {id_admon: id_admon, nombre: nombre, curp: curp, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, face: face, usr: usr, pass: pass};
            $.ajax({
                type: "POST",
                url: "sistema/edita_datos.htm",
                async: false,
                data: datos,
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
                    if (data === 'ok') {
                        alert("Datos actualizados");
                        location.href = "Administrador_sistema";
                    } else {
                        alert("Ha ocurrido un error");
                    }
                }
            });
        }
    } catch (e) {
        alert(e + " edit admin institucion");
    }
});

/*Editar datos de admin instituciones*/
$('.btn-edit-admin-institucion').live('click', function (e) {
    e.preventDefault();
    var id = $('#edita-id-admin-institucion').val();
    var nombre = $('#edita-nombre-admin-institucion').val();
    var clave = $('#edita-clave-admin-institucion').val();
    var pais = $('#edita-pais-admin-institucion').val();
    var entidad = $('#edita-entidad-admin-institucion').val();
    var ciudad = $('#edita-ciudad-admin-institucion').val();
    var delegacion = $('#edita-delegacion-admin-institucion').val();
    var colonia = $('#edita-colonia-admin-institucion').val();
    var cp = $('#edita-cp-admin-institucion').val();
    var direccion = $('#edita-direccion-admin-institucion').val();
    var telefono = $('#edita-telefono-admin-institucion').val();
    var email = $('#edita-email-admin-institucion').val();
    var face = $('#edita-face-admin-institucion').val();
    var curp = $('#edita-curp-admin-institucion').val();
    var institucion = $("#edita-institucion-admin-institucion").val();
    var mensaje = "";

    if (nombre.trim() === "") {
        mensaje += "Debes capturar un nombre \n";
    }
    if (clave.trim() === "") {
        mensaje += "Debes capturar una clave \n";
    }
    if (pais.trim() === "") {
        mensaje += "Debes capturar un pais \n";
    }
    if (entidad.trim() === "") {
        mensaje += "Debes capturar una entidad \n";
    }
    if (ciudad.trim() === "") {
        mensaje += "Debes capturar una ciudad \n";
    }
    if (delegacion.trim() === "") {
        mensaje += "Debes capturar una delegacion \n";
    }
    if (colonia.trim() === "") {
        mensaje += "Debes capturar una colonia \n";
    }
    if (cp.trim() === "") {
        mensaje += "Debes capturar un codigo postal \n";
    }
    if (direccion.trim() === "") {
        mensaje += "Debes capturar una direccion \n";
    }
    if (telefono.trim() === "") {
        mensaje += "Debes capturar un numero de telefono \n";
    }
    if (email.trim() === "") {
        mensaje += "Debes capturar un email \n";
    }
    if (face.trim() === "") {
        mensaje += "Debes capturar un facebook \n";
    }
    if (curp.trim() === "") {
        mensaje += "Debes capturar un curp \n";
    }
    if (institucion.trim() === "0") {
        mensaje += "Debes capturar una institucion \n";
    }
    if (mensaje.trim() !== "") {
        alert(mensaje);
    } else {
        var datos = [];
        try {
            datos = {id: id, nombre: nombre, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, face: face, curp: curp, institucion: institucion};
            $.ajax({
                type: "POST",
                url: "ainstituciones/edita_datos.htm",
                async: false,
                data: datos,
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
                    if (data === 'ok') {
                        alert("Datos actualizados");
                        location.href = "Administrador_institucion";
                    } else {
                        alert("Ha ocurrido un error");
                    }
                }
            });
        } catch (e) {
            alert(e + " btn editar admin institucion");
        }
    }
});

/*Alta administrador institucion*/
$('.btn-alta-admin-institucion').live('click', function (e) {
    e.preventDefault();
    var nombre = $('#alta-nombre-admin-institucion').val();
    var clave = $('#alta-clave-admin-institucion').val();
    var pais = $('#alta-pais-admin-institucion').val();
    var entidad = $('#alta-entidad-admin-institucion').val();
    var ciudad = $('#alta-ciudad-admin-institucion').val();
    var delegacion = $('#alta-delegacion-admin-institucion').val();
    var colonia = $('#alta-colonia-admin-institucion').val();
    var cp = $('#alta-cp-admin-institucion').val();
    var direccion = $('#alta-direccion-admin-institucion').val();
    var telefono = $('#alta-telefono-admin-institucion').val();
    var email = $('#alta-email-admin-institucion').val();
    var face = $('#alta-face-admin-institucion').val();
    var curp = $('#alta-curp-admin-institucion').val();
    var institucion = $("#alta-institucion-admin-institucion").val();
    var mensaje = "";

    if (nombre.trim() === "") {
        mensaje += "Debes capturar un nombre \n";
    }
    if (clave.trim() === "") {
        mensaje += "Debes capturar una clave \n";
    }
    if (pais.trim() === "") {
        mensaje += "Debes capturar un pais \n";
    }
    if (entidad.trim() === "") {
        mensaje += "Debes capturar una entidad \n";
    }
    if (ciudad.trim() === "") {
        mensaje += "Debes capturar una ciudad \n";
    }
    if (delegacion.trim() === "") {
        mensaje += "Debes capturar una delegacion \n";
    }
    if (colonia.trim() === "") {
        mensaje += "Debes capturar una colonia \n";
    }
    if (cp.trim() === "") {
        mensaje += "Debes capturar un codigo postal \n";
    }
    if (direccion.trim() === "") {
        mensaje += "Debes capturar una direccion \n";
    }
    if (telefono.trim() === "") {
        mensaje += "Debes capturar un numero de telefono \n";
    }
    if (email.trim() === "") {
        mensaje += "Debes capturar un email \n";
    }
    if (face.trim() === "") {
        mensaje += "Debes capturar un facebook \n";
    }
    if (curp.trim() === "") {
        mensaje += "Debes capturar un curp \n";
    }
    if (institucion.trim() === "0") {
        mensaje += "Debes capturar una institucion \n";
    }
    if (mensaje.trim() !== "") {
        alert(mensaje);
    } else {
        var datos = [];
        try {
            datos = {nombre: nombre, clave: clave, pais: pais, entidad: entidad, ciudad: ciudad, delegacion: delegacion, colonia: colonia, cp: cp, direccion: direccion, telefono: telefono, email: email, face: face, curp: curp, institucion: institucion};
            var url = "ainstituciones/alta_datos.htm";
            altaDatos(datos, url, "Administrador_institucion");
            /*Checar que valor mandar al id_login*/
        } catch (e) {
            alert(e + " btn alta admin institucion");
        }
    }
});

/*Llena campos con datos del tutor*/
function Edita_Tutor_fill(datos) {
    try {
        console.log(datos);
        $("#edita-id-tutor").val(datos[0]["id_tutor"]);
        $("#edita-nombre-tutor").val(datos[0]['nombre']);
        $("#edita-genero-tutor").val(datos[0]['genero']);
        $("#edita-fecha-nacimiento-tutor").val(datos[0]['fecha_nacimiento']);
        $("#edita-ocupacion-tutor").val(datos[0]['id_ocupacion']);
        $("#edita-institucion-tutor").val(datos[0]['id_institucion']);
        $("#edita-consultorio-tutor").val(datos[0]['id_consultorio']);
        $("#edita-estado-civil-tutor").val(datos[0]['id_estado_civil']);
        $("#edita-relacion-tutor").val(datos[0]['id_ralacion']);//Esta mas escrito en la base de datos dice ralacion 
        $("#edita-cp-tutor").val(datos[0]['codigo_postal']);
        $("#edita-telefono-tutor").val(datos[0]['telefono']);
        $("#edita-fecebook-tutor").val(datos[0]['facebook']);
    } catch (ex) {
        alert(ex + "Edita_Tutor_fill");
    }
}

/*Editar datos de admin instituciones*/
$('.btn-edit-tutor').live('click', function (e) {
    e.preventDefault();
    var id = $("#edita-id-tutor").val();
    var nombre = $("#edita-nombre-tutor").val();
    var genero = $("#edita-genero-tutor").val();
    var fecha_nacimiento = $("#edita-fecha-nacimiento-tutor").val();
    var ocupacion = $("#edita-ocupacion-tutor").val();
    var institucion = $("#edita-institucion-tutor").val();
    var consultorio = $("#edita-consultorio-tutor").val();
    var estado_civil = $("#edita-estado-civil-tutor").val();
    var relacion = $("#edita-relacion-tutor").val();//Esta mas escrito en la base de datos dice ralacion 
    var cp = $("#edita-cp-tutor").val();
    var telefono = $("#edita-telefono-tutor").val();
    var face = $("#edita-fecebook-tutor").val();

    var mensaje = "";

    if (nombre.trim() === "0") {
        mensaje += "Debes capturar un nombre \n";
    }
    if (genero.trim() === "") {
        mensaje += "Debes capturar un genero \n";
    }
    if (fecha_nacimiento.trim() === "") {
        mensaje += "Debes capturar una fecha de nacimiento \n";
    }
    if (ocupacion.trim() === "0") {
        mensaje += "Debes capturar una ocupacion \n";
    }
    if (consultorio.trim() === "0") {
        mensaje += "Debes capturar un consultorio \n";
    }
    if (estado_civil.trim() === "0") {
        mensaje += "Debes capturar un estado civil \n";
    }
    if (relacion.trim() === "0") {
        mensaje += "Debes capturar una relacion \n";
    }
    if (cp.trim() === "") {
        mensaje += "Debes capturar un codigo postal \n";
    }
    if (telefono.trim() === "") {
        mensaje += "Debes capturar un numero de telefono \n";
    }
    if (face.trim() === "") {
        mensaje += "Debes capturar un facebook \n";
    }
    if (institucion.trim() === "0") {
        mensaje += "Debes capturar una institucion \n";
    }
    if (mensaje.trim() !== "") {
        alert(mensaje);
    } else {
        var datos = [];
        try {
            datos = {id: id, nombre: nombre, genero: genero, fecha_nacimiento: fecha_nacimiento, ocupacion: ocupacion, institucion: institucion, consultorio: consultorio, estado_civil: estado_civil, cp: cp, relacion: relacion, telefono: telefono, face: face};
            $.ajax({
                type: "POST",
                url: "tutores/edita_datos.htm",
                async: false,
                data: datos,
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
                    if (data === 'ok') {
                        alert("Datos actualizados");
                        location.href = "Tutores";
                    } else {
                        alert("Ha ocurrido un error");
                    }
                }
            });
        } catch (e) {
            alert(e + " btn editar tutorn");
        }
    }
});

/*Alta tutor*/
$('.btn-alta-tutor').live('click', function (e) {
    e.preventDefault();
    var nombre = $("#alta-nombre-tutor").val();
    var genero = $("#alta-genero-tutor").val();
    var fecha_nacimiento = $("#alta-fecha-nacimiento-tutor").val();
    var ocupacion = $("#alta-ocupacion-tutor").val();
    var institucion = $("#alta-institucion-tutor").val();
    var consultorio = $("#alta-consultorio-tutor").val();
    var estado_civil = $("#alta-estado-civil-tutor").val();
    var relacion = $("#alta-relacion-tutor").val();//Esta mas escrito en la base de datos dice ralacion 
    var cp = $("#alta-cp-tutor").val();
    var telefono = $("#alta-telefono-tutor").val();
    var face = $("#alta-fecebook-tutor").val();
    var mensaje = "";

    if (nombre.trim() === "0") {
        mensaje += "Debes capturar un nombre \n";
    }
    if (genero.trim() === "") {
        mensaje += "Debes capturar un genero \n";
    }
    if (fecha_nacimiento.trim() === "") {
        mensaje += "Debes capturar una fecha de nacimiento \n";
    }
    if (ocupacion.trim() === "0") {
        mensaje += "Debes capturar una ocupacion \n";
    }
    if (consultorio.trim() === "0") {
        mensaje += "Debes capturar un consultorio \n";
    }
    if (estado_civil.trim() === "0") {
        mensaje += "Debes capturar un estado civil \n";
    }
    if (relacion.trim() === "0") {
        mensaje += "Debes capturar una relacion \n";
    }
    if (cp.trim() === "") {
        mensaje += "Debes capturar un codigo postal \n";
    }
    if (telefono.trim() === "") {
        mensaje += "Debes capturar un numero de telefono \n";
    }
    if (face.trim() === "") {
        mensaje += "Debes capturar un facebook \n";
    }
    if (institucion.trim() === "0") {
        mensaje += "Debes capturar una institucion \n";
    }
    if (mensaje.trim() !== "") {
        alert(mensaje);
    } else {
        var datos = [];
        try {
            datos = {nombre: nombre, genero: genero, fecha_nacimiento: fecha_nacimiento, ocupacion: ocupacion, institucion: institucion, consultorio: consultorio, estado_civil: estado_civil, cp: cp, relacion: relacion, telefono: telefono, face: face};
            var url = "tutores/alta_datos.htm";
            altaDatos(datos, url, "Tutores");
            /*Checar que valor mandar al id_login*/
        } catch (e) {
            alert(e + " btn alta tutor");
        }
    }
});

History.Adapter.bind(window, 'statechange', function () {
    var State = History.getState();
    seccion2 = State.url.substring(State.url.lastIndexOf('/') + 1, State.url.length);
    if (seccion2 != '') {
        getSeccion();
    }
});