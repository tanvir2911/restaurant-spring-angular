package com.restaurant.spring.restaurantproject.service;


import com.restaurant.spring.restaurantproject.entity.Role;
import com.restaurant.spring.restaurantproject.entity.Users;
import com.restaurant.spring.restaurantproject.repository.RoleRepo;
import com.restaurant.spring.restaurantproject.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UsersService {

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private RoleRepo roleRepo;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Manager");
        adminRole.setRoleDescription("Manager role");
        roleRepo.save(adminRole);
//
//        Role userRole = new Role();
//        userRole.setRoleName("User");
//        userRole.setRoleDescription("Default role for newly created record");
//        roleDao.save(userRole);



        Role roleUser = new Role();
        roleUser.setRoleName("User");
        roleUser.setRoleDescription("User Role");
        roleRepo.save(roleUser);



        Role chefRole = new Role();
        chefRole.setRoleName("Chef");
        chefRole.setRoleDescription("Chef Role");
        roleRepo.save(chefRole);

        Role waiterRole = new Role();
        waiterRole.setRoleName("Waiter");
        waiterRole.setRoleDescription("Waiter Role");
        roleRepo.save(waiterRole);

        Users adminUser = new Users();
        adminUser.setUserName("admin123");
//        adminUser.setPassword(getEncodedPassword("admin@pass"));
        adminUser.setPassword("admin@pass");
        adminUser.setEmail("admin@gmail.com");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRoles(adminRoles);
        usersRepo.save(adminUser);

//        User user = new User();
//        user.setUserName("raj123");
//        user.setUserPassword(getEncodedPassword("raj@123"));
//        user.setUserFirstName("raj");
//        user.setUserLastName("sharma");
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userDao.save(user);
    }

    public Users registerNewUser(Users user) {

        Role role = roleRepo.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRoles(userRoles);
//        user.setPassword(getEncodedPassword(user.getPassword()));
        user.setPassword(user.getPassword());

        return usersRepo.save(user);
    }

    public Users updateUser(Users user) {
        Optional<Users> optionalUser  = usersRepo.findById(user.getId());

        if (optionalUser.isPresent()){
            Set<Role> userRoles = new HashSet<>();
            userRoles.addAll(optionalUser.get().getRoles());
            userRoles.addAll(user.getRoles());
            optionalUser.get().setRoles(userRoles);
            return usersRepo.save( optionalUser.get());

        }
        return null;
    }


    public Iterable<Users> getAll() {


        return usersRepo.findAll();
    }
//    public String getEncodedPassword(String password) {
//        return passwordEncoder.encode(password);
//    }




}
