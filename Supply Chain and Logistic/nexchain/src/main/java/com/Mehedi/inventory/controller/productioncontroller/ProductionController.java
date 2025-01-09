package com.Mehedi.inventory.controller.productioncontroller;


import com.Mehedi.inventory.model.production.ProductionProduct;
import com.Mehedi.inventory.service.production.ProductionProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*") // Allow requests from http://localhost:4200


public class ProductionController {

    @Autowired
    private ProductionProductService productService;

    @GetMapping("/")
    public List<ProductionProduct> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/")
    public ProductionProduct createProduct(@RequestBody ProductionProduct product) {
        return productService.createProduct(product);
    }

    @GetMapping("/{id}")
    public ProductionProduct getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
}
