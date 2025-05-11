package com.klu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klu.Product;
import com.klu.Service;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/products")
public class AppController {

    @Autowired
    Service service;

    @PostMapping("/add")
    public String insert(@RequestBody Product p) {
        return service.insertData(p);
    }

    @PutMapping("/update")
    public String update(@RequestBody Product p) {
        return service.updateData(p);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id) {
        return service.deleteData(id);
    }

    @GetMapping("/get")
    public List<Product> getAll() {
        return service.retrieveData();
    }
}
