package com.example.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.models.Product;
import com.example.backend.repositories.ProductRepository;

@Service
public class ProductService {
    
    ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAll(){
        List<Product> products = repository.findAll();

        return products;
    }

    public Product saveProduct(Product product){
        return repository.save(product);
    }
}
