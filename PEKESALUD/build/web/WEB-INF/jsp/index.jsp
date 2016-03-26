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
    if ("".equals(user) || user==null) {
        response.sendRedirect("Login");
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
        <div id="wrapper">
            <div class="flex-column container-home"></div>
        </div>
    </body>
</html>
