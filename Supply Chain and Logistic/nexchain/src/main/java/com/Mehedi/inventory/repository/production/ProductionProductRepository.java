package com.Mehedi.inventory.repository.production;

import com.Mehedi.inventory.model.production.ProductionProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductionProductRepository extends JpaRepository<ProductionProduct,Long> {

    ProductionProduct findByProductName(String productName);
}
