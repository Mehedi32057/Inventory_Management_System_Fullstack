package com.Mehedi.inventory.repository.production;


import com.Mehedi.inventory.model.Stock;
import com.Mehedi.inventory.model.production.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient,Long> {
    Ingredient findByStock(Stock stock);
}
