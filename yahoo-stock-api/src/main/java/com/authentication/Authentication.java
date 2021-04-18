package com.authentication;

import com.dao.AuthenticationDAO;
import com.pojo.User;


public class Authentication {

	public static void main(String [] args) {
		AuthenticationDAO dao = new AuthenticationDAO();
		User user = dao.validateUser(1, "Rahul123");
		System.out.println(user);
	}

}
