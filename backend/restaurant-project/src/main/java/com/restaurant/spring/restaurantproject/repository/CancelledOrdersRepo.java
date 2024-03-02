package com.restaurant.spring.restaurantproject.repository;


import com.restaurant.spring.restaurantproject.entity.CancelledOrders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CancelledOrdersRepo extends JpaRepository<CancelledOrders, Long> {
}
