package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.connection.DBConnection;
import com.pojo.User;

public class AuthenticationDAO {
	public User validateUser(int userId, String password) {
		Connection con = DBConnection.CreateConnection();
		User user = new User(0, "not found","not found");
		try {
			PreparedStatement pst = con.prepareStatement("select * from user_data where user_id = ? AND password = ?");
			pst.setInt(1, userId);
			pst.setString(2, password);
			ResultSet rs = pst.executeQuery();
			
			if (rs != null) {
				while (rs.next()) {
					user = new User(rs.getInt(1),rs.getString(2), rs.getString(3));
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}

}
