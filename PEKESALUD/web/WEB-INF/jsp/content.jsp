<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String sec = request.getParameter("sec").toString().toLowerCase();
    if (sec.equals("home")) {
%>
<div class="container-sec">
</div>
<%
    }//End if home
    if (sec.equals("instituciones")) {
%>
<div class="container-sec" ng-controller="ctrInstitutions">
    <%--<table id="tbl-institutions">
        <tr>
            <th>Id instituci&oacute;n</th>
            <th>Nombre</th>
            <th>Pa&iacute;s</th>
            <th>Ciudad</th>
            <th>Editar</th>
        </tr>
    </table>--%>
    <table id="GridInstituciones" ></table>
    <div id="PagerInstituciones"></div>
</div>
<%
    }//End if instituciones
    if (sec.equals("pacientes")) {
%>

<%
    }//End if pacientes
    if (sec.equals("usuarios")) {
        out.print("<h1>Usuarios</h1>"
                + "<input type='button' value='Cambiar a home' onclick='location.href = \"Home\"'></input>");
    }//End if usuarios
%>