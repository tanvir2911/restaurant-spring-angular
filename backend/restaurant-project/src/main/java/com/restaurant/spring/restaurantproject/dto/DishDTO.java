package com.restaurant.spring.restaurantproject.dto;

import com.restaurant.spring.restaurantproject.entity.Item;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class DishDTO {
    private Long id;
    private String dishName;
    private List<ItemDTO> items = new ArrayList<>();

}
