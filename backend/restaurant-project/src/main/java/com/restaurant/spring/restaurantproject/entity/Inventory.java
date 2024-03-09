package com.restaurant.spring.restaurantproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
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
//
//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
//    @JoinColumn(name = "unit_type_name", nullable = false)
//    @JsonIgnore
    private String unitType;

    private String enlistedBy;

    @CreationTimestamp
    private LocalDateTime enlistTime;

    private String updatedBy;
    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
