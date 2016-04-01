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
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 * @author Eduardo Dominguez
 */
@Controller
@EnableWebMvc
@RequestMapping(value = "/instituciones")
public class InstitucionesController {

    static dataBaseQuery query = new dataBaseQuery();

    @RequestMapping(value = "/getInstitutions", method = RequestMethod.POST)
    public @ResponseBody
    String getInstitutions(HttpServletRequest request, Model model) {
       String ret = "";
        try {
            ret = query.select("select i.id_institucion, i.nombre, p.n_pais, c.n_ciudad  from institucion as i, paises as p, ciudades as c where i.id_pais=p.id_pais and i.id_ciudad = c.id_ciudad and c.id_pais = p.id_pais and c.id_entidad=i.id_entidad order by i.id_institucion desc");
        } catch (Exception e) {
            //ret = "fail";
        }
        return ret;
    }
}
