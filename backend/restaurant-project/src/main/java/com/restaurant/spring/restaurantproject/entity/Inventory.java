package com.restaurant.spring.restaurantproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String inventoryCategory;
    private String itemName;
    private String itemDescription;

    private Long itemQuantity;
    private Long unitCost;
    private String enlistedBy;

    @CreationTimestamp
    private LocalDateTime enlistTime;

    private String updatedBy;
    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
