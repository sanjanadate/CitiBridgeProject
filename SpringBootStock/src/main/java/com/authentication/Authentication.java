package com.authentication;

import java.util.List;

import com.dao.AuthenticationDAO;
import com.pojo.User;


public class Authentication {

	public static void main(String [] args) {
		AuthenticationDAO dao = new AuthenticationDAO();
		//List<User> users = dao.getAllUsers();
		/*for(User user : users) {
			System.out.println(user);
		}*/
		User user = dao.validateUser(1, "Rahul123");
		System.out.println(user);
	}

}
