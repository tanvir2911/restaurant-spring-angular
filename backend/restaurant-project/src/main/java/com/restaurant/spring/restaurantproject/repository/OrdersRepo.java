package com.restaurant.spring.restaurantproject.repository;

import com.restaurant.spring.restaurantproject.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepo extends JpaRepository<Orders, Long> {
}
