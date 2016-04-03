/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.persistencia;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import util.General;

/**
 *
 * @author Eduardo Dominguez
 */
public class dataBaseQuery {

    private final static Conexion con = new Conexion();
    private Connection conexion = null;
    private Statement sentenciaSQL = null, sentenciaSQLaux = null;
    private final String servidor = "127.0.0.1:3306/pekesalud_bd&root&root";

    public String select(String query) throws SQLException {
        int contaux = 0;
        General g= new General();
        String ret[];
        Map ml = new HashMap();
        List<Map> lista = new ArrayList<Map>();
        String retQuery="[";
        ResultSet cdr = null, cdraux = null;
        Integer cont=0;
        try {
            conexion = con.connect(servidor);
            if (conexion != null) {
                sentenciaSQL = conexion.createStatement();
                sentenciaSQLaux = conexion.createStatement();
                cdr = sentenciaSQL.executeQuery(query);
                cdraux = sentenciaSQLaux.executeQuery(query);
                //cont = cdraux.getMetaData().getColumnCount();
                while (cdr.next()) {
                    cont++;
                }
                if (cont > 0) {
                    ret = new String[cont];
                    
                    while (cdraux.next()) {
                        Integer numColumnas = 0;
                        numColumnas = cdraux.getMetaData().getColumnCount();
                        ret[contaux] = "";
                        retQuery+="{";
                        for (int i = 1; i <= numColumnas; i++) {
                            String column = cdraux.getMetaData().getColumnName(i);
                            ret[contaux] += cdraux.getString(column + "") + "# ";
                            retQuery += "\""+column+"\": \""+g.convertToUTF8(cdraux.getString(column))+"\", ";
                            ml.put(column, g.convertToUTF8(cdraux.getString(column)));
                                   //{ "NombreFruta":"Manzana" , "Cantidad":20 }
                        }
                        retQuery = retQuery.substring(0, retQuery.length()-2);
                        retQuery+="}, ";
                        lista.add(ml);
                        contaux++;
                    }
                    retQuery = retQuery.substring(0, retQuery.length()-2);
                    retQuery+="]";
                } else {
                    ret = new String[1];
                    ret[0] = "fail";
                    retQuery="fail";
                }
            } else {
                retQuery="fail";
            }
        } catch (SQLException e) {
            ret = new String[1];
            ret[0] = "fail";
            retQuery = e.toString();
            lista.clear();
        } finally {
            Conexion.close(conexion);
            //Conexion.close(cdr);
            Conexion.close(cdraux);
            //Conexion.close(sentenciaSQL);
            Conexion.close(sentenciaSQLaux);
        }
        return retQuery;
    }

//    public String[] select1(String query) throws SQLException {
//        int cont = 0, contaux = 0;
//        String ret[];
//        try {
//            cdr = sentenciaSQL.executeQuery(query);
//            cdraux = sentenciaSQLaux.executeQuery(query);
//            while (cdr.next()) {
//                cont++;
//            }
//            if (cont > 0) {
//                ret = new String[cont];
//                while (cdraux.next()) {
//                    Integer numColumnas = 0;
//                    numColumnas = cdr.getMetaData().getColumnCount();
//                    ret[contaux] = "";
//                    for (int i = 1; i <= numColumnas; i++) {
//                        String column = cdraux.getMetaData().getColumnName(i).toString();
//                        ret[contaux] += cdraux.getString(column + "") + "# ";
//                    }
//                    contaux++;
//                }
//            } else {
//                ret = new String[1];
//                ret[0] = "fail";
//            }
//        } catch (SQLException e) {
//            ret = new String[1];
//            ret[0] = "fail";
//        }
//        return ret;
//    }
    public String delete(String val, String table, String colum) throws SQLException {
            return exQuery("Delete from " + table + " where " + colum + " = " + val);
    }

    public String exQuery(String query) {
        String ret = "";
        try {
            conexion = con.connect(servidor);
            if (conexion != null) {
                sentenciaSQL = conexion.prepareStatement(query);
                sentenciaSQL.executeUpdate(query);
                ret = "ok";
            }else{
                ret = "fail con";
            }
        } catch (SQLException e) {
            ret = "fail";
        }
        finally {
            Conexion.close(conexion);
            Conexion.close(sentenciaSQL);
        }
        return ret;
    }

}
