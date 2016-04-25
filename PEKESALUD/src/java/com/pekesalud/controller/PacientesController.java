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
@RequestMapping(value = "/pacientes")
public class PacientesController {
    static dataBaseQuery query = new dataBaseQuery();

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
}
