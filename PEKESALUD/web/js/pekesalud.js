/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function login() {
    var url = "login/ingresar.htm";
    $.ajax({
        type: "GET",
        url: url,
        async: false,
        data: {
            "nombreUsuario": $("#txtUsuario").val(),
            "passwordUsuario": $("#txtPassword").val()
        },
        beforeSend: function () {
            //            jQuery.blockUI({//Muestra mensaje de espere un momento
            //                message: '<h1>Espere un momento...</h1>'
            //            });
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