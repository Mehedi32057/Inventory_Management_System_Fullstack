package com.Mehedi.inventory.service;


import com.Mehedi.inventory.model.Procurement;
import com.Mehedi.inventory.repository.ProcurementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProcurementService {

    @Autowired
    private ProcurementRepository procurementRepository;

    public Procurement getProcurementById(Long id){
        return procurementRepository.findById(id).orElse(null);
    }

}
