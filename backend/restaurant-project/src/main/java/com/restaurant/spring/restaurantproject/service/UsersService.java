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

    public void initRoleAndUser(Users users) {


            Role roleUser = new Role();
            roleUser.setRoleName("User");
            roleUser.setRoleDescription("User Role");
            roleRepo.save(roleUser);

            Set<Role> adminRoles = new HashSet<>();
            adminRoles.add(roleUser);
            users.setRoles(adminRoles);
            usersRepo.save(users);




    }

    public Users getById(Long id) {
        return usersRepo.findById(id).get();
    }

//    public Users getByUserNameAndEmail(String userName, String email){
//        return usersRepo.findByUserNameAndEmail(userName, email).get();
//    }
//    public Users registerNewUser(Users user) {
//
//        Role role = roleRepo.findById("User").get();
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(role);
//        user.setRoles(userRoles);
////        user.setPassword(getEncodedPassword(user.getPassword()));
//        user.setPassword(user.getPassword());
//
//        return usersRepo.save(user);
//    }

//    public Users updateUser(Users user) {
//        Optional<Users> optionalUser  = usersRepo.findById(user.getId());
//
//        if (optionalUser.isPresent()){
//            Set<Role> userRoles = new HashSet<>();
//            userRoles.addAll(optionalUser.get().getRoles());
//            userRoles.addAll(user.getRoles());
//            optionalUser.get().setRoles(userRoles);
//            return usersRepo.save( optionalUser.get());
//
//        }
//        return null;
//    }


//    public Iterable<Users> getAll() {
//
//
//        return usersRepo.findAll();
//    }
//    public String getEncodedPassword(String password) {
//        return passwordEncoder.encode(password);
//    }




}
