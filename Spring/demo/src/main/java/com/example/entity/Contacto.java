package com.example.entity;

import java.io.Serializable;

public class Contacto implements Serializable{
	/**
	 * 
	 */	
	private Long id;
	private String nombre;
	private String apellidos;
	private int telefono;
	private static final long serialVersionUID = 1L;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public int getTelefono() {
		return telefono;
	}
	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}
	public Contacto(Long id, String nombre, String apellidos, int telefono) {
		this.id = id;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.telefono = telefono;
	}
	public Contacto() {
	}

}
