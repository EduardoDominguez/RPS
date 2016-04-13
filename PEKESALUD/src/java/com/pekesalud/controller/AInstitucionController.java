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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author ROGEPC
 */
@Controller
@EnableWebMvc
@RequestMapping(value = "/ainstituciones")
public class AInstitucionController {

    static dataBaseQuery query = new dataBaseQuery();

    @RequestMapping(value = "/getAInstitutions", method = RequestMethod.POST)
    public @ResponseBody
    String getAInstitutions(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if(tipo_user.equals("s")){
                ret = query.select("select ai.id_admin_institucion, concat(ai.nombre) as persona, ai.telefono, ai.email, ai.fecha_alta, i.nombre, ai.estado from tbl_admin_institucion as ai, tbl_institucion as i where ai.id_institucion=i.id_institucion");
            }else{
                ret = query.select("select ai.id_admin_institucion, concat(ai.nombre) as persona, ai.telefono, ai.email, ai.fecha_alta, i.nombre, ai.estado from tbl_admin_institucion as ai, tbl_institucion as i where ai.id_institucion=i.id_institucion and ai.id_login='"+login_id+"'");
            }
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
}
