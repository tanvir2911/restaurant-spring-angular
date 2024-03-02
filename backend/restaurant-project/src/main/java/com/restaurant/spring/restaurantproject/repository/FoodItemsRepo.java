package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.FoodItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodItemsRepo extends JpaRepository<FoodItems,Long> {
}
