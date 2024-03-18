package com.restaurant.spring.restaurantproject.controller;


import com.restaurant.spring.restaurantproject.entity.Inventory;
import com.restaurant.spring.restaurantproject.service.InventoryService;
import com.restaurant.spring.restaurantproject.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/inventory")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")

public class InventoryController {

    @Autowired
    private InventoryService inventoryService;
    @GetMapping
    public List<Inventory> getAll(){
        return inventoryService.getAll();
    }

    @GetMapping("/{id}")
    public Inventory getById(@PathVariable("id") Long id){
        return inventoryService.getById(id);
    }
    @PostMapping
    public void postOrders(@RequestBody Inventory inventory){
        inventoryService.save(inventory);
    }

    @PutMapping("/{id}")
    public Inventory updateOrders(@PathVariable("id") Long id, @RequestBody Inventory inventory){
        return inventoryService.update(id,inventory);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        inventoryService.delete(id);
    }

//
    @GetMapping("/search")
    public ResponseEntity<List<Inventory>> search(@RequestParam("query") String query){
        return ResponseEntity.ok(inventoryService.searchInventories(query));
    }

}
