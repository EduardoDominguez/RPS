/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 *
 * @author ROGEPC
 */
public class General {

    public static String convertFromUTF8(String s) {
        String out = null;
        try {
            out = new String(s.getBytes("ISO-8859-1"), "UTF-8");
        } catch (java.io.UnsupportedEncodingException e) {
            return null;
        }
        return out;
    }

    public static String convertToUTF8(String s) {
        String out = null;
        try {
            out = new String(s.getBytes("UTF-8"), "ISO-8859-1");
        } catch (java.io.UnsupportedEncodingException e) {
            return null;
        }
        return out;
    }

    /*
     *Método que verifica el resultado de una consulta
     *@param List<map> con el resultado de la consulta
     *En caso de encontrar un error en la consulta regresará fail
     *De otro modo devolver ok
     */
    public String estatusConsulta(List<Map> consulta) {
        if(consulta.get(0).containsKey("fail")){
            return "fail";
        }else if(consulta.get(0).containsKey("fail.")){
            return "fail.";
        }else if(consulta.get(0).containsKey("fail..")){
            return "fail..";
        }else{
            return "ok";
        }
    }

    /*
     *Método que convierte a entero una cadena
     *@param String 
     *Devuelve un entero
     */
    public int toInt(String x) {
        try {
            return Integer.parseInt(x);
        } catch (Exception e) {
            return -1;
        }
    }
    
    public String getDateToday(){
        String ret="";
        try{
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = new Date();
            ret=dateFormat.format(date);
        }catch(Exception e){
            ret="0000-00-00 00:00:00";
        }
        return ret;
    }

}
