package com.practice.config;

import java.util.Scanner;

public class ScannerSingleton {
	
	private static ScannerSingleton ss = null;
	
	private static Scanner sc = new Scanner(System.in);
	
	private ScannerSingleton() {
		
	}
	
	public static ScannerSingleton getInstance() {
		if(ss == null) {
			ss = new ScannerSingleton();
		}
		return ss;
	}
	
	public Scanner returnScanner() {
		return sc;
	}
	
	public void closeScanner() {
		sc.close();
	}
	
}
