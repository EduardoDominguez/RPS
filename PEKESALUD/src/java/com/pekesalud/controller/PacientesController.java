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
@RequestMapping(value = "/pacientes")
public class PacientesController {
    static dataBaseQuery query = new dataBaseQuery();
    General g= new General();

    @RequestMapping(value = "/getPacientes", method = RequestMethod.POST)
    public @ResponseBody
    String getPacientes(HttpServletRequest request, Model model) {
       String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if(tipo_user.equals("s")){
                ret = query.select("select p.id_paciente, p.nombre, if(p.genero='F','Femenino', 'Masculino') as genero, p.fecha_nacimiento, p.estatura_actual, p.peso_actual, if(p.estado='A', 'Activo', 'Baja') as estado from tbl_paciente as p");
            }else if(tipo_user.equals("i")){
                ret = query.select("select p.id_paciente, p.nombre, if(p.genero='F','Femenino', 'Masculino'), p.fecha_nacimiento, p.estatura_actual, p.peso_actual, if(p.estado='A', 'Activo', 'Baja') as estado from tbl_paciente as p, tbl_admin_institucion as ai, tbl_institucion as i where p.id_institucion=i.id_institucion and ai.id_institucion= i.id_institucion and ai.id_login='"+login_id+"'");
            }else if(tipo_user.equals("n")){
                ret = query.select("select p.id_paciente, p.nombre, if(p.genero='F','Femenino', 'Masculino'), p.fecha_nacimiento, p.estatura_actual, p.peso_actual, if(p.estado='A', 'Activo', 'Baja') as estado from tbl_paciente as p, tbl_nutriologos as n, tbl_institucion as i where p.id_institucion=i.id_institucion and n.id_institucion=i.id_institucion and n.id_login='"+login_id+"'");
            }else{
                ret = query.select("select p.id_paciente, p.nombre, if(p.genero='F','Femenino', 'Masculino'), p.fecha_nacimiento, p.estatura_actual, p.peso_actual, if(p.estado='A', 'Activo', 'Baja') as estado from tbl_paciente as p, tbl_tutor as t where p.id_tutor= t.id_tutor and t.id_login='"+login_id+"'");
            }
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/edita_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id_paciente ,@RequestParam(defaultValue = "0") int id_tutor ,@RequestParam(defaultValue = "0") int id_institucion, @RequestParam(defaultValue = "0") int id_consultorio, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String nick, @RequestParam(defaultValue = "") String foto, @RequestParam(defaultValue = "") String genero, @RequestParam(defaultValue = "") String nacimiento, @RequestParam(defaultValue = "0") double estatura, @RequestParam(defaultValue = "0") double peso, @RequestParam(defaultValue = "") String grado, @RequestParam(defaultValue = "") String face) {
        String ret ;
        try {
            ret = query.exQuery("update tbl_paciente set id_tutor = '"+id_tutor+"', id_institucion = '"+id_institucion+"', id_consultorio = '"+id_consultorio+"', nombre = '"+nombre+"', nick_name = '"+nick+"', fotografia = '"+foto+"', genero = '"+genero+"', fecha_nacimiento = '"+nacimiento+"', estatura_actual = '"+estatura+"', peso_actual = '"+peso+"', id_nivel_educativo = '"+grado+"', facebook = '"+face+"' where id_paciente = '"+id_paciente+"'");
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
            res =query.select("select estado from pekesalud_bd.tbl_paciente where id_paciente = "+id , true);
            if(res.get(0).get("estado").toString().equals("B")){
                estado = "A";
            }else{
                estado = "B";
            }
            ret = query.exQuery("update pekesalud_bd.tbl_paciente set estado = '"+estado+"' where id_paciente = "+id);
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
            ret = query.select("select * from pekesalud_bd.tbl_paciente where id_paciente = "+id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
    
    @RequestMapping(value = "/alta_datos", method = RequestMethod.POST)
    public @ResponseBody
    String editaDatos (HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id_tutor, @RequestParam(defaultValue = "0") int id_institucion, @RequestParam(defaultValue = "0") int id_consultorio, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "") String nick_name, @RequestParam(defaultValue = "") String fotografia, @RequestParam(defaultValue = "") String genero, @RequestParam(defaultValue = "") String fecha_nacimiento, @RequestParam(defaultValue = "") int estatura_actual, @RequestParam(defaultValue = "") String peso_actual, @RequestParam(defaultValue = "0") int id_nivel_educativo, @RequestParam(defaultValue = "") String facebook) {
        String ret ;
        try {
            ret = query.exQuery("insert into tbl_paciente (id_paciente, id_tutor, id_institucion, id_consultorio, nombre, nick_name, fotografia, genero, fecha_nacimiento, estatura_actual, peso_actual, id_nivel_educativo, facebook, fecha_alta, fecha_baja, estado) values ('"+getAutoIncrement()+"', '"+id_tutor+"','"+id_institucion+"', '"+id_consultorio+"', '"+nombre+"', '"+nick_name+"', '"+fotografia+"', '"+genero+"', '"+fecha_nacimiento+"', '"+estatura_actual+"', '"+peso_actual+"', '"+id_nivel_educativo+"', '"+facebook+"', NOW(), NULL, 'A')");
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
            res=query.select("select id_paciente from tbl_paciente order by id_paciente desc limit 1", true);
            id_next=g.toInt(res.get(0).get("id_paciente").toString())+1;
        }catch(Exception e){
            id_next=0;
        }
        return id_next;
    }
    
}
