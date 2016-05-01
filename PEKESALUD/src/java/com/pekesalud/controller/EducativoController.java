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
@RequestMapping(value = "/educativo")
public class EducativoController {
    static dataBaseQuery query = new dataBaseQuery();
    
    @RequestMapping(value = "/getEducativo", method = RequestMethod.POST)
    public @ResponseBody
    String getEducativo(HttpServletRequest request, Model model) {
        String ret = "";
        try {
                ret = query.select("select * from pekesalud_bd.tbl_nivel_educativo where estado ='A'");
        } catch (Exception e) {
            ret = "fail";
        }
        return ret;
    }
}