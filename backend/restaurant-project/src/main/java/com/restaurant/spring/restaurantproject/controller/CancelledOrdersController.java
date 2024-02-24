package com.restaurant.spring.restaurantproject.controller;

import com.restaurant.spring.restaurantproject.entity.CancelledOrders;
import com.restaurant.spring.restaurantproject.service.CancelledOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cancelledOrders")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class CancelledOrdersController {


    @Autowired
    private CancelledOrdersService cancelledOrdersService;
    @GetMapping
    public List<CancelledOrders> getAll(){
        return cancelledOrdersService.getAll();
    }

    @GetMapping("/{id}")
    public CancelledOrders getById(@PathVariable("id") Long id){
        return cancelledOrdersService.getById(id);
    }
    @PostMapping
    public CancelledOrders postOrders(@RequestBody CancelledOrders cancelledOrders){
        return cancelledOrdersService.save(cancelledOrders);
    }

    @PutMapping("/{id}")
    public CancelledOrders updateOrders(@PathVariable("id") Long id, @RequestBody CancelledOrders cancelledOrders){
        return cancelledOrdersService.update(id,cancelledOrders);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        cancelledOrdersService.deleteOrders(id);
    }

}
