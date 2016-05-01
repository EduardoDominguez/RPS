/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import static com.pekesalud.controller.ConsultoriosController.query;
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
@RequestMapping(value = "/nutriologos")
public class NutriologosController {
    static dataBaseQuery query = new dataBaseQuery();

    @RequestMapping(value = "/getNutriologo", method = RequestMethod.POST)
    public @ResponseBody
    String getNutriologos(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if(tipo_user.equals("s")){
                ret = query.select("select n.id_nutriologo, concat(n.nombre) as nutriologo, c.nombre, n.telefono, n.email, n.fecha_alta, if(n.estado='A', 'Activo', 'Baja') as estado  from tbl_nutriologos as n, tbl_consultorio as c where n.id_consultorio=c.id_consultorio");
            }else if(tipo_user.equals("i")){
                ret = query.select("select n.id_nutriologo, concat(n.nombre) as nutriologo, c.nombre, n.telefono, n.email, n.fecha_alta, if(n.estado='A', 'Activo', 'Baja') as estado from tbl_nutriologos as n, tbl_consultorio as c, tbl_admin_institucion as ai, tbl_institucion as i where n.id_consultorio=c.id_consultorio and c.id_institucion = i.id_institucion and ai.id_institucion = i.id_institucion and ai.id_login= '"+login_id+"'");
            }else if(tipo_user.equals("n")){
                ret = query.select("select n.id_nutriologo, concat(n.nombre) as nutriologo, c.nombre, n.telefono, n.email, n.fecha_alta, if(n.estado='A', 'Activo', 'Baja') as estado from tbl_nutriologos as n, tbl_consultorio as c where n.id_consultorio=c.id_consultorio and n.id_login= '"+login_id+"'");
            }else{
                ret = query.select("select n.id_nutriologo, concat(n.nombre) as nutriologo, c.nombre, n.telefono, n.email, n.fecha_alta, if(n.estado='A', 'Activo', 'Baja') as estado from tbl_nutriologos as n, tbl_consultorio as c, tbl_tutor as t where n.id_consultorio=c.id_consultorio and t.id_consultorio=c.id_consultorio and t.id_login= '"+login_id+"'");
            }
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
    
    @RequestMapping(value = "/obtiene_datos", method = RequestMethod.POST)
    public @ResponseBody
    String obtieneDatos(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret ;
        try {
            ret = query.select("select n.*, l.login, l.password from pekesalud_bd.tbl_nutriologos as n, pekesalud_bd.tbl_login as l where n.id_login=l.id_login and id_nutriologo = "+id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/edita_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id_institucion, @RequestParam(defaultValue = "0") int id_consultorio, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String curp, @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad, @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String direccion, @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String web, @RequestParam(defaultValue = "") String face, @RequestParam(defaultValue = "") String usr, @RequestParam(defaultValue = "") String pass, @RequestParam(defaultValue = "0") String id_nutriologo) {
        String ret ;
        try {
            ret = query.exQuery("call editNutriologo('"+usr+"', '"+email+"', '"+pass+"', '"+id_nutriologo+"', '"+id_institucion+"', '"+id_consultorio+"', '"+nombre+"', '"+curp+"', '"+clave+"', '"+pais+"', '"+entidad+"', '"+ciudad+"', '"+delegacion+"', '"+colonia+"', '"+cp+"', '"+direccion+"', '"+telefono+"', '"+face+"');");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/alta_datos", method = RequestMethod.POST)
    public @ResponseBody
    String altaDatos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id_institucion, @RequestParam(defaultValue = "0") int id_consultorio, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String curp, @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad, @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String direccion, @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String web, @RequestParam(defaultValue = "") String face, @RequestParam(defaultValue = "") String usr, @RequestParam(defaultValue = "") String pass) {
        String ret ;
        try {
            loginController lc= new loginController();
            ret = query.exQuery("call addNutriologo('"+lc.loginAutoIncrement()+"', '"+usr+"', '"+email+"', '"+pass+"', '"+getAutoIncrement()+"', '"+id_institucion+"', '"+id_consultorio+"', '"+nombre+"', '"+curp+"', '"+clave+"', '"+pais+"', '"+entidad+"', '"+ciudad+"', '"+delegacion+"', '"+colonia+"', '"+cp+"', '"+direccion+"', '"+telefono+"', '"+face+"', NOW(), null);");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/cambia_estado", method = RequestMethod.POST)
    public @ResponseBody
    String cambia_estado(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret, estado ;
        List<Map> res = new ArrayList<Map>();
        try {
            res =query.select("select estado from pekesalud_bd.tbl_nutriologos where id_nutriologo = "+id , true);
            if(res.get(0).get("estado").toString().equals("B")){
                estado = "A";
            }else{
                estado = "B";
            }
            ret = query.exQuery("update pekesalud_bd.tbl_nutriologos as n, pekesalud_bd.tbl_login as l set l.estado = '"+estado+"', n.estado='"+estado+"' where l.id_login = n.id_login and n.id_nutriologo = "+id);
                return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    public int getAutoIncrement(){
        int ret=0;
        List<Map> res = new ArrayList<Map>();
        General g = new General();
        try{
            res=query.select("select id_nutriologo from tbl_nutriologos order by id_nutriologo desc limit 1", true);
            ret=g.toInt(res.get(0).get("id_nutriologo").toString())+1;
        }catch(Exception e){
        
        }
        return ret;
    }
    
}
