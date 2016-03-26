/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.session;

import com.pekesalud.bean.Usuario;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 *
 * @author ROGEPC
 */
public class Sesiones {
    HttpServletRequest request;
    
    public Sesiones(HttpServletRequest request){
        this.request=request;
    }
    
    public String createSession(String name, String psw, String  id){
        String ret="";
        Usuario u= new Usuario();
        try{
            HttpSession session = request.getSession();
            session.setAttribute("UsrPeke", name);
            session.setAttribute("PswPeke", psw);
            session.setAttribute("IdPeke", id);
        }catch(Exception e){
            ret="fail";
        }
        return ret;
    }
}
