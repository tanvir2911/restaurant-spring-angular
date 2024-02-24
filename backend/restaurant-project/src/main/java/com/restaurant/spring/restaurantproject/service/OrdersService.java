package com.restaurant.spring.restaurantproject.service;

import com.restaurant.spring.restaurantproject.entity.Orders;
import com.restaurant.spring.restaurantproject.repository.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService {
    @Autowired
    private OrdersRepo ordersRepo;

    public List<Orders> getAll(){
        return ordersRepo.findAll();
    }

    public Orders save(Orders orders){
        return ordersRepo.save(orders);
    }

    public Orders getById(Long id){
        return ordersRepo.findById(id).get();
    }

    public void deleteOrders(Long id){
        ordersRepo.deleteById(id);
    }

    public Orders update(Long id, Orders orders) {
        orders.setId(id);
        return ordersRepo.save(orders);
    }
}
