package com.benji.controllers;

import java.io.StringReader;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.benji.beans.User;
import com.benji.services.LoginService;

@Controller
@RequestMapping(value = "/login")
public class LoginController {
	private LoginService ls;
	
	@Autowired
	public LoginController(LoginService ls) {
		this.ls = ls;
	}
	
	@PostMapping
	public ResponseEntity<User> login (@RequestBody String rawJson){
		ResponseEntity<User> response = null;
		JsonReader jsonReader = Json.createReader(new StringReader(rawJson));
		JsonObject json = jsonReader.readObject();
		jsonReader.close();
		String email = json.getString("email");
		String password = json.getString("password");
		User u = null;
		try {
			u = ls.checkCredentials(email, password);
			response = new ResponseEntity<User>(u,HttpStatus.OK);
		}catch(Exception e) {
			response = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return response;
	}
}
