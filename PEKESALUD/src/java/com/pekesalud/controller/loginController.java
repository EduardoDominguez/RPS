/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.*;
import com.pekesalud.bean.Usuario;
import com.pekesalud.persistencia.dataBaseQuery;
import com.pekesalud.session.Sesiones;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import com.pekesalud.bean.Admin_Sistema;
import com.pekesalud.bean.Login;
import com.pekesalud.bean.Modulos;
import com.pekesalud.util.General;
import java.sql.SQLException;

/**
 *
 * @author Eduardo Dominguez
 */
@Controller
@EnableWebMvc
@RequestMapping(value = "/login")
public class loginController {

    static dataBaseQuery query = new dataBaseQuery();
    Admin_Sistema as = new Admin_Sistema();
    Login l = new Login();
    Modulos m = new Modulos();
    General g = new General();
    Sesiones sesion ;

    @RequestMapping(value = "/ingresar", method = RequestMethod.POST)
    public @ResponseBody
    String ingresar(HttpServletRequest request, Model model) {
        List<Map> lista = new ArrayList<Map>();
        String nombreUsuario = request.getParameter("usr");
        String passwordUsuario = request.getParameter("psw");
        Map mapList = new HashMap();
        String res ="";
        try {
            lista = query.select("select * from pekesalud_bd.tbl_login where login = '" + nombreUsuario + "' and password = '" + passwordUsuario + "' and estado = 1 limit 1;", true);
            if (!lista.isEmpty()) {
                switch (g.estatusConsulta(lista)) {
                    case "fail":
                        return "fail";
                    case "fail.":
                        return "fail.";
                    case "fail..":
                        return "fail";
                    case "ok":
                        l.setId_login(g.toInt(lista.get(0).get("id_login").toString()));
                        l.setLogin(lista.get(0).get("login").toString());
                        l.setEmail(lista.get(0).get("email").toString());
                        l.setPassword(lista.get(0).get("password").toString());
                        l.setTipo_usuario(lista.get(0).get("tipo_usuario").toString());
                        l.setEstado(g.toInt(lista.get(0).get("estado").toString()));
                        l.setFacebook(lista.get(0).get("facebook").toString());

                        if (!verificaCaducidadPassword()) {
                            sesion = new Sesiones(request);
                            String tabla_conoce_modulos = conoceTipoUsuario();
                            conoceModulos(tabla_conoce_modulos);
                            return insertaBitacora();
                        } else {
                            //Hacer un pedo para que pida cambiar la contraseña cuando ya venció 
                        }
                        break;
                }
            }

        } catch (Exception e) {
            System.out.print("Ha ocurrido un error inesperado al intentar acceder " + e);
            res = "fail";
        }
        return res;
    }

    @RequestMapping(value = "/salir", method = RequestMethod.POST)
    public @ResponseBody
    String salir(HttpServletRequest request, Model model) {
        String res = "ok";
        try {
            Sesiones sesion = new Sesiones(request);
            sesion.deleteSession();
        } catch (Exception e) {
            System.out.print("Ha ocurrido un error inesperado al intentar acceder " + e);
            res = "fail";
        }
        return res;
    }

    public String conoceTipoUsuario() throws SQLException {
        String tabla = "";
        List<Map> sql;
        switch (l.getTipo_usuario()) {
            case "s":
                sql = query.select("select * from pekesalud_bd.tbl_admin_sistema where id_login = " + l.getId_login() + " and estado = 1 limit 1;", true);
                as.setId_admin_sistema(g.toInt(sql.get(0).get("id_admin_sistema").toString()));
                as.setId_login(g.toInt(sql.get(0).get("id_login").toString()));
                as.setTipo_usuario(sql.get(0).get("tipo_usuario").toString());
                as.setId_rol(g.toInt(sql.get(0).get("id_rol").toString()));
                as.setNombre(sql.get(0).get("nombre").toString());
                as.setCurp(sql.get(0).get("CURP").toString());
                as.setId_pais(g.toInt(sql.get(0).get("id_pais").toString()));
                as.setId_entidad(g.toInt(sql.get(0).get("id_entidad").toString()));
                as.setId_ciudad(g.toInt(sql.get(0).get("id_ciudad").toString()));
                as.setId_delegacion(g.toInt(sql.get(0).get("id_delegacion").toString()));
                as.setId_colonia(g.toInt(sql.get(0).get("id_colonia").toString()));
                as.setCodigo_postal(g.toInt(sql.get(0).get("codigo_postal").toString()));
                as.setDireccion(sql.get(0).get("direccion").toString());
                as.setTelefono(g.toInt(sql.get(0).get("telefono").toString()));
                as.setEmail(sql.get(0).get("email").toString());
                as.setFacebook(sql.get(0).get("facebook").toString());
                as.setFecha_alta(sql.get(0).get("fecha_alta").toString());
                as.setEstado(sql.get(0).get("estado").toString());
                as.setClave(sql.get(0).get("clave").toString());
                sesion.createSession(as.getNombre(), as.getId_login());
                tabla = "tbl_admin_sistema";
                break;
            case "i":
                sql = query.select("select * from pekesalud_bd.tbl_admin_institucion where id_login = " + l.getId_login() + " and estado = 1 limit 1;", true);
                tabla = "tbl_admin_institucion";
                break;
            case "n":
                sql = query.select("select * from pekesalud_bd.tbl_nutriologos where id_login = " + l.getId_login() + " and estado = 1 limit 1;", true);
                tabla = "tbl_nutriologos";
                break;
            case "t":
                sql = query.select("select * from pekesalud_bd.tbl_tutor where id_login = " + l.getId_login() + " and estado = 1 limit 1;", true);
                tabla = "tbl_tutor";
                break;
        }
        return tabla;
    }

    public boolean verificaCaducidadPassword() throws SQLException {
        boolean debe_cambiar_password;
        List<Map> res = query.select("select if(fecha_vigencia < CURRENT_TIMESTAMP(), true , false) as cambiar from pekesalud_bd.tbl_bit_password where  id_login = " + l.getId_login() + " order by fecha_vigencia Desc limit 1;", true);
        debe_cambiar_password = (g.toInt(res.get(0).get("cambiar").toString()) == 1) ? true : false;
        return debe_cambiar_password;
    }

    public String conoceModulos(String tabla) throws SQLException {
        String modulos;
        modulos = query.select("select m.id_modulo, m.nombre_modulo from pekesalud_bd." + tabla + " t "
                + "inner join pekesalud_bd.tbl_rol r on t.id_rol = r.id_rol "
                + "inner join pekesalud_bd.tbl_modulos m on r.id_modulo = m.id_modulo and m.estado = 1;");
        m.setModulos(modulos);
        return modulos;
    }
    
    public String insertaBitacora() throws SQLException {
        return query.exQuery("insert into pekesalud_bd.tbl_bit_acceso_login values ("+l.getId_login()+", CURRENT_TIMESTAMP());");
    }

   
        
    @RequestMapping(value = "/modulos", method = RequestMethod.POST)
    public @ResponseBody
    String modulos(HttpServletRequest request, Model model) {
        String res ;
        try {
            res = m.getModulos();
        } catch (Exception e) {
            System.out.print("Ha ocurrido un error inesperado al intentar recuperar el contenido " + e);
            res = "fail";
        }
        return res;
    }

}
