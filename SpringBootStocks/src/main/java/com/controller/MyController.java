package com.controller;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Arrays;
import java.util.List;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.dao.AuthenticationDAO;
import com.dao.StockDto;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.pojo.DisplayStock;
import com.pojo.User;
import com.pojo.UserSavedStock;
import com.stock.StockRecommandation;

@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	AuthenticationDAO dao;
	
	@Autowired
	StockRecommandation stockDAO;
	
	@Autowired
	StockDto stock_dao;
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
	
	//login
	@GetMapping("/login/{user_id}/{password}")
	public String userLogin(@PathVariable int user_id, @PathVariable String password) {		
		User userLogin = dao.validateUser(user_id,password);
		if(userLogin != null) {
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
	@RequestMapping(value = "/stocks/{amt_from}/{amt_to}", method = RequestMethod.GET)
	public List<DisplayStock> getStockData(@PathVariable int amt_from, @PathVariable int amt_to) {
		try {
			List<DisplayStock> list = stockDAO.getAPIData(amt_from, amt_to);
			if(list != null) {
				return list;
			}
		} catch (IOException | InterruptedException | ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return Arrays.asList(new DisplayStock("Stock 1", 0, 0),new DisplayStock("Stock 2", 0, 0), new DisplayStock("Stock 3", 0, 0));
	}
	
	//get saved stocks
	@RequestMapping(value = "/fetch-stocks/{user_id}", method = RequestMethod.GET)
	public List<DisplayStock> getSavedStocks(@PathVariable int user_id) {
		return stock_dao.getSavedStocks(user_id);
	}
	
	// Save selected stocks
	@PostMapping("/save-stocks")
	public String saveSelectedStock(@RequestBody ObjectNode objectNode) {
		int user_id = objectNode.get("user_id").asInt(0);
		String symbol = objectNode.get("Symbol").asText("Not found");
		double price = objectNode.get("stockprice").asDouble(0);
		int quantity = objectNode.get("quantity").asInt(0);
		boolean save = stock_dao.saveStock(user_id, symbol, price, quantity);
		if (save) 
		{
			return "Saved successfully";
		} 
		else {
			return "sorry";
		}
	}
	
	@PostMapping("/save-stock")
	public String saveStock(@RequestBody ObjectNode objectNode) {
		int user_id = objectNode.get("user_id").asInt(0);
		String symbol = objectNode.get("Symbol").asText("Not found");
		double price = objectNode.get("stockprice").asDouble(0);
		int quantity = objectNode.get("quantity").asInt(0);
		int saved = stock_dao.saveStocks(user_id, symbol, price, quantity);
		if(saved > 0) {
			//return new UserSavedStock(user_id, symbol, price, quantity);
			return "Saved successfully";
		} 
		else {
			//return new UserSavedStock(0, "not saved", 0.0, 0);
			return "sorry";
		}
	}
}
