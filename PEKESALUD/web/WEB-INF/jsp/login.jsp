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
    if (!"".equals(user) && user != null) {
        response.sendRedirect("Home");
    }
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="<c:url value='/css/pekesalud.css'/>"/>
        <script type="text/javascript" src="<c:url value='/js/jquery-1.11.1.min.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/jquery-2-1-4.js'/>"></script> 
        <script type="text/javascript" src="<c:url value='/js/page.js'/>"></script>
        <script type="text/javascript" src="<c:url value='/js/pekesalud.js'/>"></script>
        <title>PEKESALUD</title>
    </head>
    <body>
        <div id="wrapper">
            <div class="container-login-main flex flex-column center-items">
                <div class="container-login flex flex-column center-items">
                    <picture>
                        <img srcset="img/logo02.png" width="200px" height="50px"/>
                    </picture>
                    <input type="text" id="usr-login" required="" placeholder="Usuario"/>
                    <input type="password" id="psw-login" required placeholder="Contrase&ntilde;a"/>
                    <div class="container-login-btn flex flex-row around-items" id="contenedor-login">
                        <button id="btn-login" onclick="login()">Aceptar</button>
                        <button id="btn-cancel" onclick="limpiar()">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
