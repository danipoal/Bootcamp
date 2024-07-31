package com.example.pojos;

public class TextToJson {
	//Json data bind
	public TextToJson() {}
	
	public TextToJson(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	private String message;
	

}
