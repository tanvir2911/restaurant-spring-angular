package com.restaurant.spring.restaurantproject.controller;


import com.restaurant.spring.restaurantproject.entity.Users;
import com.restaurant.spring.restaurantproject.repository.RoleRepo;
import com.restaurant.spring.restaurantproject.repository.UsersRepo;
import com.restaurant.spring.restaurantproject.service.UsersService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AuthController {
    @Autowired
    UsersRepo usersRepo;
    @Autowired
    RoleRepo roleRepo;

    @Autowired
    UsersService usersService;

    @PostConstruct
    public void initRoleAndUser() {
//        usersService.initRoleAndUser();
    }


    @PostMapping
    public Users add(@RequestBody Users users) {

        System.out.println(users.getUserName());
        return null;
    }

    @GetMapping
    public Iterable<Users> getAll() {
        return usersRepo.findAll();
    }


}
