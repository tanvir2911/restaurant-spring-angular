package com.restaurant.spring.restaurantproject.service;

import com.restaurant.spring.restaurantproject.entity.CompletedOrders;
import com.restaurant.spring.restaurantproject.repository.CompletedOrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompletedOrdersService {
    @Autowired
    private CompletedOrdersRepo completedOrdersRepo;

    public List<CompletedOrders> getAll(){
        return completedOrdersRepo.findAll();
    }

    public CompletedOrders save(CompletedOrders completedOrders){
        return completedOrdersRepo.save(completedOrders);
    }

    public CompletedOrders getById(Long id){
        return completedOrdersRepo.findById(id).get();
    }

    public void deleteOrders(Long id){
        completedOrdersRepo.deleteById(id);
    }

    public CompletedOrders update(Long id, CompletedOrders completedOrders) {
        completedOrders.setId(id);
        return completedOrdersRepo.save(completedOrders);
    }
}
