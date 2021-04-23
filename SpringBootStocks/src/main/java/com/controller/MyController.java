package com.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import org.json.simple.parser.ParseException;
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
import com.pojo.DisplayStock;
import com.pojo.User;
import com.stock.StockRecommandation;

@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	AuthenticationDAO dao;
	
	@Autowired
	StockRecommandation stockDAO;
	
	//@Autowired
	//DisplayStock displayStockDAO;
	
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
	
	//get stock data
	@RequestMapping(value = "/stocks", method = RequestMethod.GET)
	public List<DisplayStock> getStockData() {
		
		try {
			return stockDAO.getAPIData();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return Arrays.asList(new DisplayStock("Stock 1", 0, 0),new DisplayStock("Stock 2", 0, 0), new DisplayStock("Stock 3", 0, 0));
	}
	
}
