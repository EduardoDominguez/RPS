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
    <c:when test="${sec eq 'edita_institucion'}">
        <div class="container-sec container-intituciones-edit flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-institucion" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-institucion"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nombre-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>RFC:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-rfc-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-clave-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pa&iacute;s:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-pais-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-entidad-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-ciudad-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-delegacion-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-colonia-institucion"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-cp-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-direccion-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-telefono-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-email-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Web:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-web-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-facebook-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorios m&aacute;ximos: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-lconsult-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pacientes m&aacute;ximos:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-lpatien-institucion"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-edit-instituciones">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'alta_institucion'}">
        <div class="container-sec container-intituciones-alta flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-alta-institucion" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nombre-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>RFC:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-rfc-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-clave-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pa&iacute;s:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-pais-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-entidad-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-ciudad-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-delegacion-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-colonia-institucion"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-cp-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-direccion-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-telefono-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-email-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Web:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-web-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-facebook-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorios m&aacute;ximos: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-lconsult-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pacientes m&aacute;ximos:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-lpatien-institucion"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-alta btn-alta-instituciones">Guardar</button>
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
    <c:when test="${sec eq 'edita_admin_institucion'}">
        <div class="container-sec container-intituciones flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-ainstitucion" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-admin-institucion"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nombre-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>CURP:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-curp-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-clave-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pa&iacute;s:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-pais-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-entidad-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-ciudad-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-face-admin-institucion"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-delegacion-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-colonia-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-cp-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-direccion-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-telefono-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-email-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-institucion-admin-institucion" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-edit-admin-institucion">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'alta_admin_institucion'}">
        <div class="container-sec container-intituciones flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-ainstitucion" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nombre-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>CURP:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-curp-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-clave-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pa&iacute;s:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-pais-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-entidad-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-ciudad-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-face-admin-institucion"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-delegacion-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-colonia-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-cp-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-direccion-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-telefono-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-email-admin-institucion"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-institucion-admin-institucion" class="combo-instituciones">
                                        <option disabled selected value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-alta-admin-institucion">Guardar</button>
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
    <c:when test="${sec eq 'edita_tutor'}">
        <div class="container-sec container-intituciones flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-ainstitucion" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-tutor"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nombre-tutor"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>G&eacute;nero </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-genero-tutor" class="combo-genero">
                                        <option disabled value ="0">Selecciona un genero</option>
                                        <option value ="M">Masculino</option>
                                        <option value ="F">Femenino</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Fecha de nacimiento: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="date" id="edita-fecha-nacimiento-tutor"/>
                                </div>
                            </div>
                             <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ocupacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-ocupacion-tutor" class="combo-ocupaciones">
                                        <option disabled value ="0">Selecciona una ocupacion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-institucion-tutor" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorio: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-consultorio-tutor" class="combo-consultorios">
                                        <option disabled value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Estado civil:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-estado-civil-tutor" class="combo-estado-civil">
                                        <option disabled value ="0">Selecciona un estado civil</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Relaci&oacute;n </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-relacion-tutor" class="combo-relaciones">
                                        <option disabled value ="0">Selecciona una relacion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-cp-tutor"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-telefono-tutor"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-fecebook-tutor"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-edit-tutor">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'alta_tutor'}">
       <div class="container-sec container-intituciones flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-ainstitucion" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nombre-tutor"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>G&eacute;nero </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-genero-tutor" class="combo-genero">
                                        <option disabled selected="" value ="0">Selecciona un genero</option>
                                        <option value ="M">Masculino</option>
                                        <option value ="F">Femenino</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Fecha de nacimiento: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="date" id="alta-fecha-nacimiento-tutor"/>
                                </div>
                            </div>
                             <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ocupacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-ocupacion-tutor" class="combo-ocupaciones">
                                        <option disabled selected value ="0">Selecciona una ocupacion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-institucion-tutor" class="combo-instituciones">
                                        <option disabled selected value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorio: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-consultorio-tutor" class="combo-consultorios">
                                        <option disabled selected value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Estado civil:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-estado-civil-tutor" class="combo-estado-civil">
                                        <option disabled selected value ="0">Selecciona un estado civil</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Relaci&oacute;n </span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-relacion-tutor" class="combo-relaciones">
                                        <option disabled selected value ="0">Selecciona una relacion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-cp-tutor"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-telefono-tutor"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-fecebook-tutor"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-alta-tutor">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:otherwise>
        <p>¡Ops!... Parece que la sección a la que se intenta acceder no existe</p>
    </c:otherwise>
</c:choose>