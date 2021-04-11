package com.mmrgatherer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MmrgathererApplication {

	public static void main(String[] args) {
		SpringApplication.run(MmrgathererApplication.class, args);
	}

}
