package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.FoodItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodItemsRepo extends JpaRepository<FoodItems,Long> {
}
