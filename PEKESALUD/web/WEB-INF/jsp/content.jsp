<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<c:set var="sec" scope="request" value="<%=request.getParameter("sec").toString().toLowerCase()%>"/>
<p>Te encuentras en: <c:out value="${sec}"/></p>
<c:choose>
    <c:when test="${sec eq 'home'}">
        <div class="container-sec"></div>
    </c:when>
    <c:when test="${sec eq 'instituciones'}">
        <div class="container-sec container-intituciones flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex"></div>
                </div>
                <div class="container-grid flex center-items">
                    <table id="GridInstituciones"></table>
                    <div id="PagerInstituciones"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'edita_admin_institucion'}">
        <div class="container-sec container-intituciones flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-ainstitucion">
                    Nombre: <input type ="text" id="edita-nombre-admin-institucion"/>
                    CURP: <input type ="text" id="edita-curp-admin-institucion"/>
                    Clave: <input type ="text" id="edita-clave-admin-institucion"/>
                    Pa&iacute;s: <input type ="text" id="edita-pais-admin-institucion"/>
                    Entidad: <input type ="text" id="edita-entidad-admin-institucion"/>
                    Ciudad: <input type ="text" id="edita-ciudad-admin-institucion"/>
                    Delegacion:  <input type ="text" id="edita-delegacion-admin-institucion"/>
                    Colonia  <input type ="text" id="edita-colonia-admin-institucion"/>
                    C&oacute;digo postal:  <input type ="text" id="edita-cp-admin-institucion"/>
                    Direcci&oacute;n:  <input type ="text" id="edita-direccion-admin-institucion"/>
                    Tel&eacute;fono:  <input type ="text" id="edita-telefono-admin-institucion"/>
                    email:  <input type ="text" id="edita-email-admin-institucion"/>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'edita_institucion'}">
        <div class="container-sec container-intituciones-edit flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-institucion">
                    Nombre: <input type ="text" id="edita-nombre-institucion"/>
                    RFC: <input type ="text" id="edita-rfc-institucion"/>
                    Clave: <input type ="text" id="edita-clave-institucion"/>
                    Pa&iacute;s: <input type ="text" id="edita-pais-institucion"/>
                    Entidad: <input type ="text" id="edita-entidad-institucion"/>
                    Ciudad: <input type ="text" id="edita-ciudad-institucion"/>
                    Delegacion:  <input type ="text" id="edita-delegacion-institucion"/>
                    Colonia  <input type ="text" id="edita-colonia-institucion"/>
                    C&oacute;digo postal:  <input type ="text" id="edita-cp-institucion"/>
                    Direcci&oacute;n:  <input type ="text" id="edita-direccion-institucion"/>
                    Tel&eacute;fono:  <input type ="text" id="edita-telefono-institucion"/>
                    email:  <input type ="text" id="edita-email-institucion"/>
                    Web  <input type ="text" id="edita-web-institucion"/>
                    Facebook:  <input type ="text" id="edita-facebook-institucion"/>
                    Consultorios máximos:  <input type ="text" id="edita-lconsult-institucion"/>
                    Pacientes máximos:  <input type ="text" id="edita-lpatien-institucion"/>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'pacientes'}">
        <div class="container-sec container-pacientes flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                        <button ng-repeat="b in buttons" class="btn-main-edit" id="btn-{{b.nombre}}">{{ m.nombre_modulo}}</button>
                    </div>
                </div>
                <div class="container-grid flex center-items">
                    <table id="GridPacientes" ></table>
                    <div id="PagerPacientes"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'usuarios'}">
        <div class="container-sec container-usuarios flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                        <button class="btn-main-edit" id="btn-edit">Editar</button>
                        <button class="btn-main-edit" id="btn-add">Agregar</button>
                        <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
                    </div>
                </div>
                <div class="container-grid flex center-items">
                    <table id="GridUsuarios" ></table>
                    <div id="PagerUsuarios"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'administrador_sistema'}">
        <div class="container-sec container-asistema flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                        <button class="btn-main-edit" id="btn-edit">Editar</button>
                        <button class="btn-main-edit" id="btn-add">Agregar</button>
                        <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
                    </div>
                </div>
                <div class="container-grid flex center-items">
                    <table id="GridASistema" ></table>
                    <div id="PagerASistema"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'administrador_institucion'}">
        <div class="container-sec container-ainstitucion flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                        <button class="btn-main-edit" id="btn-edit">Editar</button>
                        <button class="btn-main-edit" id="btn-add">Agregar</button>
                        <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
                    </div>
                </div>
                <div class="container-grid center-items flex">
                    <table id="GridAInstitucion" ></table>
                    <div id="PagerAInstitucion"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'nutriologos'}">
        <div class="container-sec container-nutriologo flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                        <button class="btn-main-edit" id="btn-edit">Editar</button>
                        <button class="btn-main-edit" id="btn-add">Agregar</button>
                        <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
                    </div>
                </div>
                <div class="container-grid flex center-items">
                    <table id="GridNutriologo" ></table>
                    <div id="PagerNutriologo"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'consultorios'}">
        <div class="container-sec container-consultorio flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                        <button class="btn-main-edit" id="btn-edit">Editar</button>
                        <button class="btn-main-edit" id="btn-add">Agregar</button>
                        <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
                    </div>
                </div>
                <div class="container-grid center-items flex">
                    <table id="GridConsultorio" ></table>
                    <div id="PagerConsultorio"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'tutores'}">
        <div class="container-sec container-tutor flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                        <button class="btn-main-edit" id="btn-edit">Editar</button>
                        <button class="btn-main-edit" id="btn-add">Agregar</button>
                        <button class="btn-main-edit" id="btn-stus">Cambiar Estatus</button>
                    </div>
                </div>
                <div class="container-grid center-items flex">
                    <table id="GridTutor" ></table>
                    <div id="PagerTutor"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:otherwise>
        <p>¡Ops!... Parece que la sección a la que se intenta acceder no existe</p>
    </c:otherwise>
</c:choose>