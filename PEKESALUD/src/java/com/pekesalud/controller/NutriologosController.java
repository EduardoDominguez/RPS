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
}
