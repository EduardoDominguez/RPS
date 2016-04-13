/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.bean;

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
@RequestMapping(value = "/pacientes")
public class PacientesController {
    static dataBaseQuery query = new dataBaseQuery();

    @RequestMapping(value = "/getPacientes", method = RequestMethod.POST)
    public @ResponseBody
    String getInstitutions(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            ret = query.select("select n.id_nutriologo, concat(n.nombre) as nutriologo, c.nombre, n.telefono, n.email, n.fecha_alta, n.estado from tbl_nutriologos as n, tbl_consultorio as c where n.id_consultorio=c.id_consultorio");
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
}
