package com.restaurant.spring.restaurantproject.repository;


import com.restaurant.spring.restaurantproject.entity.KitchenItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KitchenItemsRepo extends JpaRepository<KitchenItems, Long> {

    @Query(" SELECT i FROM KitchenItems i WHERE " +
            "i.itemName LIKE CONCAT('%',:query, '%') " +
            "Or i.inventoryCategory LIKE CONCAT('%', :query, '%') " +
            "Or i.itemDescription LIKE CONCAT('%', :query, '%') ")
    List<KitchenItems> searchKitchenItems(String query);
}
