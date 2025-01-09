package com.Mehedi.inventory.controller;


import com.Mehedi.inventory.model.Procurement;
import com.Mehedi.inventory.service.ProcurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ShowProcurementController {

    @Autowired
    private ProcurementService procurementService;

    @GetMapping("/showProcurementForm")
    public String showProcurementForm() {
        return "showProcurementForm"; // This should be the name of your HTML file (e.g., showProcurementForm.html)
    }

    @GetMapping("/showProcurement")
    public String showProcurement(@RequestParam("procurementId") Long procurementId, Model model) {
        Procurement procurement = procurementService.getProcurementById(procurementId);
        model.addAttribute("procurement", procurement);
        return "showProcurement"; // This should be the name of your HTML file to display the procurement details (e.g., showProcurement.html)
    }

}
