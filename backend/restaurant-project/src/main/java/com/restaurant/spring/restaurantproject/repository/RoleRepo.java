package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, String> {
}
