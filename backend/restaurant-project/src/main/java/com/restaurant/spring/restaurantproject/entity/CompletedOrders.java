package com.restaurant.spring.restaurantproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class CompletedOrders {
    @Id
    private Long id;
    private String[] orderItems;
    private Long netAmount;

    @ManyToOne
    @JoinColumn(name="userId", referencedColumnName = "id", nullable = false)
    private Users user;
    private LocalDateTime time;
    private String address;
    private String orderStatus;
}
