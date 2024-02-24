package com.restaurant.spring.restaurantproject.repository;


import com.restaurant.spring.restaurantproject.entity.CancelledOrders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CancelledOrdersRepo extends JpaRepository<CancelledOrders, Long> {
}
