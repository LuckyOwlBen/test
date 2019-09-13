package com.benji.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "USER")
public class User {
	
	public User() {
		super();
	}

	public User(String firstName, String lastName, String email) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		Email = email;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "userSequence")
	@SequenceGenerator(allocationSize = 1, name = "userSequence", sequenceName = "SQ_USER_PK")
	@Column(name = "USER_ID")
	private int userId;
	
	@Column(name="USER_FIRST_NAME")
	private String firstName;
	
	@Column(name="USER_LAST_NAME")
	private String lastName;
	
	@NaturalId
	@Column(name= "USER_EMAIL")
	private String Email;
	
	@Transient
	private List<Integer> campaignIds;

	
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public List<Integer> getCampaignIds() {
		return campaignIds;
	}

	public void setCampaignIds(List<Integer> campaignIds) {
		this.campaignIds = campaignIds;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", Email=" + Email
				+ ", campaignIds=" + campaignIds + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Email == null) ? 0 : Email.hashCode());
		result = prime * result + ((campaignIds == null) ? 0 : campaignIds.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + userId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (Email == null) {
			if (other.Email != null)
				return false;
		} else if (!Email.equals(other.Email))
			return false;
		if (campaignIds == null) {
			if (other.campaignIds != null)
				return false;
		} else if (!campaignIds.equals(other.campaignIds))
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	
	
	
}
