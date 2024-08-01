package com.example.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.repository.ContactService;

@RestController
public class AgendaControllerJPA {

	//Se llama al service
	final ContactService contactService;
	
	public AgendaControllerJPA(ContactService contactService) {
		this.contactService = contactService;
	}
	//TODO Hay que hacer los metodos de el controlador en JPA
}
