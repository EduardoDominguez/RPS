<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String sec = request.getParameter("sec").toString().toLowerCase();
    if (sec.equals("home")) {
%>
<div class="container-sec">
</div>
<%
    }
    if (sec.equals("instituciones")) {
%>
<div class="container-sec">
    <table>
        <tr>
            <th>Id instituci&oacute;n</th>
            <th>Nombre</th>
            <th>Pa&iacute;s</th>
            <th>Ciudad</th>
            <th>Editar</th>
        </tr>
    </table>
</div>
<%
    }
    if (sec.equals("pacientes")) {
        out.print("<h1>Pacientes</h1>"
                + "<input type='button' value='Cambiar a home' onclick='location.href = \"Home\"'></input>");
    }
    if (sec.equals("usuarios")) {
        out.print("<h1>Usuarios</h1>"
                + "<input type='button' value='Cambiar a home' onclick='location.href = \"Home\"'></input>");
    }
%>