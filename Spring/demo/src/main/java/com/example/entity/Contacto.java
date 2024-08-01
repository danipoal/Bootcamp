package com.example.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class Contacto implements Serializable{
	/**
	 * 
	 */	
	private Long id;
	private String nombre;
	private String apellidos;
	private int telefono;
	private static final long serialVersionUID = 1L;
	
}
