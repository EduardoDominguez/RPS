/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var menu1 = angular.module('menu', []);
var contenido = angular.module('contenido', ["menu"]);
page('/PEKESALUD/:section', getSeccion);
page();

var sx = 980, sy = 650, seccion2;
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
                        break;
                    case 'instituciones':
                        getInstitutions();
                        cargaGrid();
                        break;
                    case 'pacientes':
                        break;
                }
            }
            function getInstitutions() {
                try {
                    var url = "instituciones/getInstitutions.htm";
                    $http({
                        url: url,
                        method: "POST"
                    }).then(function mySucces(response) {
                        //console.log(response.data);
                        //var datos= JSON.stringify(response.data);
                        //$('#tbl-institutions').append(response.data);
                        fillGrids(response.data, "GridInstituciones");
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

function cargaGrid() {
    var paginador;
    //Creando la Tabla
    $("#GridInstituciones").jqGrid({
        datatype: "local",
        height: 'auto',
        width: 'auto',
        rowNum: 10,
        rowList: [10, 20, 30, 40, 100],
        colNames: ['id_institucion', 'n_ciudad', 'n_pais', "nombre"],
        colModel: [
            {
                name: 'id_institucion',
                index: 'id_institucion',
                width: 100,
                align: 'center'
            },
            {
                name: 'n_ciudad',
                index: 'n_ciudad',
                width: 300,
                align: 'center',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'n_pais',
                index: 'n_pais',
                width: 100,
                align: 'left',
                searchoptions: {
                    sopt: ['cn']
                }
            },
            {
                name: 'nombre',
                index: 'nombre',
                width: 100,
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
        caption: "Tabla Ejemplo de instituciones",
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
    /*Para la navecación entre secciones*/
    $scope.navegacion = function (nameSec) {
        location.href = nameSec;
    };
    $scope.popUp = function (ele) {
         console.log(ele);     
         if(ele!=seccion2){$("#popUpMenu_"+ele).fadeIn(1000);}
    };
    $scope.hiddepopUp = function(ele){
        console.log(ele);     
        $("#popUpMenu_"+ele).fadeOut(400);
    };
});

var app = angular.module('myApp', []);
app.controller('ctrlMain', function ($scope, $http) {
    $scope.login = function () {
        var datos = [];
        var url = "logueo";
        datos = {usr: $scope.usr_login, psw: $scope.psw_login};
        $http({
            url: url,
            method: "POST",
            params: datos
        }).then(function mySucces(response) {
            if (response.data === "fail") {
                alert('Usuario y/o password incorrecto');
            } else if (response.data === "fail") {
                alert('Ha ocurrido un error al intentar acceder a la base de datos, favor de verificarlo');
            } else {
                alert('Bienvenido');
                location.href = "Home";
            }
        }, function myError(response) {
            alert('Ha ocurrido un error favor de intentar más tarde');
        });
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