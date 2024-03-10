package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.FoodItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodItemsRepo extends JpaRepository<FoodItems,Long> {
    @Query(" SELECT i FROM FoodItems i WHERE " +
            "i.title LIKE CONCAT('%',:query, '%') " )
    List<FoodItems> searchFoodItems(String query);
}
