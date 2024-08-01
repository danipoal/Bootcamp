package com.example.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Contacto;

@RestController
public class AgendaController {

	@Autowired
	JdbcTemplate jdbcTemplate;
	// Sin el autowired seria: JdbcTemplate jdbcTemplate = new JdbcTemplate()

	public AgendaController(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@GetMapping("/allContacts")
	public List<Contacto> getAllContacts() {
		final String QUERRY = "SELECT * FROM AGENDA;";
		List<Map<String, Object>> allContacts = jdbcTemplate.queryForList(QUERRY);

		// Hacer que salga como array de strings tal cual
		List<String> stringList = new ArrayList<String>();
			//Aqui pasaremos items de una lista List<Map<String, Object>> a List<String> que sera mas facil de printear
		for(Map<String, Object> stringItem :  allContacts) {
			stringList.add(stringItem.toString());
		}
		// Hacer que salga como objeto por el pojo que creara Json
		List<Contacto> contactList = new ArrayList<Contacto>();
		for(Map<String, Object> row :  allContacts) {	
			Contacto contacto = new Contacto();
			
			//Para id
			
			contacto.setId((Long) row.get("id_contacto"));
			//Para los demas
			contacto.setNombre((String) row.get("nombre"));
			contacto.setApellidos((String) row.get("apellido"));
			contacto.setTelefono((int) row.get("telefono"));
			
			//Añadimos el objeto seteado a la lista creada anteriormente
			contactList.add(contacto);
		}
		
		return contactList;
	}

	@PutMapping
	public String putHola() {
		return "a!";
	}
}
