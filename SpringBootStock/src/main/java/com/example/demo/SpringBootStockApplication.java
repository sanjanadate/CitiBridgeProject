package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com")
public class SpringBootStockApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootStockApplication.class, args);
	}

}
