package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.CompletedOrders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompletedOrdersRepo extends JpaRepository<CompletedOrders,Long> {
}
