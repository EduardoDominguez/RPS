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
    <c:when test="${sec eq 'edita_consultorio'}">
        <div class="container-sec container-consultorio-edit flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-consultorio" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-consultorio"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-institucion-consultorio" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nombre-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>RFC: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-rfc-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-clave-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pais:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-pais-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-entidad-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-ciudad-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegaci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-delegacion-consultorio"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-colonia-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-cp-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-direccion-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-telefono-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-email-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Web:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-web-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-face-consultorio"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-edit-consultorio">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'edita_nutriologo'}">
        <div class="container-sec container-nutriologo-edit flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-nutriologo" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-nutriologo"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-institucion-nutriologo" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorio</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-consultorio-nutriologo" class="combo-consultorios">
                                        <option disabled value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nombre-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>CURP: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-curp-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-clave-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pais:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-pais-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-entidad-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-ciudad-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegaci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-delegacion-nutriologo"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-colonia-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-cp-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-direccion-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-telefono-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-email-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-face-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Usuario: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-user-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Password: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="password" id="edita-pass-nutriologo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-edit-nutriologo">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'alta_nutriologo'}">
        <div class="container-sec container-nutriologo-alta flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-alta-nutriologo" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-nutriologo"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-institucion-nutriologo" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorio</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-consultorio-nutriologo" class="combo-consultorios">
                                        <option disabled value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nombre-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>CURP: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-curp-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-clave-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pais:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-pais-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-entidad-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-ciudad-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegaci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-delegacion-nutriologo"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-colonia-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-cp-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-direccion-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-telefono-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-email-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-face-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Usuario: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-user-nutriologo"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Password: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="password" id="alta-pass-nutriologo"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-alta btn-alta-nutriologo">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'alta_consultorio'}">
        <div class="container-sec container-consultorio-alta flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-alta-consultorio" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-institucion-consultorio" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nombre-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>RFC: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-rfc-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-clave-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pais:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-pais-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-entidad-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-ciudad-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegaci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-delegacion-consultorio"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-colonia-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-cp-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-direccion-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-telefono-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-email-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Web:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-web-consultorio"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span> Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-face-consultorio"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-alta btn-alta-consultorio">Guardar</button>
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
    <c:when test="${sec eq 'edita_paciente'}">
        <div class="container-sec container-paciente-edita flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-paciente" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-paciente"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tutor:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-tutor-pacientes" class="combo-tutores">
                                        <option disabled value ="0">Selecciona un tutor</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-institucion-pacientes" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorio:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-consultorio-pacientes" class="combo-consultorios">
                                        <option disabled value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nombre-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nick Name:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nick-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Fotografia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-foto-pacientes"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Genero:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-genero-pacientes">
                                        <option disabled value ="0">Selecciona un Genero</option>
                                        <option value ="F">Femenino</option>
                                        <option value ="M">Masculino</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Fecha de Nacimiento:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="date" id="edita-nacimieto-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Estatura:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-estatura-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Peso:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-peso-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Grado:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="edita-grado-pacientes" class="combo-educativo">
                                        <option disabled value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-facebook-pacientes"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-alta btn-edita-pacientes">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'alta_paciente'}">
        <div class="container-sec container-paciente-alta flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-alta-paciente" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="alta-id-paciente"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tutor:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-tutor-pacientes" class="combo-tutores">
                                        <option disabled value ="0">Selecciona un tutor</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Instituci&oacute;n</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-institucion-pacientes" class="combo-instituciones">
                                        <option disabled value ="0">Selecciona una institucion</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Consultorio:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-consultorio-pacientes" class="combo-consultorios">
                                        <option disabled value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nombre-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nick Name:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nick-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Fotografia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-foto-pacientes"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Genero:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-genero-pacientes">
                                        <option disabled value ="0">Selecciona un Genero</option>
                                        <option value ="F">Femenino</option>
                                        <option value ="M">Masculino</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Fecha de Nacimiento:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="date" id="alta-nacimieto-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Estatura:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-estatura-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Peso:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-peso-pacientes"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Grado:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <select id="alta-grado-pacientes" class="combo-educativo">
                                        <option disabled value ="0">Selecciona un consultorio</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-facebook-pacientes"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-alta btn-alta-pacientes">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'pacientes'}">
        <div class="container-sec container-pacientes flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
                    </div>
                </div>
                <div class="container-grid flex center-items">
                    <table id="GridPaciente" ></table>
                    <div id="PagerPaciente"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'usuarios'}">
        <div class="container-sec container-usuarios flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
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
                    </div>
                </div>
                <div class="container-grid flex center-items">
                    <table id="GridASistema" ></table>
                    <div id="PagerASistema"></div>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'edita_admin_sistema'}">
        <div class="container-sec container-asistema flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-edita-asistema" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <input type="hidden" id="edita-id-admin-sistema"/>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-nombre-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>CURP:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-curp-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-clave-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pa&iacute;s:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-pais-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-entidad-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-ciudad-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-face-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-delegacion-admin-sistema"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-colonia-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-cp-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-direccion-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-telefono-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-email-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>User:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="edita-user-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Password:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="password" id="edita-pass-admin-sistema"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-edit-admin-sistema">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'alta_admin_sistema'}">
        <div class="container-sec container-asistema flex">
            <div class="container-subsec flex flex-column">
                <div id="contenedor-alta-asistema" class="flex flex-column">
                    <div class="container-tbl-main flex flex-row">
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Nombre:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-nombre-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>CURP:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-curp-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Clave:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-clave-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Pa&iacute;s:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-pais-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Entidad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-entidad-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Ciudad:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-ciudad-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Facebook: </span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-face-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Delegacion:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-delegacion-admin-sistema"/>
                                </div>
                            </div>
                        </div>
                        <div class="container-tbl flex flex-column">
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Colonia:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-colonia-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>C&oacute;digo postal:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-cp-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Direcci&oacute;n:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-direccion-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Tel&eacute;fono:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-telefono-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>email:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-email-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>User:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="text" id="alta-user-admin-sistema"/>
                                </div>
                            </div>
                            <div class="tbl-row flex flex-row">
                                <div class="tbl-row-left">
                                    <span>Password:</span>
                                </div>
                                <div class="tbl-row-right">
                                    <input type ="password" id="alta-pass-admin-sistema"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-edit btn-alta-admin-sistema">Guardar</button>
                </div>
            </div>
        </div>
    </c:when>
    <c:when test="${sec eq 'administrador_institucion'}">
        <div class="container-sec container-ainstitucion flex">
            <div class="container-subsec flex flex-column">
                <div class="menu-edit-main">
                    <div class="menu-edit flex">
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