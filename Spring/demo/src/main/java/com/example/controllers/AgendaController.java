package com.example.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Contacto;

@Controller
public class AgendaController {

	@Autowired
	JdbcTemplate jdbcTemplate;
	// Sin el autowired seria: JdbcTemplate jdbcTemplate = new JdbcTemplate()

	public AgendaController(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@GetMapping("/allContacts")
	@ResponseBody
	public List<Contacto> getAllContacts() {
		final String QUERRY = "SELECT * FROM AGENDA;";
		List<Map<String, Object>> allContacts = jdbcTemplate.queryForList(QUERRY);

		// Hacer que salga como array de strings tal cual
		List<String> stringList = new ArrayList<String>();
		// Aqui pasaremos items de una lista List<Map<String, Object>> a List<String>
		// que sera mas facil de printear
		for (Map<String, Object> stringItem : allContacts) {
			stringList.add(stringItem.toString());
		}
		// Hacer que salga como objeto por el pojo que creara Json
		List<Contacto> contactList = new ArrayList<Contacto>();
		for (Map<String, Object> row : allContacts) {
			Contacto contacto = new Contacto();

			// Para id

			contacto.setId((Long) row.get("id_contacto"));
			// Para los demas
			contacto.setNombre((String) row.get("nombre"));
			contacto.setApellidos((String) row.get("apellido"));
			contacto.setTelefono((int) row.get("telefono"));

			// Añadimos el objeto seteado a la lista creada anteriormente
			contactList.add(contacto);
		}

		return contactList;
	}

	@GetMapping("/contacto/{idContacto}")
	public String getContactoCard(@PathVariable("idContacto") String idContacto, Model model) {
		try {
			Contacto contact = findContactById(idContacto);
			
			if(contact != null) {
				System.out.print(contact.toString());
				model.addAttribute("idContacto", idContacto);
				return "contacto.html";

			}else {
				return null;
			}
		}catch(Exception e) {
			//printStackTrace(e);
			System.out.print(e);
			return null;
		}
	}

	
	public Contacto findContactById(String idParam) {
		final String QUERRY = "SELECT * FROM AGENDA WHERE id_contacto ="+idParam+";";
		
		Map<String, Object> contactItem = jdbcTemplate.queryForMap(QUERRY);

		// Hacer que salga como objeto por el pojo que creara Json
		Contacto contacto = new Contacto();

		// Para id
		contacto.setId((Long) contactItem.get("id_contacto"));
		// Para los demas
		contacto.setNombre((String) contactItem.get("nombre"));
		contacto.setApellidos((String) contactItem.get("apellido"));
		contacto.setTelefono((int) contactItem.get("telefono"));

		return contacto;
	}
}
