package com.practice.beans;

public class Car extends Vehicle {
	
	private int doors;
	private String make;
	private String model;
	private int year;
	
	
	public int getDoors() {
		return doors;
	}
	public void setDoors(int doors) {
		this.doors = doors;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	
	@Override
	public String toString() {
		return "Car [doors=" + doors + ", make=" + make + ", model=" + model + ", year=" + year + "]";
	}
	@Override
	public void idk() {
		// TODO Auto-generated method stub
		
	}
	
	

}
