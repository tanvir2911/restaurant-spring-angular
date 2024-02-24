package com.restaurant.spring.restaurantproject.controller;

import com.restaurant.spring.restaurantproject.entity.CompletedOrders;
import com.restaurant.spring.restaurantproject.service.CompletedOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/completedOrders")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class CompletedOrdersController {


    @Autowired
    private CompletedOrdersService completedOrdersService;
    @GetMapping
    public List<CompletedOrders> getAll(){
        return completedOrdersService.getAll();
    }

    @GetMapping("/{id}")
    public CompletedOrders getById(@PathVariable("id") Long id){
        return completedOrdersService.getById(id);
    }
    @PostMapping
    public CompletedOrders postOrders(@RequestBody CompletedOrders completedOrders){
        return completedOrdersService.save(completedOrders);
    }

    @PutMapping("/{id}")
    public CompletedOrders updateOrders(@PathVariable("id") Long id, @RequestBody CompletedOrders completedOrders){
        return completedOrdersService.update(id,completedOrders);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        completedOrdersService.deleteOrders(id);
    }
}
