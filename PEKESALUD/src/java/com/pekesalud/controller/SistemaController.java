/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import static com.pekesalud.controller.ConsultoriosController.query;
import static com.pekesalud.controller.NutriologosController.query;
import com.pekesalud.persistencia.dataBaseQuery;
import com.pekesalud.util.General;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
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
@RequestMapping(value = "/sistema")
public class SistemaController {
    static dataBaseQuery query = new dataBaseQuery();

    @RequestMapping(value = "/getAdminSistema", method = RequestMethod.POST)
    public @ResponseBody
    String getASistema(HttpServletRequest request, Model model) {
       String ret = "";
        try {
            ret = query.select("select id_admin_sistema, nombre, telefono, email, fecha_alta, if(estado='A', 'Activo', 'Baja') as estado from tbl_admin_sistema");
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
            res =query.select("select estado from pekesalud_bd.tbl_admin_sistema where id_admin_sistema = "+id , true);
            if(res.get(0).get("estado").toString().equals("B")){
                estado = "A";
            }else{
                estado = "B";
            }
            ret = query.exQuery("update pekesalud_bd.tbl_admin_sistema as asis, pekesalud_bd.tbl_login as l set l.estado = '"+estado+"', asis.estado='"+estado+"' where l.id_login = asis.id_login and asis.id_admin_sistema = "+id);
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
            ret = query.select("select asis.*, l.login, l.password from pekesalud_bd.tbl_admin_sistema as asis, pekesalud_bd.tbl_login as l where asis.id_login=l.id_login and id_admin_sistema = "+id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/edita_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model , @RequestParam(defaultValue = "0") int id_admon, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String curp, @RequestParam(defaultValue = "") String clave, @RequestParam(defaultValue = "0") int pais, @RequestParam(defaultValue = "0") int entidad, @RequestParam(defaultValue = "0") int ciudad, @RequestParam(defaultValue = "0") int delegacion, @RequestParam(defaultValue = "0") int colonia, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String direccion, @RequestParam(defaultValue = "") String telefono, @RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String face, @RequestParam(defaultValue = "") String usr, @RequestParam(defaultValue = "") String pass) {
        String ret ;
        try {
            ret = query.exQuery("call editSistema('"+usr+"', '"+email+"', '"+pass+"', '"+id_admon+"', '"+nombre+"', '"+curp+"', '"+clave+"', '"+pais+"', '"+entidad+"', '"+ciudad+"', '"+delegacion+"', '"+colonia+"', '"+cp+"', '"+direccion+"', '"+telefono+"', '"+face+"');");
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
            ret = query.exQuery("call addSistema('"+lc.loginAutoIncrement()+"', '"+usr+"', '"+email+"', '"+pass+"', '"+getAutoIncrement()+"', '"+nombre+"', '"+curp+"', '"+clave+"', '"+pais+"', '"+entidad+"', '"+ciudad+"', '"+delegacion+"', '"+colonia+"', '"+cp+"', '"+direccion+"', '"+telefono+"', '"+face+"')");
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
            res=query.select("select id_admin_sistema from tbl_admin_sistema order by id_admin_sistema desc limit 1", true);
            ret=g.toInt(res.get(0).get("id_admin_sistema").toString())+1;
        }catch(Exception e){
        
        }
        return ret;
    }
}
