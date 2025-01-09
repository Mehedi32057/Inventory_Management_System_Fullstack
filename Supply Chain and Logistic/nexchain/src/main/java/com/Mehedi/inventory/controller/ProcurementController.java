package com.Mehedi.inventory.controller;


import com.Mehedi.inventory.model.Procurement;
import com.Mehedi.inventory.repository.ProcurementRepository;
import com.Mehedi.inventory.repository.RawMaterialRepository;
import com.Mehedi.inventory.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ProcurementController {
    @Autowired
    private ProcurementRepository procurementRepository;

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private RawMaterialRepository rawMaterialRepository;


    @GetMapping("/procurement-form")
    public String showProcurementForm(Model model){
        model.addAttribute("procurement", new Procurement());
        model.addAttribute("suppliers",supplierRepository.findAll());
        model.addAttribute("materials",rawMaterialRepository.findAll());
        return "procurement-form";

    }

    @PostMapping("/saveProcurement")
    public String saveProcurement(@ModelAttribute Procurement procurement){
        procurementRepository.save(procurement);
        return "redirect:/procurement-form";
    }







}
