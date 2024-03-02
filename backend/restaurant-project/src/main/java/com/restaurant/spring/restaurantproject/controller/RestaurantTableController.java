package com.restaurant.spring.restaurantproject.controller;


import com.restaurant.spring.restaurantproject.entity.Orders;
import com.restaurant.spring.restaurantproject.entity.RestaurantTable;
import com.restaurant.spring.restaurantproject.service.OrdersService;
import com.restaurant.spring.restaurantproject.service.RestaurantTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurant_tables")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableService restaurantTableService;
    @GetMapping
    public List<RestaurantTable> getAll(){
        return restaurantTableService.getAll();
    }

    @GetMapping("/{id}")
    public RestaurantTable getById(@PathVariable("id") Long id){
        return restaurantTableService.getById(id);
    }
    @PostMapping
    public void post(@RequestBody RestaurantTable restaurantTable){
        restaurantTableService.save(restaurantTable);
    }

    @PutMapping("/{id}")
    public RestaurantTable update(@PathVariable("id") Long id, @RequestBody RestaurantTable restaurantTable){
        return restaurantTableService.update(id,restaurantTable);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        restaurantTableService.deleteOrders(id);
    }
}
