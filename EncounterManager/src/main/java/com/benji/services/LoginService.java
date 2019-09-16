package com.benji.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benji.beans.Credentials;
import com.benji.beans.User;
import com.benji.data.LoginDAO;

@Service
public class LoginService {

	private LoginDAO ld;

	@Autowired
	public LoginService(LoginDAO ld) {
		this.ld = ld;
	}

	public User checkCredentials(String email, String password) {
		User u = null;
		Credentials c = null;
		try {
			u = ld.getUserByEmail(email);
			c = ld.getCredentials(u.getUserId());
			if (c.getPassword().equals(password)) {
				return u;

			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
