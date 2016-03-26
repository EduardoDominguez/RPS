/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
page('/PEKESALUD/:section', Section);
page();
function Section(ctx){
    switch(ctx.params.section.toLowerCase()){
        case'login':
            break;
    }
}
var app = angular.module('myApp', []);
app.controller('ctrlMain', function($scope, $http) {
    $scope.login = function() {
        var datos=[];
        var url = "logueo";
        datos={usr:$scope.usr_login, psw:$scope.psw_login};
        $http({
            url: url, 
            method: "POST",
            params: datos
        }).then(function mySucces(response) {
            if(response.data!=="fail"){
               alert('Logueo correcto');
               location.href="Home";
            }else{
                alert('Usuario y/o password incorrecto');
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
                tabla += "<tr><td>"+v["id_login"]+"</td>";
                tabla += "<td>"+v["login"]+"</td>";
                tabla += "<td>"+v["contrasena"]+"</td>";
                tabla += "<td>"+v["e_mail"]+"</td>";
                tabla += "<td>"+v["estado"]+"</td>";
                tabla += "<td>"+v["fecha_alta"]+"</td>";
                    tabla += "<td>"+v["fecha_baja"]+"</td>";
                tabla += "<td>"+v["fecha_vigencia_login"]+"</td>";
                tabla += "<td>"+v["pregunta"]+"</td>";
                tabla += "<td>"+v["tipo_usuario"]+"</td></tr>";
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
        data: {        },
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
        data: {        },
        beforeSend: function () {
           
        },
        success: function (data) {
            alert(data);
        }
    });
 }