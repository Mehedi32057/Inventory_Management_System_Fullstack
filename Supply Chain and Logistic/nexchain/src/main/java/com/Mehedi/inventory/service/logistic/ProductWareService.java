package com.Mehedi.inventory.service.logistic;


import com.Mehedi.inventory.model.logistic.ProductWareHouse;
import com.Mehedi.inventory.repository.logistic.ProductWareHouseRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductWareService {

    @Autowired
    private
    ProductWareHouseRepository productWareRepository;


    public ProductWareHouse saveProduct(ProductWareHouse product) {
        product.setStatus("Pending Approval");
        return productWareRepository.save(product);
    }

    @Transactional
    public void approveProduct(Long productId) {
        ProductWareHouse product = productWareRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));
        product.setStatus("Approved");
        productWareRepository.save(product);
    }
}