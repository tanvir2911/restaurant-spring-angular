package com.restaurant.spring.restaurantproject.controller;


import com.restaurant.spring.restaurantproject.entity.Orders;
import com.restaurant.spring.restaurantproject.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;
    @GetMapping
    public List<Orders> getAll(){
        return ordersService.getAll();
    }

    @GetMapping("/{id}")
    public Orders getById(@PathVariable("id") Long id){
        System.out.println(ordersService.getById(id));
        return ordersService.getById(id);
    }
    @PostMapping
    public void postOrders(@RequestBody Orders orders){
        System.out.println(orders.getOrderItems());
         ordersService.save(orders);
    }

    @PutMapping("/{id}")
    public Orders updateOrders(@PathVariable("id") Long id, @RequestBody Orders orders){
        return ordersService.update(id,orders);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        ordersService.deleteOrders(id);
    }
}
