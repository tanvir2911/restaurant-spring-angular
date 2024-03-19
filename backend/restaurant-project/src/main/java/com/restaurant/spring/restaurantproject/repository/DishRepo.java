package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepo extends JpaRepository<Dish,Long> {
//    @Query(" SELECT d FROM Dish d WHERE " +
//            "d.dishName LIKE CONCAT('%',:query, '%') ")
//    List<Dish> searchDishes(String query);


    @Query("SELECT d FROM Dish d JOIN FETCH d.items i WHERE d.dishName LIKE %:dishName%")
    List<Dish> findDishesWithItemsByName(@Param("dishName") String dishName);

    @Query("SELECT d FROM Dish d WHERE FUNCTION('DATE', d.creationDate) = CURRENT_DATE")
    List<Dish> findDishesCreatedToday();

    Dish findFirstByOrderByIdDesc();
}
