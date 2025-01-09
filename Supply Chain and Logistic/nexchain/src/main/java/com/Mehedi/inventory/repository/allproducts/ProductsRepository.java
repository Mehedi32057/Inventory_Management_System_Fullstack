package com.Mehedi.inventory.repository.allproducts;

import com.Mehedi.inventory.model.product.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products , Long> {


}
