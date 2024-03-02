package com.restaurant.spring.restaurantproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String[] orderItems;
    private Long netAmount;
//
//    @ManyToOne
//    @JoinColumn(name="userId", referencedColumnName = "id", nullable = false)
private Long userId;
private LocalTime time;
    private String address;
    private String orderStatus;


}
