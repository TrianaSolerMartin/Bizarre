package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.Product;
import com.example.backend.services.ProductService;

@RestController
@RequestMapping(path = "${api-endpoint}/products")
public class ProductController {
    
    ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping(path = "")
    public List<Product> index(){
        List<Product> products = service.getAll();
        return products;
    }
}
