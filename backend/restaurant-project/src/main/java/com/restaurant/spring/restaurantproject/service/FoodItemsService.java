package com.restaurant.spring.restaurantproject.service;


import com.restaurant.spring.restaurantproject.entity.FoodItems;
import com.restaurant.spring.restaurantproject.repository.FoodItemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodItemsService {
    @Autowired
    private FoodItemsRepo foodItemsRepo;

    public List<FoodItems> getAll(){
        return foodItemsRepo.findAll();
    }

    public FoodItems save(FoodItems foodItems){
        return foodItemsRepo.save(foodItems);
    }

    public FoodItems getById(Long id){
        return foodItemsRepo.findById(id).get();
    }

    public void deleteOrders(Long id){
        foodItemsRepo.deleteById(id);
    }

    public FoodItems update(Long id, FoodItems foodItems) {
        foodItems.setId(id);
        return foodItemsRepo.save(foodItems);
    }
}
