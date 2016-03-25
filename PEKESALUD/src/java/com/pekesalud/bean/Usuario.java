/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pekesalud.bean;

/**
 *
 * @author Eduardo Dominguez
 */
public class Usuario {
    
    private String nombreUsuario;
    private String passwordUsuario;
    
    public Usuario() {
        
    }
    public Usuario(String nombreUsuario, String passwordUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.passwordUsuario = passwordUsuario;
    }
    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getPasswordUsuario() {
        return passwordUsuario;
    }

    public void setPasswordUsuario(String passwordUsuario) {
        this.passwordUsuario = passwordUsuario;
    }
}
