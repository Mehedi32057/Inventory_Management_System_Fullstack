//package com.Mehedi.inventory.restcontroller;
//
//
//import com.Mehedi.inventory.model.Payment;
//import com.Mehedi.inventory.repository.PaymentRepository;
//import com.Mehedi.inventory.service.PaymentService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/payments")
//public class PaymentRestController {
//
//    @Autowired
//    private PaymentService paymentService;
//
//    @Autowired
//    private PaymentRepository paymentRepository;
//
//
//    @GetMapping("/alldetails")
//    public ResponseEntity<List<Payment>> getAllPayments(){
//
//        return paymentService.getAllPayments();
//    }
//
//    @GetMapping("/{paymentId}")
//    public ResponseEntity<Payment> getPaymentById(@PathVariable Long paymentId){
//        Payment payment = paymentService.getPaymentById(paymentId);
//
//        if (payment != null){
//            return ResponseEntity.ok(payment);
//        }else {
//            return ResponseEntity.notFound().build();
//        }
//
//
//    }
//
//    @PostMapping("/save")
//    public ResponseEntity<Payment> savePayment(@RequestBody Payment payment){
//        Payment savedPayment = paymentRepository.save(payment);
//        return ResponseEntity.status(HttpStatus.CREATED).body(savedPayment);
//    }
//
//    @PutMapping("/{paymentId}")
//    public ResponseEntity<Payment> updatePayment(@PathVariable Long paymentId ,@RequestBody Payment payment) {
//
//        // Check if the payment with the given ID exists
//        if (!paymentRepository.existsById(paymentId)){
//            return ResponseEntity.notFound().build();// Return 404 Not Found
//        }
//        payment.setPaymentID(paymentId);
//        Payment updatePayment= paymentRepository.save(payment);
//        return ResponseEntity.ok(updatePayment); // Return 200 OK with the updated payment
//
//
//    }
//
//
//    @DeleteMapping("/{paymentId}")
//    public ResponseEntity<Void> deletePayment(@PathVariable Long paymentId){
//        paymentRepository.deleteById(paymentId);
//        return ResponseEntity.noContent().build();
//
//
//    }
//}
//========================= new code===============
package com.Mehedi.inventory.restcontroller;

import com.Mehedi.inventory.model.Payment;
import com.Mehedi.inventory.repository.PaymentRepository;
import com.Mehedi.inventory.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/payments")
public class PaymentRestController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private PaymentRepository paymentRepository;

    @GetMapping("/alldetails")
    public ResponseEntity<List<Payment>> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{paymentId}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long paymentId) {
        Payment payment = paymentService.getPaymentById(paymentId);

        if (payment != null) {
            return ResponseEntity.ok(payment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Payment> savePayment(@RequestBody Payment payment) {
        Payment savedPayment = paymentRepository.save(payment);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPayment);
    }

    @PutMapping("/{paymentId}")
    public ResponseEntity<Payment> updatePayment(@PathVariable Long paymentId, @RequestBody Payment payment) {
        if (!paymentRepository.existsById(paymentId)) {
            return ResponseEntity.notFound().build();
        }
        payment.setPaymentID(paymentId);
        Payment updatedPayment = paymentRepository.save(payment);
        return ResponseEntity.ok(updatedPayment);
    }

    @DeleteMapping("/{paymentId}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long paymentId) {
        paymentRepository.deleteById(paymentId);
        return ResponseEntity.noContent().build();
    }
}

