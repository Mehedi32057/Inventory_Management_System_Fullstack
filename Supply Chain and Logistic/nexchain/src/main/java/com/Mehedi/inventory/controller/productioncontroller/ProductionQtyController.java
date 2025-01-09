package com.Mehedi.inventory.controller.productioncontroller;


import com.Mehedi.inventory.model.production.ProductionRecords;
import com.Mehedi.inventory.repository.production.RecipeRepository;
import com.Mehedi.inventory.service.production.ProductionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/production")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from http://localhost:4200

public class ProductionQtyController {

//    http://localhost:8084/production/ingredients?productName=Apple Juice

    @Autowired
    private ProductionService productionService;

    @Autowired
    private RecipeRepository  recipeRepository;

    @PostMapping("/produceProduct")
    public ResponseEntity<String> produceProduct(@RequestBody ProductionRecords request) {
        try {
            productionService.produceProduct(request);
            return ResponseEntity.ok("Product production successful");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error producing Product: " + e.getMessage());
        }
    }


}
