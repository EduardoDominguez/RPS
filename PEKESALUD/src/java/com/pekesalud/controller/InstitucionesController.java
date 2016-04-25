/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import com.pekesalud.bean.Institucion;
import com.pekesalud.bean.Usuario;
import static com.pekesalud.controller.AInstitucionController.query;
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
import com.pekesalud.util.General;
import javax.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author Eduardo Dominguez
 */
@Controller
@EnableWebMvc
@RequestMapping(value = "/instituciones")
public class InstitucionesController {

    static dataBaseQuery query = new dataBaseQuery();
    Institucion i = new Institucion();
    General g= new General();

    @RequestMapping(value = "/getInstitutions", method = RequestMethod.POST)
    public @ResponseBody
    String getInstitutions(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if(tipo_user.equals("s")){
                ret = query.select("select id_institucion , nombre, telefono, email, fecha_alta, if(estado='A', 'Activo', 'Baja') as estado  from tbl_institucion");
            }else if(tipo_user.equals("i")){
                ret = query.select("select i.id_institucion , i.nombre, i.telefono, i.email, i.fecha_alta, if(i.estado='A', 'Activo', 'Baja') as estado  from tbl_institucion as i, tbl_admin_institucion as ai where ai.id_institucion=i.id_institucion and ai.id_login= '"+login_id+"'");
            }else if(tipo_user.equals("n")){
                ret = query.select("select i.id_institucion , i.nombre, i.telefono, i.email, i.fecha_alta,if(i.estado='A', 'Activo', 'Baja') as estado  from tbl_institucion as i,  tbl_nutriologos as n where n.id_institucion= i.id_institucion and n.id_login= '"+login_id+"'");
            }else{
                ret = query.select("select i.id_institucion , i.nombre, i.telefono, i.email, i.fecha_alta, if(i.estado='A', 'Activo', 'Baja') as estado from tbl_institucion as i, tbl_tutor as t where t.id_institucion= i.id_institucion and t.id_login== '"+login_id+"'");
            }
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
    
//    @RequestMapping(value = "/getInstituciones", method = RequestMethod.POST)
//    public @ResponseBody
//    String getInstituciones(HttpServletRequest request, Model model) {
//        String ret = "";
//        try {
//            ret = query.select("select * from pekesalud_bd.tbl_institucion where estado ='A'");
//        } catch (Exception e) {
//            ret = "fail";
//        }
//        return ret;
//    }
    
    @RequestMapping(value = "/cambia_estado", method = RequestMethod.POST)
    public @ResponseBody
    String cambia_estado(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret, estado ;
        List<Map> res = new ArrayList<Map>();
        try {
            res =query.select("select estado from pekesalud_bd.tbl_institucion where id_institucion = "+id , true);
            if(res.get(0).get("estado").toString().equals("B")){
                estado = "A";
            }else{
                estado = "B";
            }
            ret = query.exQuery("update pekesalud_bd.tbl_institucion set estado = '"+estado+"' where id_institucion = "+id);
                return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/obtiene_datos", method = RequestMethod.POST)
    public @ResponseBody
    String obtieneDatos(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret ;
        try {
            ret = query.select("select * from pekesalud_bd.tbl_institucion where id_institucion = "+id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/edita_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id ,@RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String rfc, @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad, @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String direccion, @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String web, @RequestParam(defaultValue = "") String face, @RequestParam(defaultValue = "0") int lconsult, @RequestParam(defaultValue = "0") int lpatien) {
        String ret ;
        try {
            ret = query.exQuery("update tbl_institucion set nombre = '"+nombre+"', rfc = '"+rfc+"', clave = '"+clave+"', id_pais = '"+pais+"', id_entidad = '"+entidad+"', id_ciudad = '"+ciudad+"', id_delegacion = '"+delegacion+"', id_colonia = '"+colonia+"', codigo_postal = '"+cp+"', direccion = '"+direccion+"', telefono = '"+telefono+"', email = '"+email+"', web = '"+web+"', facebook = '"+face+"', limite_consultorios = '"+lconsult+"', limite_pacientes = '"+lpatien+"' where id_institucion = '"+id+"'");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
        
    @RequestMapping(value = "/alta_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model,@RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String rfc, @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad, @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String direccion, @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String web, @RequestParam(defaultValue = "") String face, @RequestParam(defaultValue = "0") int lconsult, @RequestParam(defaultValue = "0") int lpatien) {
        String ret ;
        try {
            ret = query.exQuery("insert into tbl_institucion (id_institucion, nombre, rfc, clave, id_pais, id_entidad, id_ciudad, id_delegacion, id_colonia, codigo_postal, direccion, telefono, email, web, facebook, fecha_alta, limite_consultorios, estado, limite_pacientes) values ('"+getAutoIncrement()+"' ,'"+nombre+"', '"+rfc+"', '"+clave+"', '"+pais+"', '"+entidad+"', '"+ciudad+"', '"+delegacion+"', '"+colonia+"', '"+cp+"', '"+direccion+"', '"+telefono+"', '"+email+"', '"+web+"', '"+face+"', '"+g.getDateToday()+"','"+lconsult+"', 'A','"+lpatien+"')");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    public int getAutoIncrement(){
        int id_next=0;
        List<Map> res = new ArrayList<Map>();
        try{
            res=query.select("select id_institucion from tbl_institucion order by id_institucion desc limit 1", true);
            id_next=g.toInt(res.get(0).get("id_institucion").toString())+1;
        }catch(Exception e){
            id_next=0;
        }
        return id_next;
    }
    
}
