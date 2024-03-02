package com.restaurant.spring.restaurantproject.service;

import com.restaurant.spring.restaurantproject.entity.Orders;
import com.restaurant.spring.restaurantproject.entity.RestaurantTable;
import com.restaurant.spring.restaurantproject.repository.OrdersRepo;
import com.restaurant.spring.restaurantproject.repository.RestaurantTableRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantTableService {

    @Autowired
    private RestaurantTableRepo restaurantTableRepo;

    public List<RestaurantTable> getAll(){
        return restaurantTableRepo.findAll();
    }

    public void save(RestaurantTable restaurantTable){

        System.out.println(restaurantTable);
        restaurantTableRepo.save(restaurantTable);
    }

    public RestaurantTable getById(Long id){
        return restaurantTableRepo.findById(id).get();
    }

    public void deleteOrders(Long id){
        restaurantTableRepo.deleteById(id);
    }

    public RestaurantTable update(Long id, RestaurantTable restaurantTable) {
        restaurantTable.setId(id);
        return restaurantTableRepo.save(restaurantTable);
    }
}
