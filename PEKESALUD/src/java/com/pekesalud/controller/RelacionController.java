/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.controller;

import com.pekesalud.persistencia.dataBaseQuery;
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
 * @author Eduardo Dominguez
 */

@Controller
@EnableWebMvc
@RequestMapping(value = "/relacion")
public class RelacionController {
    static dataBaseQuery query = new dataBaseQuery();
    
    @RequestMapping(value = "/getRelacion", method = RequestMethod.POST)
    public @ResponseBody
    String getTurtores(HttpServletRequest request, Model model) {
        String ret = "";
        try {
                ret = query.select("select * from pekesalud_bd.tbl_relacion where estado ='A'");
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
}
