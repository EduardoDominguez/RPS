/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import com.pekesalud.bean.Menu;
import static com.pekesalud.controller.PacientesController.query;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author ROGEPC
 */

@Controller
@EnableWebMvc
@RequestMapping(value = "/menu")
public class MenuController {
    String ret = "";
    static dataBaseQuery query = new dataBaseQuery();
    Menu m= new Menu();
    General g = new General();
    
    @RequestMapping(value = "/getMenu", method = RequestMethod.POST)
    public @ResponseBody
    String getPacientes(HttpServletRequest request, Model model) {
        try {
            String id_modulo = request.getParameter("id_modulo");
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            String id_rol="";
            if(tipo_user.equals("s")){
                id_rol="1";
            }else if(tipo_user.equals("i")){
                id_rol="2";
            }else if(tipo_user.equals("n")){
                id_rol="3";
            }else{
                id_rol="4";
            }
            ret=query.select("select ps.id_permiso, p.nombre  from tbl_permisos_secciones as ps, clt_permisos as p  where ps.id_rol = '"+id_rol+"' and ps.id_modulo = '"+id_modulo+"' and ps.id_permiso=p.id");
            m.setPermisos(ret);
        } catch (Exception e) {
            ret = e.toString();
        }
        return m.getPermisos();
    }
}
