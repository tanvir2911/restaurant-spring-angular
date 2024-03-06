package com.restaurant.spring.restaurantproject.service;

import com.restaurant.spring.restaurantproject.entity.Inventory;
import com.restaurant.spring.restaurantproject.repository.InventoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class InventoryService {
    @Autowired
    private InventoryRepo inventoryRepo;


    public List<Inventory> getAll(){
        return inventoryRepo.findAll();
    }

    public void save(Inventory inventory){

        System.out.println(inventory);
        inventoryRepo.save(inventory);
    }

    public Inventory getById(Long id){
        return inventoryRepo.findById(id).get();
    }

    public void delete(Long id){
        inventoryRepo.deleteById(id);
    }

    public Inventory update(Long id, Inventory inventory) {
        inventory.setId(id);
        return inventoryRepo.save(inventory);
    }

//    public Optional<Inventory> getInventoryByCategory(String inventoryCategory) {
//    }

    public List<Inventory> searchInventories(String query) {
        return inventoryRepo.searchInventories(query);
    }
}
