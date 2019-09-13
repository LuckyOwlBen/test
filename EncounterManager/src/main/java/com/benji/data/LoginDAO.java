package com.benji.data;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.benji.beans.Credentials;
import com.benji.beans.User;

public class LoginDAO {

	private SessionFactory sf;
	
	@Autowired
	public LoginDAO(SessionFactory sf) {
		this.sf = sf;
	}
	/**
	 * @param an email string 
	 * @return a User bean object 
	 */
	public User getUserByEmail(String email) {
		return sf.getCurrentSession().byNaturalId(User.class).using("Email",email).load();
	}
	/**
	 * 
	 * @param takes a user id
	 * @return a users credentials for verification
	 */
	public Credentials getCredentials(int id) {
		return sf.getCurrentSession().get(Credentials.class, id);
	}
	
	public void createUser(User u, Credentials c) {
		Session s = sf.getCurrentSession();
		s.persist(u);
		s.persist(c);
	}
}
