package com.restaurant.spring.restaurantproject.dto;

import lombok.Data;

@Data
public class ItemDTO {
    private Long id;
    private String ingredientName;
    private Long measuringAmount;
    private String measuringUnit;
}
