package com.klu;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {
}
