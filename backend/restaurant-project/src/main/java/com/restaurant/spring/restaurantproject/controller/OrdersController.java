package com.restaurant.spring.restaurantproject.controller;


import com.restaurant.spring.restaurantproject.entity.Orders;
import com.restaurant.spring.restaurantproject.service.OrdersService;
import com.restaurant.spring.restaurantproject.service.UsersService;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;
    @Autowired
    private UsersService usersService;
    @GetMapping
    public List<Orders> getAll(){
        return ordersService.getAll();
    }

    @GetMapping("/{id}")
    public Orders getById(@PathVariable("id") Long id){
        System.out.println(ordersService.getById(id));
        return ordersService.getById(id);
    }
    @PostMapping
    public void postOrders(@RequestBody Orders orders){
        System.out.println(orders.getOrderItems());
         ordersService.save(orders);
    }

    @PutMapping("/{id}")
    public Orders updateOrders(@PathVariable("id") Long id, @RequestBody Orders orders){
        return ordersService.update(id,orders);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id")Long id){
        ordersService.deleteOrders(id);
    }

    @GetMapping(value = "/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<byte[]> downloadInvoice() throws JRException, IOException {

        JRBeanCollectionDataSource beanCollectionDataSource = new JRBeanCollectionDataSource((

//                new Product(121, "Keyboard", 54884),
//                new Product(122, "Mouse", 54884),
//                new Product(123, "Laptop", 54884),
//                new Product(124, "Mobile", 54884),
//                new Product(125, "Headphone", 54884)
                ordersService.getAll()


        ), false);

        Map<String, Object> parameters = new HashMap<>();
//        parameters.put("total", "7000");

        JasperReport compileReport = JasperCompileManager
                .compileReport(new FileInputStream("src/main/resources/invoice.jrxml"));

        JasperPrint jasperPrint = JasperFillManager.fillReport(compileReport, parameters, beanCollectionDataSource);

        // JasperExportManager.exportReportToPdfFile(jasperPrint,
        // System.currentTimeMillis() + ".pdf");

        byte data[] = JasperExportManager.exportReportToPdf(jasperPrint);

        System.err.println(data);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=citiesreport.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(data);
    }
}
