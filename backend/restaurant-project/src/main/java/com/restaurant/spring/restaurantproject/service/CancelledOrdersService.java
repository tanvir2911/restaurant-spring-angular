package com.restaurant.spring.restaurantproject.service;

import com.restaurant.spring.restaurantproject.entity.CancelledOrders;
import com.restaurant.spring.restaurantproject.entity.Orders;
import com.restaurant.spring.restaurantproject.repository.CancelledOrdersRepo;
import com.restaurant.spring.restaurantproject.repository.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CancelledOrdersService {
    @Autowired
    private CancelledOrdersRepo cancelledOrdersRepo;

    public List<CancelledOrders> getAll(){
        return cancelledOrdersRepo.findAll();
    }

    public CancelledOrders save(CancelledOrders cancelledOrders){
        return cancelledOrdersRepo.save(cancelledOrders);
    }

    public CancelledOrders getById(Long id){
        return cancelledOrdersRepo.findById(id).get();
    }

    public void deleteOrders(Long id){
        cancelledOrdersRepo.deleteById(id);
    }

    public CancelledOrders update(Long id, CancelledOrders cancelledOrders) {
        cancelledOrders.setId(id);
        return cancelledOrdersRepo.save(cancelledOrders);
    }
}
