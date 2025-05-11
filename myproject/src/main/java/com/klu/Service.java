package com.klu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import com.klu.Product;
import com.klu.ProductRepo;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    ProductRepo repo;

    public String insertData(Product p) {
        repo.save(p);
        return "Product inserted successfully";
    }

    public String updateData(Product p) {
        repo.save(p);
        return "Product updated successfully";
    }

    public String deleteData(int id) {
        repo.deleteById(id);
        return "Product deleted successfully";
    }

    public List<Product> retrieveData() {
        return repo.findAll();
    }
}
