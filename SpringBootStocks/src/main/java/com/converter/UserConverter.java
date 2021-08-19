package com.converter;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import com.pojo.User;

@Component
public class UserConverter implements Converter<User, User> {

	@Override
	public User convert(User source) {
		// TODO Auto-generated method stub
		return source;
	}
}