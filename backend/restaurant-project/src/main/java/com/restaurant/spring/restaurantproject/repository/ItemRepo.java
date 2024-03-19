package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepo extends JpaRepository<Item,Long> {

    @Query("SELECT i FROM Item i JOIN FETCH i.dish d WHERE d.dishName LIKE %:dishName%")
    List<Item> findItemsByDishName(@Param("dishName") String dishName);

}
