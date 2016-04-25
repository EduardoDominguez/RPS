/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import com.pekesalud.bean.Usuario;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
// import com.google.inject.Injector;
import java.util.*;
import com.pekesalud.persistencia.dataBaseQuery;
import com.pekesalud.session.Sesiones;
import javax.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import com.pekesalud.util.General;

/**
 *
 * @author Eduardo Dominguez
 */
@Controller
@EnableWebMvc
@RequestMapping(value = "/ainstituciones")
public class AInstitucionController {

    static dataBaseQuery query = new dataBaseQuery();
    General g= new General();
    
    @RequestMapping(value = "/getAInstitutions", method = RequestMethod.POST)
    public @ResponseBody
    String getAInstitutions(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if (tipo_user.equals("s")) {
                ret = query.select("select ai.id_admin_institucion, concat(ai.nombre) as persona, ai.telefono, ai.email, ai.fecha_alta, i.nombre, if(ai.estado='A', 'Activo', 'Baja') as estado from tbl_admin_institucion as ai, tbl_institucion as i where ai.id_institucion=i.id_institucion");
            } else {
                ret = query.select("select ai.id_admin_institucion, concat(ai.nombre) as persona, ai.telefono, ai.email, ai.fecha_alta, i.nombre, if(ai.estado='A', 'Activo', 'Baja') as estado from tbl_admin_institucion as ai, tbl_institucion as i where ai.id_institucion=i.id_institucion and ai.id_login='" + login_id + "'");
            }
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    @RequestMapping(value = "/obtiene_datos", method = RequestMethod.POST)
    public @ResponseBody
    String obtieneDatos(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret;
        try {
            ret = query.select("select * from pekesalud_bd.tbl_admin_institucion where id_admin_institucion = " + id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    @RequestMapping(value = "/cambia_estado", method = RequestMethod.POST)
    public @ResponseBody
    String cambia_estado(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret, estado;
        List<Map> res = new ArrayList<Map>();
        try {
            res = query.select("select estado from pekesalud_bd.tbl_admin_institucion where id_admin_institucion = " + id, true);
            if (res.get(0).get("estado").toString().equals("B")) {
                estado = "A";
            } else {
                estado = "B";
            }
            ret = query.exQuery("update pekesalud_bd.tbl_admin_institucion set estado = '" + estado + "' where id_admin_institucion = " + id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    @RequestMapping(value = "/edita_datos", method = RequestMethod.POST)
    public @ResponseBody
    String edita_datos(HttpServletRequest request, Model model, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "0") int id,
            @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad,
            @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "") String direccion,
            @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String face,
            @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String curp,
            @RequestParam(defaultValue = "0") int institucion
    ) {
        String ret;
        try {
            ret = query.exQuery("update pekesalud_bd.tbl_admin_institucion set id_institucion= " + institucion + ", nombre = '" + nombre + "', clave = '" + clave + "', id_pais = '" + pais + "', id_entidad = '" + entidad + "', id_ciudad = '" + ciudad + "', id_delegacion = '" + delegacion + "', id_colonia = '" + colonia + "', codigo_postal = '" + cp + "', direccion = '" + direccion + "', telefono = '" + telefono + "', email = '" + email + "', curp = '" + curp + "', facebook = '" + face + "' where id_admin_institucion = '" + id + "'");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    @RequestMapping(value = "/alta_datos", method = RequestMethod.POST)
    public @ResponseBody
    String alta_datos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "") String nombre,
            @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad,
            @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "") String direccion,
            @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String face,
            @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String curp,
            @RequestParam(defaultValue = "0") int institucion
    ) {
        String ret ;
        try {
            ret = query.exQuery("insert into pekesalud_bd.tbl_admin_institucion (id_admin_institucion, nombre, CURP, clave, id_pais, id_entidad, id_ciudad,"
                    + "id_delegacion, id_colonia, codigo_postal, direccion, telefono, email, id_institucion, facebook, fecha_alta, estado, id_rol, tipo_usuario"
                    + ") "
                    + "values ('"+conoce_autoincrement()+"' ,'"+nombre+"', '"+curp+"', '"+clave+"', '"+pais+"', '"+entidad+"', '"+ciudad+"', "
                    + "'"+delegacion+"', '"+colonia+"', '"+cp+"', '"+direccion+"', '"+telefono+"', '"+email+"',"+institucion+", '"+face+"',current_timestamp(), 'A', '2', 'i')");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    public int conoce_autoincrement(){
        int id_next=0;
        List<Map> res = new ArrayList<Map>();
        try{
            res=query.select("select MAX(id_admin_institucion) id from pekesalud_bd.tbl_admin_institucion", true);
            id_next=g.toInt(res.get(0).get("id").toString())+1;
        }catch(Exception e){
            id_next=0;
        }
        return id_next;
    }
}
