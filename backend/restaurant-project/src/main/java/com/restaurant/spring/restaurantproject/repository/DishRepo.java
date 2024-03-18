package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepo extends JpaRepository<Dish,Long> {
    @Query(" SELECT d FROM Dish d WHERE " +
            "d.dishName LIKE CONCAT('%',:query, '%') ")
    List<Dish> searchDishes(String query);

    Dish findFirstByOrderByIdDesc();
}
