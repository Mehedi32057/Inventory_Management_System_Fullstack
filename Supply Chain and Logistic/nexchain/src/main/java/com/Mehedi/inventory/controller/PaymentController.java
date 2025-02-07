package com.Mehedi.inventory.controller;


import com.Mehedi.inventory.model.Payment;
import com.Mehedi.inventory.model.Procurement;
import com.Mehedi.inventory.repository.PaymentRepository;

import com.Mehedi.inventory.repository.ProcurementRepository;

import com.Mehedi.inventory.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ProcurementRepository procurementRepository;



    @Autowired
    private PaymentService paymentService;



    @GetMapping("/payment-form")
    public String showPaymentForm(Model model){
        List<Procurement> procurements=procurementRepository.findAll();
        model.addAttribute("procurements", procurements);
        model.addAttribute("payment", new Payment());
        return "payment-form";

    }


    @PostMapping("/savePayment")
    public String savePayment(@ModelAttribute Payment payment){

        paymentRepository.save(payment);
        return "redirect:/payment-form";

    }



//    for show payment Details

    @GetMapping("/paymentshow-form")
    public String showPaymentDetails(){
        return "paymentshow-form";
    }


    @PostMapping("/showPaymentDetails")
    public String showPaymentDetails(@RequestParam("paymentId") Long paymentId,Model model ){

        Payment payment=paymentService.getPaymentById(paymentId);
        model.addAttribute("payment",payment);
        return "payment-details";
    }

}
