package com.Mehedi.inventory.restcontroller;


import com.Mehedi.inventory.repository.PaymentRepository;
import com.Mehedi.inventory.repository.SupplierRepository;
import com.Mehedi.inventory.repository.production.ProductionRecordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardRestController {

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ProductionRecordsRepository productionRecordsRepository;





    @GetMapping("/totalSupplier")
    public long getTotalSupplier() {
        return supplierRepository.count();
    }


    @GetMapping("/totalPaymentAmount")
    public Double getTotalPaymentAmount() {
        return paymentRepository.getTotalPaymentAmount();
    }


    @GetMapping("/recordsWithProductName")
    public List<Object[]> getProductionRecordsWithProductName() {
        return productionRecordsRepository.getProductionRecordsWithProductName();
    }


}
