package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface InventoryRepo extends JpaRepository<Inventory,Long> {

    @Query(" SELECT i FROM Inventory i WHERE " +
            "i.itemName LIKE CONCAT('%',:query, '%') " +
            "Or i.inventoryCategory LIKE CONCAT('%', :query, '%') " +
            "Or i.itemDescription LIKE CONCAT('%', :query, '%') ")
    List<Inventory> searchInventories(String query);
}
