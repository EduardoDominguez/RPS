/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import com.pekesalud.persistencia.dataBaseQuery;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @RequestMapping(value = "/getConsultorios", method = RequestMethod.POST)
    public @ResponseBody
    String getConsultorios(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if(tipo_user.equals("s")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta,c.estado from tbl_consultorio as c, tbl_institucion as i where i.id_institucion=c.id_institucion");
            }else if(tipo_user.equals("i")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta,c.estado from tbl_consultorio as c, tbl_institucion as i, tbl_admin_institucion as ai where i.id_institucion=c.id_institucion and ai.id_institucion=i.id_institucion and ai.id_login = '"+login_id+"'");
            }else if(tipo_user.equals("n")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta,c.estado from tbl_consultorio as c, tbl_institucion as i, tbl_nutriologos as n where i.id_institucion=c.id_institucion and n.id_institucion= i.id_institucion and n.id_login = '"+login_id+"'");
            }else if(tipo_user.equals("t")){
                ret = query.select("select c.id_consultorio, concat(i.nombre) as institucion, c.nombre, c.email, c.fecha_alta,c.estado from tbl_consultorio as c, tbl_institucion as i, tbl_tutor as t where c.id_institucion=i.id_institucion and t.id_institucion=i.id_institucion and t.id_login= '"+login_id+"'");
            }
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
}
