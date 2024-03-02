package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.CompletedOrders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompletedOrdersRepo extends JpaRepository<CompletedOrders,Long> {
}
