package com.Mehedi.inventory.repository.production;

import com.Mehedi.inventory.model.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
