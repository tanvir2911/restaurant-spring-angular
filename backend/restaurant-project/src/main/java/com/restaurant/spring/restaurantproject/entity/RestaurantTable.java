package com.restaurant.spring.restaurantproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long capacity;
    private LocalDateTime reservationBookingTime;
    private LocalDateTime reservationStartTime;
    private LocalDateTime reservationEndTime;
    private Long serviceCharge;
    private Long paidAmount;
    private Long userId;
}
