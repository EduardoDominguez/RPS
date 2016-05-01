/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import static com.pekesalud.controller.InstitucionesController.query;
import com.pekesalud.persistencia.dataBaseQuery;
import com.pekesalud.util.General;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author ROGEPC
 */
@Controller
@EnableWebMvc
@RequestMapping(value = "/consultorios")
public class ConsultoriosController {
    static dataBaseQuery query = new dataBaseQuery();
    General g= new General();

    @RequestMapping(value = "/getConsultorios", method = RequestMethod.POST)
    public @ResponseBody
    String getConsultorios(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if(tipo_user.equals("s")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta, if(c.estado='A', 'Activo', 'Baja') as estado from tbl_consultorio as c, tbl_institucion as i where i.id_institucion=c.id_institucion");
            }else if(tipo_user.equals("i")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta, if(c.estado='A', 'Activo', 'Baja') as estado  from tbl_consultorio as c, tbl_institucion as i, tbl_admin_institucion as ai where i.id_institucion=c.id_institucion and ai.id_institucion=i.id_institucion and ai.id_login = '"+login_id+"'");
            }else if(tipo_user.equals("n")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta, if(c.estado='A', 'Activo', 'Baja') as estado  from tbl_consultorio as c, tbl_institucion as i, tbl_nutriologos as n where i.id_institucion=c.id_institucion and n.id_institucion= i.id_institucion and n.id_login = '"+login_id+"'");
            }else if(tipo_user.equals("t")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta, if(c.estado='A', 'Activo', 'Baja') as estado  from tbl_consultorio as c, tbl_institucion as i, tbl_tutor as t where c.id_institucion=i.id_institucion and t.id_institucion=i.id_institucion and t.id_login= '"+login_id+"'");
            }
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
    
    
    @RequestMapping(value = "/cambia_estado", method = RequestMethod.POST)
    public @ResponseBody
    String cambia_estado(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret, estado ;
        List<Map> res = new ArrayList<Map>();
        try {
            res =query.select("select estado from pekesalud_bd.tbl_consultorio where id_consultorio = "+id , true);
            if(res.get(0).get("estado").toString().equals("B")){
                estado = "A";
            }else{
                estado = "B";
            }
            ret = query.exQuery("update pekesalud_bd.tbl_consultorio set estado = '"+estado+"' where id_consultorio = "+id);
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
            ret = query.select("select * from pekesalud_bd.tbl_consultorio where id_consultorio = "+id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/edita_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id ,@RequestParam(defaultValue = "") int institucion ,@RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String rfc, @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad, @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String direccion, @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String web, @RequestParam(defaultValue = "") String face) {
        String ret ;
        try {
            ret = query.exQuery("update tbl_consultorio set id_institucion = '"+institucion+"', nombre = '"+nombre+"', rfc = '"+rfc+"', clave = '"+clave+"', id_pais = '"+pais+"', id_entidad = '"+entidad+"', id_ciudad = '"+ciudad+"', id_delegacion = '"+delegacion+"', id_colonia = '"+colonia+"', codigo_postal = '"+cp+"', direccion = '"+direccion+"', telefono = '"+telefono+"', email = '"+email+"', web = '"+web+"', facebook = '"+face+"' where id_consultorio = '"+id+"'");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/alta_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "") int id_institucion, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String rfc, @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad, @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String direccion, @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String web, @RequestParam(defaultValue = "") String face) {
        String ret ;
        try {
            ret = query.exQuery("insert into tbl_consultorio (id_consultorio, id_institucion, nombre, rfc, clave, id_pais, id_entidad, id_ciudad, id_delegacion, id_colonia, codigo_postal, direccion, telefono, email, web, facebook, fecha_alta, estado) values ('"+getAutoIncrement()+"', '"+id_institucion+"','"+nombre+"', '"+rfc+"', '"+clave+"', '"+pais+"', '"+entidad+"', '"+ciudad+"', '"+delegacion+"', '"+colonia+"', '"+cp+"', '"+direccion+"', '"+telefono+"', '"+email+"', '"+web+"', '"+face+"', '"+g.getDateToday()+"', 'A')");
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
            res=query.select("select id_consultorio from tbl_consultorio order by id_consultorio desc limit 1", true);
            id_next=g.toInt(res.get(0).get("id_consultorio").toString())+1;
        }catch(Exception e){
            id_next=0;
        }
        return id_next;
    }
}
