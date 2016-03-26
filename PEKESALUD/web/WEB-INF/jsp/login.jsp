<%-- 
    Document   : Login
    Created on : 25/03/2016, 01:25:44 PM
    Author     : ROGEPC
--%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
    HttpSession objsession = request.getSession(false);
    String user = "";
    user = (String) objsession.getAttribute("UsrPeke");
    if (!"".equals(user) && user!=null) {
        response.sendRedirect("index.jsp");
    }
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="<c:url value='/css/pekesalud.css'/>"/>
        <script type="text/javascript" src="<c:url value='/js/jquery-1.11.1.min.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/angular.min.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jquery-2-1-4.js'/>"></script> 
        <script type="text/javascript" src="<c:url value='/js/page.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/pekesalud.js'/>"></script>
        <title>PEKESALUD</title>
    </head>
    <body>
        <div id="wrapper" ng-app="myApp" ng-controller="ctrlMain">
            <div class="container-login-main flex-column center-items">
                <div class="container-login flex-column center-items">
                    <picture>
                        <img srcset="img/logo02.png" width="200px" height="50px"/>
                    </picture>
                    <input type="text" id="usr-login" ng-model="usr_login" placeholder="Usuario"/>
                    <input type="password" id="psw-login" ng-model="psw_login" placeholder="Contrase&ntilde;a"/>
                    <div class="container-login-btn flex-row around-items">
                        <button id="btn-login" ng-click="login()">Aceptar</button>
                        <button id="btn-cancel">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
