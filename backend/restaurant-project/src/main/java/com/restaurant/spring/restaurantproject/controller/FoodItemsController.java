package com.restaurant.spring.restaurantproject.controller;


import com.restaurant.spring.restaurantproject.entity.FoodItems;
import com.restaurant.spring.restaurantproject.entity.Inventory;
import com.restaurant.spring.restaurantproject.service.FoodItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foodItems")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class FoodItemsController {
    @Autowired
    private FoodItemsService foodItemsService;
    @GetMapping
    public List<FoodItems> getAll(){
        return foodItemsService.getAll();
    }

    @GetMapping("/{id}")
    public FoodItems getById(@PathVariable("id") Long id){
        return foodItemsService.getById(id);
    }
    @PostMapping
    public FoodItems postOrders(@RequestBody FoodItems foodItems){
        return foodItemsService.save(foodItems);
    }

    @PutMapping("/{id}")
    public FoodItems updateOrders(@PathVariable("id") Long id, @RequestBody FoodItems foodItems){
        return foodItemsService.update(id,foodItems);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        foodItemsService.deleteOrders(id);
    }



    @GetMapping("/search")
    public ResponseEntity<List<FoodItems>> searchProducts(@RequestParam("query") String query){
        return ResponseEntity.ok(foodItemsService.searchFoodItems(query));
    }
}
