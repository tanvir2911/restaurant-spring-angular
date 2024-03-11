package com.restaurant.spring.restaurantproject.controller;

import com.restaurant.spring.restaurantproject.entity.KitchenItems;
import com.restaurant.spring.restaurantproject.service.KitchenItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/kitchen")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class KitchenItemsController {


    @Autowired
    private KitchenItemsService kitchenItemsService;
    @GetMapping
    public List<KitchenItems> getAll(){
        return kitchenItemsService.getAll();
    }

    @GetMapping("/{id}")
    public KitchenItems getById(@PathVariable("id") Long id){
        return kitchenItemsService.getById(id);
    }
    @PostMapping
    public void post(@RequestBody KitchenItems kitchenItems){
        kitchenItemsService.save(kitchenItems);
    }

    @PutMapping("/{id}")
    public KitchenItems update(@PathVariable("id") Long id, @RequestBody KitchenItems kitchenItems){
        return kitchenItemsService.update(id,kitchenItems);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        kitchenItemsService.delete(id);
    }

    //
    @GetMapping("/search")
    public ResponseEntity<List<KitchenItems>> search(@RequestParam("query") String query){
        return ResponseEntity.ok(kitchenItemsService.searchKitchenItems(query));
    }

}
