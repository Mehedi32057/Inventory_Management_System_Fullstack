package com.Mehedi.inventory.restcontroller;


import com.Mehedi.inventory.model.logistic.ProductWareHouse;
import com.Mehedi.inventory.repository.logistic.ProductWareHouseRepository;
import com.Mehedi.inventory.service.logistic.ProductWareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@RequestMapping("/warehouse/products")
public class ProductWareController {

    @Autowired
    private ProductWareService productWareService;

    @Autowired
    private ProductWareHouseRepository wareHouseRepository;



    @PostMapping("/products")
    public ProductWareHouse moveToWarehouse(@RequestBody ProductWareHouse product){
        return productWareService.saveProduct(product);
    }


    @PutMapping("/{productId}/approve")
    public ResponseEntity<?> approveProduct(@PathVariable Long productId) {
        productWareService.approveProduct(productId);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/allWareDetails")
    public ResponseEntity<List<ProductWareHouse>> getAllDetails(){
        List<ProductWareHouse> wareSummary=wareHouseRepository.findAll();
        return new ResponseEntity<>(wareSummary, HttpStatus.OK);
    }


}
