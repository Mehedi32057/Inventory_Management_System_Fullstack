package com.Mehedi.inventory.repository;

import com.Mehedi.inventory.model.RawMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RawMaterialRepository extends JpaRepository<RawMaterial, Long> {

    RawMaterial findByMaterialName(String materialName);
}
