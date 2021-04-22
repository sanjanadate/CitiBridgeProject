package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.dao.AuthenticationDAO;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.pojo.User;

@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	AuthenticationDAO dao;
	
	//login page
	@PostMapping("/login")
	public String validateUserLogin(@RequestBody ObjectNode objectNode) {
		//objectNode dynamically maps the parameters from request body
		int user_id = objectNode.get("user_id").asInt();
		String password = objectNode.get("password").asText();
		User user = dao.validateUser(user_id, password);
		if(user != null) {
			return "Login Successful!";
		}
		return "Invalid credentials. Try again";
	}

	//get all users
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public List<User> getAllUsers() {
		return dao.getAllUsers();
	}
	
	
	//welcome page
	@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public String message() {
		return "Welcome to REST";
	}
}
