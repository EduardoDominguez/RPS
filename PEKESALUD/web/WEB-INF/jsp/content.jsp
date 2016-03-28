<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String sec=request.getParameter("sec").toString().toLowerCase();
    if(sec.equals("home")){
        out.print("<h1>Hola</h1>");
    }
    if(sec.equals("instituciones")){
        out.print("<h1>Instituciones</h1>"
                + "<input type='button' value='Cambiar a home' onclick='location.href = \"Home\"'></input>");
    }
    if(sec.equals("pacientes")){
        out.print("<h1>Pacientes</h1>"
                + "<input type='button' value='Cambiar a home' onclick='location.href = \"Home\"'></input>");
    }
    if(sec.equals("usuarios")){
        out.print("<h1>Usuarios</h1>"
                + "<input type='button' value='Cambiar a home' onclick='location.href = \"Home\"'></input>");
    }
%>