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
<div class="container-sec container-intituciones flex">
    <div class="container-subsec flex flex-column">
        <div class="menu-edit-main">
            <div class="menu-edit flex">
                <button class="btn-main-edit" id="btn-edit">Editar</button>
                <button class="btn-main-edit" id="btn-add">Agregar</button>
                <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
            </div>
        </div>
        <div class="container-grid flex center-items">
            <table id="GridInstituciones"></table>
            <div id="PagerInstituciones"></div>
        </div>
    </div>
</div>
<%
    }//End if instituciones
    if (sec.equals("pacientes")) {
%>
<div class="container-sec container-pacientes flex">
    <div class="container-subsec flex flex-column">
        <div class="menu-edit-main">
            <div class="menu-edit flex">
                <button class="btn-main-edit" id="btn-edit">Editar</button>
                <button class="btn-main-edit" id="btn-add">Agregar</button>
                <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
            </div>
        </div>
        <div class="container-sec container-pacientes">
            <table id="GridPacientes" ></table>
            <div id="PagerPacientes"></div>
        </div>
    </div>
</div>
<%
    }//End if pacientes
    if (sec.equals("usuarios")) {
%>
<div class="container-sec container-usuarios flex">
    <div class="container-subsec flex flex-column">
        <div class="menu-edit-main">
            <div class="menu-edit flex">
                <button class="btn-main-edit" id="btn-edit">Editar</button>
                <button class="btn-main-edit" id="btn-add">Agregar</button>
                <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
            </div>
        </div>
        <div class="container-sec container-usuarios">
            <table id="GridUsuarios" ></table>
            <div id="PagerUsuarios"></div>
        </div>
    </div>
</div>
<%
    }//End if usuarios
%>