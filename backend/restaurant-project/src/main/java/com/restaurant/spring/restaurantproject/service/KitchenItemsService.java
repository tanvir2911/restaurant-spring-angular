package com.restaurant.spring.restaurantproject.service;

import com.restaurant.spring.restaurantproject.entity.Inventory;
import com.restaurant.spring.restaurantproject.entity.KitchenItems;
import com.restaurant.spring.restaurantproject.repository.InventoryRepo;
import com.restaurant.spring.restaurantproject.repository.KitchenItemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KitchenItemsService {
    @Autowired
    private KitchenItemsRepo kitchenItemsRepo;


    public List<KitchenItems> getAll(){
        return kitchenItemsRepo.findAll();
    }

    public void save(KitchenItems kitchenItems){
        kitchenItemsRepo.save(kitchenItems);
    }

    public KitchenItems getById(Long id){
        return kitchenItemsRepo.findById(id).get();
    }

    public void delete(Long id){
        kitchenItemsRepo.deleteById(id);
    }

    public KitchenItems update(Long id, KitchenItems kitchenItems) {
        kitchenItems.setId(id);
        return kitchenItemsRepo.save(kitchenItems);
    }

//    public Optional<Inventory> getInventoryByCategory(String inventoryCategory) {
//    }

    public List<KitchenItems> searchKitchenItems(String query) {
        return kitchenItemsRepo.searchKitchenItems(query);
    }

}
