<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="<c:url value='/css/pekesalud.css'/>"/>
        <script type="text/javascript" src="<c:url value='/js/jquery-1.11.1.min.js'/>"></script> 
        <script type="text/javascript" src="<c:url value='/js/jquery-2-1-4.js'/>"></script> 
        <script type="text/javascript" src="<c:url value='/js/pekesalud.js'/>"></script>
        
        <title>.::PEKESALUD::.</title>
    </head>

    <body>
        <div>
            <input type="text" placeholder ="Nombre " id="txtUsuario"/><br/>
            <input type="password" placeholder ="Password " id="txtPassword"/><br/>
            <input type="button" value="Ingresar" id="btnentrar" onclick="login()" />
        </div>
        <input type="button" value="Inserta" id="btnentrar" onclick="inserta()" /> <label>insert into pekesalud_bd.prueba values(0,'Mario', CURDATE())</label><br/>
        <input type="button" value="Borra" id="btnentrar" onclick="borra()" />"El registro agregado antes"
        <div id="tabla"></div>
    </body>
</html>
