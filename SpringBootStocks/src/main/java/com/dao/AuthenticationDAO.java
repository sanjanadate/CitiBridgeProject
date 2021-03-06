package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.connections.DBConnection;
import com.pojo.User;

@Repository(value = "dao1")
public class AuthenticationDAO {
	
	@Autowired
	JdbcTemplate template;

	public List<User> getAllUsers() {

		String getUsers = "select * from user_data";
		List<User> users = template.query(getUsers, new RowMapper<User>() {

			@Override
			public User mapRow(ResultSet set, int arg1) throws SQLException {
				// TODO Auto-generated method stub
				return new User(set.getInt(1), set.getString(2), set.getString(3));
			}

		});

		return users;
		//return null;
	}

	
	public User validateUser(int user_id, String password) {
		
		try {
			User user = template.queryForObject("select * from user_data where user_id=? AND password=?", new RowMapper<User>() {

				@Override
				public User mapRow(ResultSet rs, int rowNum) throws SQLException {
					// TODO Auto-generated method stub
					return new User(rs.getInt(1), rs.getString(2), rs.getString(3));
				}},user_id,password );
			return user;			
		}
		catch(EmptyResultDataAccessException e)
		{
			return null;
		}

	}
	
}

