package com.Mehedi.inventory.repository.logistic;

import com.Mehedi.inventory.model.logistic.ProductWareHouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductWareHouseRepository extends JpaRepository<ProductWareHouse, Long> {
}
