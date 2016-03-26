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
// import com.google.inject.Injector;
import java.util.*;
import com.google.gson.Gson;
import com.pekesalud.bean.Usuario;
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
@RequestMapping(value = "/login")
public class loginController {
    
    static dataBaseQuery query = new dataBaseQuery();
    
    @RequestMapping(value = "/ingresar", method = RequestMethod.POST)
    public @ResponseBody
    String ingresar(HttpServletRequest request, Model model) {
        List<Map> lista = new ArrayList<Map>();
        String nombreUsuario = request.getParameter("usr");
        String passwordUsuario = request.getParameter("psw");
        Usuario usuario = new Usuario();
        usuario.setNombreUsuario(nombreUsuario);
        usuario.setPasswordUsuario(passwordUsuario);
        Map mapList = new HashMap();
        String res;
        try {
            res= query.select("call login_peke('"+usuario.getNombreUsuario()+"', '"+usuario.getPasswordUsuario()+"')");
            if(!res.equals("fail")){
                Sesiones sesion= new Sesiones(request);
                usuario.setIdUsuario(res);
                usuario.setNombreUsuario(nombreUsuario);
                usuario.setPasswordUsuario(passwordUsuario);
                sesion.createSession(usuario.getNombreUsuario(), usuario.getPasswordUsuario(), usuario.getIdUsuario());
            }
        } catch (Exception e) {
            System.out.print("Ha ocurrido un error inesperado al intentar acceder " + e);
            res = "fail";
        }
        return res;
    }
    
    @RequestMapping(value = "/inserta", method = RequestMethod.POST)
    public @ResponseBody
    String inserta(HttpServletRequest request, Model model) {
        String res;
        try {
            res= query.exQuery("insert into pekesalud_bd.prueba values(NULL,'Mario', CURDATE())");
        } catch (Exception e) {
            System.out.print("Ha ocurrido un error inesperado al intentar acceder " + e);
            res = "Fail";
        }
        return res;
    }
    @RequestMapping(value = "/borra", method = RequestMethod.POST)
    public @ResponseBody
    String borra(HttpServletRequest request, Model model) {
        String res;
        try {
            res= query.delete("1", "pekesalud_bd.prueba", "id");
        } catch (Exception e) {
            System.out.print("Ha ocurrido un error inesperado al intentar acceder " + e);
            res = "Fail";
        }
        return res;
    }
    
    @RequestMapping(value = "/saludo", method = RequestMethod.GET)
    public @ResponseBody
    String saludo() {
        return "Hola Lalo";
    }
}
