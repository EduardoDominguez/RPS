/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

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
@RequestMapping(value = "/tutores")
public class TutorController {

    static dataBaseQuery query = new dataBaseQuery();
    General g = new General();

    @RequestMapping(value = "/getTutor", method = RequestMethod.POST)
    public @ResponseBody
    String getTurtores(HttpServletRequest request, Model model) {
        String ret = "";
        try {
            HttpSession session = request.getSession(true);
            String login_id = session.getAttribute("IdPeke").toString();
            String tipo_user = session.getAttribute("tipoPeke").toString();
            if (tipo_user.equals("s")) {
                ret = query.select("select t.id_tutor, t.nombre, t.telefono, r.relacion, if(t.estado='A', 'Activo', 'Baja') as estado from tbl_tutor as t, tbl_relacion as r where t.id_ralacion = r.id_relacion");
            } else if (tipo_user.equals("t")) {
                ret = query.select("select t.id_tutor, t.nombre, t.telefono, r.relacion, if(t.estado='A', 'Activo', 'Baja') as estado from tbl_tutor as t, tbl_relacion as r where t.id_ralacion = r.id_relacion and id_login ='" + login_id + "'");
            } else if (tipo_user.equals("i")) {
                ret = query.select("select t.id_tutor, t.nombre, t.telefono, r.relacion, if(t.estado='A', 'Activo', 'Baja') as estado from tbl_tutor as t, tbl_relacion as r, tbl_institucion as i, tbl_admin_institucion as ai where t.id_ralacion=r.id_relacion and ai.id_institucion=i.id_institucion and t.id_institucion=i.id_institucion and ai.id_login='" + login_id + "'");
            } else {
                ret = query.select("select t.id_tutor, t.nombre, t.telefono, r.relacion, if(t.estado='A', 'Activo', 'Baja') as estado from tbl_tutor as t, tbl_relacion as r, tbl_nutriologos as n, tbl_institucion as i where t.id_ralacion= r.id_relacion and n.id_institucion=i.id_institucion and t.id_institucion=i.id_institucion and n.id_login='" + login_id + "'");
            }
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }

    @RequestMapping(value = "/obtiene_datos", method = RequestMethod.POST)
    public @ResponseBody
    String obtieneDatos(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret;
        try {
            ret = query.select("select * from pekesalud_bd.tbl_tutor where id_tutor = " + id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    @RequestMapping(value = "/cambia_estado", method = RequestMethod.POST)
    public @ResponseBody
    String cambia_estado(HttpServletRequest request, Model model, @RequestParam(defaultValue = "0") int id) {
        String ret, estado;
        List<Map> res = new ArrayList<Map>();
        try {
            res = query.select("select estado from pekesalud_bd.tbl_tutor where id_tutor = " + id, true);
            if (res.get(0).get("estado").toString().equals("B")) {
                estado = "A";
            } else {
                estado = "B";
            }
            ret = query.exQuery("update pekesalud_bd.tbl_tutor set estado = '" + estado + "' where id_tutor = " + id);
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    @RequestMapping(value = "/edita_datos", method = RequestMethod.POST)
    public @ResponseBody
    String edita_datos(HttpServletRequest request, Model model, @RequestParam(defaultValue = "") String nombre, @RequestParam(defaultValue = "0") int id,
            @RequestParam(defaultValue = "0") int institucion, @RequestParam(defaultValue = "0") int consultorio, @RequestParam(defaultValue = "") String genero,
            @RequestParam(defaultValue = "0000-00-00") String fecha_nacimiento, @RequestParam(defaultValue = "0") int relacion, @RequestParam(defaultValue = "0") int ocupacion,
            @RequestParam(defaultValue = "0") int estado_civil, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String face,
            @RequestParam(defaultValue = "") String telefono
    ) {
        String ret;
        try {
            ret = query.exQuery("update pekesalud_bd.tbl_tutor set id_institucion= " + institucion + ", nombre = '" + nombre + "', id_consultorio = '" + consultorio + "', genero = '" + genero + "', fecha_nacimiento = '" + fecha_nacimiento + "', id_ralacion = '" + relacion + "', id_ocupacion = '" + ocupacion + "', id_estado_civil = '" + estado_civil + "', codigo_postal = '" + cp + "',  telefono = '" + telefono + "', facebook = '" + face + "' where id_tutor = '" + id + "'");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    @RequestMapping(value = "/alta_datos", method = RequestMethod.POST)
    public @ResponseBody
    String alta_datos(HttpServletRequest request, Model model, @RequestParam(defaultValue = "") String nombre,
            @RequestParam(defaultValue = "0") int institucion, @RequestParam(defaultValue = "0") int consultorio, @RequestParam(defaultValue = "") String genero,
            @RequestParam(defaultValue = "0000-00-00") String fecha_nacimiento, @RequestParam(defaultValue = "0") int relacion, @RequestParam(defaultValue = "0") int ocupacion,
            @RequestParam(defaultValue = "0") int estado_civil, @RequestParam(defaultValue = "0") int cp, @RequestParam(defaultValue = "") String face,
            @RequestParam(defaultValue = "") String telefono
    ) {
        String ret;
        try {
             ret = query.exQuery("insert into pekesalud_bd.tbl_tutor (id_tutor, id_institucion, id_consultorio, nombre, genero, fecha_nacimiento, id_ralacion,"
                    + "id_ocupacion, id_estado_civil, codigo_postal, telefono, facebook, estado"
                    + ") "
                    + "values ('"+conoce_autoincrement()+"' ,'"+institucion+"', '"+consultorio+"', '"+nombre+"', '"+genero+"', '"+fecha_nacimiento+"', '"+relacion+"', "
                    + "'"+ocupacion+"', '"+estado_civil+"', '"+cp+"', '"+telefono+"', '"+face+"', 'A')");
            return ret;
        } catch (Exception e) {
            ret = e.toString();
        }
        return ret;
    }

    public int conoce_autoincrement() {
        int id_next = 0;
        List<Map> res = new ArrayList<Map>();
        try {
            res = query.select("select MAX(id_tutor) id from pekesalud_bd.tbl_tutor", true);
            id_next = g.toInt(res.get(0).get("id").toString()) + 1;
        } catch (Exception e) {
            id_next = 0;
        }
        return id_next;
    }
}
