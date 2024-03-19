package com.restaurant.spring.restaurantproject.service;

import com.restaurant.spring.restaurantproject.entity.Dish;
import com.restaurant.spring.restaurantproject.entity.Item;
import com.restaurant.spring.restaurantproject.repository.DishRepo;
import com.restaurant.spring.restaurantproject.repository.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishService {

    @Autowired
    private DishRepo dishRepo;

    @Autowired
    private ItemRepo itemRepo;

    public Dish getDish(){
        return dishRepo.findFirstByOrderByIdDesc();
    }

    public List<Dish> getAll(){
//        return dishRepo.findDishesCreatedToday();
        return dishRepo.findAll();
    }

    public Dish save(Dish dish){
        Dish dish1 = dishRepo.save(dish);
        try {
            if (dish.getItems()!=null){
                for (Item item: dish.getItems()
                ) {
                    item.setDish(dish1);
                    itemRepo.save(item);
                }
            }
        }catch (Exception ignored){

        }
//        dish1.setItems(null);

        return dish1;
    }

    public Dish getById(Long id){
        return dishRepo.findById(id).get();
    }

    public void delete(Long id){
        dishRepo.deleteById(id);
    }

    public Dish update(Long id, Dish dish) {
        dish.setId(id);
        return dishRepo.save(dish);
    }

//    public List<Dish> searchDishes(String query) {
//        return dishRepo.searchDishes(query);
//    }

    public List<Dish> searchDishesWithItemsByName(String dishName) {
        return dishRepo.findDishesWithItemsByName(dishName);
    }
}
