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
    
    @RequestMapping(value = "/ingresar", method = RequestMethod.GET)
    
    public @ResponseBody
    String ingresar(HttpServletRequest request, Model model) {
        List<Map> lista = new ArrayList<Map>();
        //Injector inj = AppInjector.getInjector();
        //dataBaseQuery dao = inj.getInstance(dataBaseQuery.class);
        String nombreUsuario = request.getParameter("nombreUsuario");
        String passwordUsuario = request.getParameter("passwordUsuario");
        Usuario usuario = new Usuario();
        usuario.setNombreUsuario(nombreUsuario);
        usuario.setPasswordUsuario(passwordUsuario);
        Map mapList = new HashMap();
        String res;
        try {
            //lista = dao.obtieneListadoFaset();
            //lista.add(usuario.getNombreUsuario());
            //lista.add(usuario.getPasswordUsuario());
            //res +=usuario.getNombreUsuario()+ usuario.getPasswordUsuario();
            res= query.select("select * from pekesalud_bd.login;");
//            mapList.put("Res", res);
//            lista.add(mapList);
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
