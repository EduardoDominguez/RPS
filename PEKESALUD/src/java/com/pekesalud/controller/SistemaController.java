/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import com.pekesalud.persistencia.dataBaseQuery;
import javax.servlet.http.HttpServletRequest;
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
@RequestMapping(value = "/sistema")
public class SistemaController {
    static dataBaseQuery query = new dataBaseQuery();

    @RequestMapping(value = "/getAdminSistema", method = RequestMethod.POST)
    public @ResponseBody
    String getASistema(HttpServletRequest request, Model model) {
       String ret = "";
        try {
            ret = query.select("select id_admin_sistema, nombre, telefono, email, fecha_alta,estado from tbl_admin_sistema");
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
}
