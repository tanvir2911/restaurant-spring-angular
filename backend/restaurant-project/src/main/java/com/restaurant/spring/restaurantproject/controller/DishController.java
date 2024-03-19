package com.restaurant.spring.restaurantproject.controller;
import com.restaurant.spring.restaurantproject.dto.DishDTO;
import com.restaurant.spring.restaurantproject.entity.Dish;
import com.restaurant.spring.restaurantproject.entity.Inventory;
import com.restaurant.spring.restaurantproject.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dish")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class DishController {

    @Autowired
    private DishService dishService;
    @GetMapping
    public List<Dish> getAll(){
        return dishService.getAll();
    }

    @GetMapping("/{id}")
    public Dish getById(@PathVariable("id") Long id){
        return dishService.getById(id);
    }
    @PostMapping
    public Dish postOrders(@RequestBody Dish dish){
        return dishService.save(dish);
    }

    @PutMapping("/{id}")
    public Dish update(@PathVariable("id") Long id, @RequestBody Dish dish){
        return dishService.update(id,dish);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        dishService.delete(id);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Dish>> search(@RequestParam("query") String query){
        return ResponseEntity.ok(dishService.searchDishesWithItemsByName(query));
//        return ResponseEntity.ok(dishService.searchDishes(query));

    }
}
