package com.Mehedi.inventory.repository;


import com.Mehedi.inventory.model.RawMaterial;
import com.Mehedi.inventory.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository<Stock ,Long> {
    Stock findByRawMaterial(RawMaterial rawMaterial);

    Stock findByRawMaterial_MaterialName(String name);


}
