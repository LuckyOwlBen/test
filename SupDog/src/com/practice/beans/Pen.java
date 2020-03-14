package com.practice.beans;

public class Pen {
	
	private String tipType;
	private String penColor;
	private int boxCount;
	
	public Pen(String tipType, String penColor, int boxCount) {
		this.tipType = tipType;
		this.penColor = penColor;
		this.boxCount = boxCount;
	}
	
	
	
	public String getTipType() {
		return tipType;
	}
	public void setTipType(String tipType) {
		this.tipType = tipType;
	}
	public String getPenColor() {
		return penColor;
	}
	public void setPenColor(String penColor) {
		this.penColor = penColor;
	}
	public int getBoxCount() {
		return boxCount;
	}
	public void setBoxCount(int boxCount) {
		this.boxCount = boxCount;
	}
	
	@Override
	public String toString() {
		return "Pen [tipType=" + tipType + ", penColor=" + penColor + ", boxCount=" + boxCount + "]";
	}
	
}
