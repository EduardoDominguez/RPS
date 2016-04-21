<%-- 
    Document   : index
    Created on : 25/03/2016, 01:13:27 PM
    Author     : ROGEPC
--%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
    HttpSession objsession = request.getSession(false);
    String user = "";
    user = (String) objsession.getAttribute("UsrPeke");
    if ("".equals(user) || user == null) {
        response.sendRedirect("Login");
    }
%>
<html ng-app="contenido" ng-controller="ctrContenido" >
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="<c:url value='/css/pekesalud.css'/>"/>
        <link rel="stylesheet" type="text/css" href="<c:url value='/css/jqgrid/ui.jqgrid.css'/>"/>
        <link rel="stylesheet" type="text/css" href="<c:url value='/css/jqgrid/jquery-ui-1.8.10.custom.css'/>"/>
        <script type="text/javascript" src="<c:url value='/js/jquery-1.11.1.min.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/angular.min.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jquery-2-1-4.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/page.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jqgrid/jquery-1.7.2.min.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jqgrid/jquery.jqGrid.min.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jqgrid/i18n/grid.locale-es.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/page.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/pekesalud.js'/>"></script>
        <title>PEKESALUD</title>
    </head>
    <body>
        <div id="wrapper" class="flex flex-row">
            <div id="menu" ng-app="menu" ng-controller="ctrlMenu" ng-init="modulos()">
                <div class="flex flex-column">
                    <picture><img srcset="img/logo02.png" width="200px" height="50px"/></picture>
                    <ul class = "flex flex-column justify-space-around align-content-flex-start">
                        <li ng-repeat="m in menu" ng-click="navegacion(m.nombre_modulo)">{{ m.nombre_modulo }}</li>                        
                        <%--<li ng-mouseover="popUp('home')" ng-mouseleave="hiddepopUp('home')" ng-click="navegacion('Home')">Inicio</li>
                        <%--<div class="popUpMenu" id="popUpMenu_home"><p>Para volver al inicio</p></div>
                        <li ng-mouseover="popUp('instituciones')" ng-mouseleave="hiddepopUp('instituciones')" ng-click="navegacion('Instituciones')">Instituciones</li>
                        <div class="popUpMenu" id="popUpMenu_instituciones"><p>En esta sección se mostrarán los detalles de la Institución en la que se encuentra el usuario actual.</p></div>
                        <li ng-mouseover="popUp('pacientes')" ng-mouseleave="hiddepopUp('pacientes')" ng-click="navegacion('Pacientes')">Pacientes</li>
                        <div class="popUpMenu" id="popUpMenu_pacientes"><p>En esta sección se le mostrarán los usuarios registrados en la institución actual.</p></div>
                        <li ng-mouseover="popUp('usuarios')" ng-mouseleave="hiddepopUp('usuarios')" ng-click="navegacion('Usuarios')">Usuarios</li>
                        <div class="popUpMenu" id="popUpMenu_usuarios"><p>En esta sección se le mostrarán los usuarios registrados en la institución actual.</p></div>
                        --%>
                        <li ng-click="cerrarSesion()">Cerrar sesi&oacute;n</li>
                    </ul>
                </diV>
            </div>
            <div id="contenido" class="flex flex-column container-home" >
                <%--{{contenido}}--%>
            </div>
        </div>
    </body>
</html>
