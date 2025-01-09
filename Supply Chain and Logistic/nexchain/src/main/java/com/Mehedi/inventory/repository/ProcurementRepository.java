package com.Mehedi.inventory.repository;

import com.Mehedi.inventory.model.Procurement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProcurementRepository extends JpaRepository<Procurement,Long> {
}
