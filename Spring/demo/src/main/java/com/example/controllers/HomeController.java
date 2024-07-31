package com.example.controllers;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.pojos.TextToJson;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String index() {
		return "index.html";
	}
	@ResponseBody
	@RequestMapping(path = "/json", produces= "application/json")
	public String indexJson() {
		//Aqui se saca a traves de el escape de comillas
		return "{\"name\": \"Dani\"}";
	}
	
	@ResponseBody
	@RequestMapping(path = "/tx")
	@ResponseStatus(HttpStatus.ACCEPTED)
	public TextToJson textJson() {
		//Aqui se saca envolviendo en un objeto los clave-valor
		return new TextToJson("aa");
	}
	
	@RequestMapping("/welc")
	public String welcomeSend() {
		return "welcome.html";
	}
	@RequestMapping("/welcome")
	@ResponseBody
	public String getWelcome(@RequestParam(required = false , defaultValue = "Desconocido") String name) {
		return "Hola " + name;
	}
	@RequestMapping("/login")
	@ResponseBody
	public String login(@RequestParam String user, @RequestParam String password) {
		
		return "Hola " + user + " Password: " + password;
	}
	
	public String allNames(@RequestParam Map<String, String> parametros) {
		return ""+ parametros.entrySet();
	}
}
