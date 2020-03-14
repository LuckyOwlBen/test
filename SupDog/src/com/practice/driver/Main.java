package com.practice.driver;

import java.util.Scanner;

import com.practice.beans.Car;
import com.practice.beans.Pen;
import com.practice.config.ScannerSingleton;

public class Main {

	public static void main(String[] args) {
		
		ScannerSingleton ss = ScannerSingleton.getInstance();
		Scanner scanner = ss.returnScanner();
		Car car = new Car();
		
		System.out.println("What make is your car?");
		car.setMake(scanner.nextLine());

		System.out.println(car.getMake());
		
		scanner.close();
	}

}
