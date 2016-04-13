/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import com.pekesalud.bean.Admin_Institucion;
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
import com.pekesalud.bean.Nutriologo;
import com.pekesalud.bean.Tutor;
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
    Admin_Institucion ai=new Admin_Institucion();
    Nutriologo n = new Nutriologo();
    Tutor t= new Tutor();
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
                sesion.createSession(as.getNombre(), as.getId_login(), as.getTipo_usuario());
                tabla = "tbl_admin_sistema";
                break;
            case "i":
                sql = query.select("select * from pekesalud_bd.tbl_admin_institucion where id_login = " + l.getId_login() + " and estado = 1 limit 1;", true);
                ai.setId_institucion(g.toInt(sql.get(0).get("id_admin_institucion").toString()));
                ai.setId_login(g.toInt(sql.get(0).get("id_login").toString()));
                ai.setTipo_usuario(sql.get(0).get("tipo_usuario").toString());
                ai.setId_institucion(g.toInt(sql.get(0).get("id_institucion").toString()));
                ai.setId_rol(g.toInt(sql.get(0).get("id_rol").toString()));
                ai.setNombre(sql.get(0).get("nombre").toString());
                ai.setCurp(sql.get(0).get("CURP").toString());
                ai.setClave(sql.get(0).get("clave").toString());
                ai.setId_pais(g.toInt(sql.get(0).get("id_pais").toString()));
                ai.setId_entidad(g.toInt(sql.get(0).get("id_entidad").toString()));
                ai.setId_ciudad(g.toInt(sql.get(0).get("id_ciudad").toString()));
                ai.setId_delegacion(g.toInt(sql.get(0).get("id_delegacion").toString()));
                ai.setId_colonia(g.toInt(sql.get(0).get("id_colonia").toString()));
                ai.setCodigo_postal(g.toInt(sql.get(0).get("codigo_postal").toString()));
                ai.setDireccion(sql.get(0).get("direccion").toString());
                ai.setTelefono(g.toInt(sql.get(0).get("telefono").toString()));
                ai.setEmail(sql.get(0).get("email").toString());
                ai.setFacebook(sql.get(0).get("facebook").toString());
                ai.setFecha_alta(sql.get(0).get("fecha_alta").toString());
                ai.setFecha_baja(sql.get(0).get("fecha_baja").toString());
                ai.setEstado(sql.get(0).get("estado").toString());
                sesion.createSession(ai.getNombre(), ai.getId_login(), ai.getTipo_usuario());
                tabla = "tbl_admin_institucion";
                break;
            case "n":
                sql = query.select("select * from pekesalud_bd.tbl_nutriologos where id_login = " + l.getId_login() + " and estado = 1 limit 1;", true);
                n.setId_nutriologo(g.toInt(sql.get(0).get("id_nutriologo").toString()));
                n.setId_login(g.toInt(sql.get(0).get("id_login").toString()));
                n.setTipo_usuario(sql.get(0).get("tipo_usuario").toString());
                n.setId_institucion(g.toInt(sql.get(0).get("id_institucion").toString()));
                n.setId_consultorio(g.toInt(sql.get(0).get("id_consultorio").toString()));
                n.setId_rol(g.toInt(sql.get(0).get("id_rol").toString()));
                n.setNombre(sql.get(0).get("nombre").toString());
                n.setCurp(sql.get(0).get("CURP").toString());
                n.setClave(sql.get(0).get("clave").toString());
                n.setId_pais(g.toInt(sql.get(0).get("id_pais").toString()));
                n.setId_entidad(g.toInt(sql.get(0).get("id_entidad").toString()));
                n.setId_ciudad(g.toInt(sql.get(0).get("id_ciudad").toString()));
                n.setId_delegacion(g.toInt(sql.get(0).get("id_delegacion").toString()));
                n.setId_colonia(g.toInt(sql.get(0).get("id_colonia").toString()));
                n.setCodigo_postal(g.toInt(sql.get(0).get("codigo_postal").toString()));
                n.setDireccion(sql.get(0).get("direccion").toString());
                n.setTelefono(g.toInt(sql.get(0).get("telefono").toString()));
                n.setEmail(sql.get(0).get("email").toString());
                n.setFacebook(sql.get(0).get("facebook").toString());
                n.setFecha_alta(sql.get(0).get("fecha_alta").toString());
                n.setFecha_baja(sql.get(0).get("fecha_baja").toString());
                n.setEstado(sql.get(0).get("estado").toString());
                sesion.createSession(n.getNombre(), n.getId_login(), n.getTipo_usuario());
                sesion.createSession(ai.getNombre(), ai.getId_login(), ai.getTipo_usuario());
                tabla = "tbl_nutriologos";
                break;
            case "t":
                sql = query.select("select * from pekesalud_bd.tbl_tutor where id_login = " + l.getId_login() + " and estado = 1 limit 1;", true);
                t.setId_tutor(g.toInt(sql.get(0).get("id_tutor").toString()));
                t.setId_login(g.toInt(sql.get(0).get("id_login").toString()));
                t.setId_institucion(g.toInt(sql.get(0).get("id_institucion").toString()));
                t.setId_consultorio(g.toInt(sql.get(0).get("id_consultorio").toString()));
                t.setNombre(sql.get(0).get("nombre").toString());
                t.setGenero(sql.get(0).get("genero").toString());
                t.setFecha_nacimiento(sql.get(0).get("fecha_nacimiento").toString());
                t.setId_relacion(g.toInt(sql.get(0).get("id_ralacion").toString()));
                t.setId_ocupacion(g.toInt(sql.get(0).get("id_ocupacion").toString()));
                t.setId_estado_civil(g.toInt(sql.get(0).get("id_estado_civil").toString()));
                t.setCodigo_postal(g.toInt(sql.get(0).get("codigo_postal").toString()));
                t.setTelefono(g.toInt(sql.get(0).get("telefono").toString()));
                t.setFacebook(sql.get(0).get("facebook").toString());
                t.setEstado(sql.get(0).get("estado").toString());
                t.setTipo_usuario("t");
                sesion.createSession(t.getNombre(), t.getId_login(), t.getTipo_usuario());
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
