package com.pojo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component(value = "user")
public class User {

	@Value(value = "1")
	private int userID;
	
	@Value(value = "Rahul Shukla")
	private String username;
	
	@Value(value = "Rahul123")
	private String password;
	
	public User() {
		this.userID = 0;
		this.username = "ABC";
		this.password = "password";
	}
	public User(int userID, String password) {
		this.userID = userID;
		this.username = "AAA";
		this.password = password;
	}
	public User(int userID, String username, String password) {
		super();
		this.userID = userID;
		this.username = username;
		this.password = password;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [userID=" + userID + ", username=" + username + ", password=" + password + "]";
	}

	
}
