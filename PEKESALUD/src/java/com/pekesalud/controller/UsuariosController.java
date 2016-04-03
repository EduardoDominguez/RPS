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
@RequestMapping(value = "/usuarios")
public class UsuariosController {
    static dataBaseQuery query = new dataBaseQuery();

    @RequestMapping(value = "/getUsuarios", method = RequestMethod.POST)
    public @ResponseBody
    String getInstitutions(HttpServletRequest request, Model model) {
       String ret = "";
        try {
            //select p.id_paciente, concat(p.nombre, ' ', p.apellido2) as n_paciente, p.correo, i.nombre as n_intitucion, s.nombre as n_supervision, t.nombre as n_tutor, c.n_ciudad, e.n_entidad,pa.n_pais from paciente as p, institucion as i, supervision as s, tutor as t, entidades as e, ciudades as c, paises as pa where p.id_institucion=i.id_institucion and p.id_supervision=s.id_supervision and p.id_entidad=e.id_entidad and pa.id_pais=p.id_pais and p.id_tutor=t.id_tutor and p.id_ciudad=c.id_ciudad and pa.id_pais=c.id_pais and c.id_entidad=e.id_entidad and pa.id_pais=e.id_pais
            ret = query.select("select u.id_usuario, l.login, u.nombre, u.apellido1, u.fecha_registro from usuario as u, login as l where l.id_login = u.id_login");
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }
}
