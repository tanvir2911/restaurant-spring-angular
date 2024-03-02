package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantTableRepo extends JpaRepository<RestaurantTable, Long> {
}
