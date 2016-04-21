/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var acciones = angular.module('acciones', []);
var menu1 = angular.module('menu', []);
var contenido = angular.module('contenido', ["menu"]);
page('/PEKESALUD/:section', getSeccion);
page();

var sx = 980, sy = 650, seccion2, llamar_modulos = true;
$(document).ready(function () {
    try {
        console.log("Cargado!");
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
    } catch (error) {
        alert(error);
    }
});
function getSeccion(obj) {
    try {
        seccion2 = obj.params.section.toLowerCase();
        contenido.controller('ctrContenido', function ($scope, $http) {
            function Init() {
                var datos = [];
                var url = "contenidos";
                datos = {sec: seccion2};
                $http({
                    url: url,
                    method: "GET",
                    params: datos
                }).then(function mySucces(response) {
                    $("#contenido").html("");
                    $('#contenido').append(response.data).after(function () {
                        Section(seccion2);
                    });
                }, function myError(response) {
                    alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                });
            }
            Init();
            function Section(ctx) {
                switch (ctx) {
                    case 'login':
                        break;
                    case 'home':
                        break;
                    case 'usuarios':
                        getUsuarios();
                        cargaGridUsuarios();
                        break;
                    case 'instituciones':
                        getInstitutions();
                        cargaGridInstituciones();
                        getMenu('1');
                        break;
                    case 'pacientes':
                        getPacientes();
                        cargarGridPacientes();
                        getMenu('7');
                        break;
                    case'administrador_sistema':
                        getASistema();
                        cargarGridASistema();
                        getMenu('5');
                        break;
                    case'administrador_institucion':
                        getAInstitucion();
                        cargarGridAInstitucion();
                        getMenu('6');
                        break;
                    case'nutriologos':
                        getNutriologos();
                        cargarGridNutriologo();
                        getMenu('3');
                        break;
                    case'consultorios':
                        getConsultorios();
                        cargarGridConsultorio();
                        getMenu('2');
                        break;
                    case'tutores':
                        getTutores();
                        cargarGridTutor();
                        getMenu('4');
                        break;
                }
            }

            function getTutores() {
                try {
                    var url = "tutores/getTutor.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        fillGrids(response.data, "GridTutor");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

            function getMenu(id_modulo) {
                console.log(id_modulo);
                try {
                    //$scope.buttons1 = function () {
                    var datos = [];
                    datos = {'id_modulo': id_modulo};
                    var url = "menu/getMenu.htm";
                    $http({
                        url: url,
                        method: "POST",
                        params: datos
                    }).then(function mySucces(response) {
                        console.log(response.data);
                        $scope.buttons = response.data;
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });

                    //};
                } catch (e) {
                    alert(e);
                }
            }

            function getConsultorios() {
                try {
                    var url = "consultorios/getConsultorios.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        fillGrids(response.data, "GridConsultorio");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

            function getNutriologos() {
                try {
                    var url = "nutriologos/getNutriologo.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        fillGrids(response.data, "GridNutriologo");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

            function getAInstitucion() {
                try {
                    var url = "ainstituciones/getAInstitutions.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        fillGrids(response.data, "GridAInstitucion");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

            function getInstitutions() {
                try {
                    var url = "instituciones/getInstitutions.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        fillGrids(response.data, "GridInstituciones");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

            function getASistema() {
                try {
                    var url = "sistema/getAdminSistema.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        fillGrids(response.data, "GridASistema");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

            function getUsuarios() {
                try {
                    var url = "usuarios/getUsuarios.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        console.log(response.data);
                        fillGrids(response.data, "GridUsuarios");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

            function getPacientes() {
                try {
                    var url = "pacientes/getPacientes.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        console.log(response.data);
                        fillGrids(response.data, "GridPacientes");
                    }, function myError(response) {
                        alert('Ha ocurrido un error favor de intentar más tarde' + response.data);
                    });
                } catch (e) {
                    alert(e);
                }
            }

        });
    } catch (error) {
        alert(error);
    }
}



function cargarGridTutor() {
    var paginador;
    //Creando la Tabla
    $("#GridTutor").jqGrid({
        datatype: "local",
        height: 'auto',
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', 'relación', "estado"],
        colModel: [
            {
                name: 'id_tutor',
                index: 'id_tutor',
                width: 20,
                align: 'center'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 150,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'relacion',
                index: 'relacion',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 100,
                align: 'center',
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
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', 'email', "Fecha Alta", "Estado"],
        colModel: [
            {
                name: 'id_admin_sistema',
                index: 'id_admin_sistema',
                width: 20,
                align: 'center'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 150,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 100,
                align: 'center',
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
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'institución', 'nombre', 'email', "Fecha Alta", "Estado"],
        colModel: [
            {
                name: 'id_consultorio',
                index: 'id_consultorio',
                width: 20,
                align: 'center'
            },
            {
                name: 'institucion',
                index: 'institucion',
                width: 150,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 100,
                align: 'center',
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
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'consultorio', 'teléfono', "email", 'fecha alta', 'estado'],
        colModel: [
            {
                name: 'id_nutriologo',
                index: 'id_nutriologo',
                width: 15,
                align: 'center'
            },
            {
                name: 'nutriologo',
                index: 'nutriologo',
                width: 150,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 100,
                align: 'center',
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
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', 'email', "fecha_alta", 'institución', 'estado'],
        colModel: [
            {
                name: 'id_admin_institucion',
                index: 'id_admin_institucion',
                width: 15,
                align: 'center'
            },
            {
                name: 'persona',
                index: 'persona',
                width: 150,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 100,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 100,
                align: 'center',
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
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'teléfono', "email", "fecha_alta", "Estado"],
        colModel: [
            {
                name: 'id_institucion',
                index: 'id_institucion',
                width: 50,
                align: 'center'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 300,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'telefono',
                index: 'telefono',
                width: 100,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'email',
                index: 'email',
                width: 100,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            }
            ,
            {
                name: 'fecha_alta',
                index: 'fecha_alta',
                width: 100,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 50,
                align: 'center',
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
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id', 'nombre', 'genero', 'fecha de nacimiento', 'estatura', "peso", 'Estado'],
        colModel: [
            {
                name: 'id_paciente',
                index: 'id_paciente',
                width: 100,
                align: 'center'
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 200,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'genero',
                index: 'genero',
                width: 150,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'fecha_nacimiento',
                index: 'fecha_nacimiento',
                width: 250,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estatura_actual',
                index: 'estatura_actual',
                width: 80,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'peso_actual',
                index: 'peso_actual',
                width: 80,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'estado',
                index: 'estado',
                width: 80,
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
    for (var i = 0; i <= datos.length; i++)
        $("#" + idgrid).jqGrid('addRowData', i + 1, datos[i]);
}

/*Controlador especificamente del menu*/
menu1.controller('ctrlMenu', function ($scope, $http, $log) {
    $scope.cerrarSesion = function () {
        var url = "login/salir.htm";
        $http({
            url: url,
            method: "POST"
        }).then(function mySucces(response) {
            if (response.data === "fail") {
                alert('Ha ocurrido un error al intentar cerrar la sesión, favor de intentarlo nuevamente');
            } else {
                location.href = "Login";
            }
        }, function myError(response) {
            alert('Ha ocurrido un error favor de intentar más tarde');
        });
    };

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

    /*Para la navecación entre secciones*/
    $scope.navegacion = function (nameSec) {
        nameSec = createUrl(nameSec);
        location.href = nameSec;
    };
    $scope.popUp = function (ele) {
        if (ele !== seccion2) {
            $("#popUpMenu_" + ele).fadeIn(1000);
        }
    };
    $scope.hiddepopUp = function (ele) {
        console.log(ele);
        $("#popUpMenu_" + ele).fadeOut(400);
    };
    $scope.modulos = function () {
        console.log(llamar_modulos);
        if (llamar_modulos === true) {
            var url = "login/modulos.htm";
            $http({
                url: url,
                method: "POST"
            }).then(function mySucces(response) {
                $scope.menu = response.data;
            }, function myError(response) {
                alert('Ha ocurrido un error inesperado');
            });
            llamar_modulos = false;
            console.log("entro");
            console.log(llamar_modulos);
        }
    };
});

var app = angular.module('myApp', []);
app.controller('ctrlMain', function ($scope, $http) {
    $scope.limpiar = function () {
        $scope.usr_login = "";
        $scope.psw_login = "";
    };
    $scope.login = function () {
        var usuario = $scope.usr_login.trim();
        var pass = $scope.psw_login.trim();
        if (usuario === "") {
            alert("Debes ingresar tu nombre de usuario");
            if (pass === "") {
                alert("Debes ingresar tu contraseña");
            }
        } else {
            var datos = [];
            var url = "logueo";
            datos = {usr: usuario, psw: pass};
            $http({
                url: url,
                method: "POST",
                params: datos
            }).then(function mySucces(response) {
                //console.log(response.data);
                switch (response.data) {
                    case "ok" :
                        alert('Bienvenido');
                        location.href = "Home";
                        break;
                    case "caduco" :
                        alert('Su password ha caducado, favor de cambiarlo');
                        break;
                    default :
                        alert(response.data);
                        break;
                }
            }, function myError(response) {
                alert('Ha ocurrido un error favor de intentar más tarde');
            });
        }

    };
});

function login() {
    var url = "login/ingresar.htm";
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        data: {
            "nombreUsuario": $("#txtUsuario").val(),
            "passwordUsuario": $("#txtPassword").val()
        },
        beforeSend: function () {

        },
        success: function (data) {
            console.log(data);
            var datos = $.parseJSON(data);
            console.log(datos);
            var tabla = "<table border = 1><tr><td>id</td><td>login</td><td>Contraseña</td><td>e_mail</td><td>Estado</td><td>fecha_alta<td>fecha_baja</td><td>fecha_vig_login</td><td>pregunta</td><td>tipo_usuario</td></tr>";
            $.each(datos, function (i, v) {
                tabla += "<tr><td>" + v["id_login"] + "</td>";
                tabla += "<td>" + v["login"] + "</td>";
                tabla += "<td>" + v["contrasena"] + "</td>";
                tabla += "<td>" + v["e_mail"] + "</td>";
                tabla += "<td>" + v["estado"] + "</td>";
                tabla += "<td>" + v["fecha_alta"] + "</td>";
                tabla += "<td>" + v["fecha_baja"] + "</td>";
                tabla += "<td>" + v["fecha_vigencia_login"] + "</td>";
                tabla += "<td>" + v["pregunta"] + "</td>";
                tabla += "<td>" + v["tipo_usuario"] + "</td></tr>";
            });
            tabla += "</table>";
            $("#tabla").html(tabla);
        }
    });
}
function inserta() {
    var url = "login/inserta.htm";
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        data: {},
        beforeSend: function () {

        },
        success: function (data) {
            alert(data);
        }
    });
}

function borra() {
    var url = "login/borra.htm";
    $.ajax({
        type: "POST",
        url: url,
        async: false,
        data: {},
        beforeSend: function () {

        },
        success: function (data) {
            alert(data);
        }
    });
}