//package com.Mehedi.inventory.service;
//
//
//import com.Mehedi.inventory.model.Payment;
//import com.Mehedi.inventory.repository.PaymentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class PaymentService {
//
//    @Autowired
//    private PaymentRepository paymentRepository;
//
//    public Payment getPaymentById(Long paymentID){
//        return paymentRepository.findById(paymentID).orElse(null);
//
//    }
//
//    public ResponseEntity<List<Payment>> getAllPayments(){
//        List<Payment> paymentList=paymentRepository.findAll();
//        if (paymentList.isEmpty()){
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(paymentList,HttpStatus.OK);
//    }
//}


//==================new code===============

package com.Mehedi.inventory.service;

import com.Mehedi.inventory.model.Payment;
import com.Mehedi.inventory.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    /**
     * Fetch a payment by ID.
     *
     * @param paymentID ID of the payment
     * @return Payment object or null if not found
     */
    public Payment getPaymentById(Long paymentID) {
        return paymentRepository.findById(paymentID).orElse(null);
    }

    /**
     * Fetch all payments.
     *
     * @return ResponseEntity containing the list of payments or a status code
     */
    public ResponseEntity<List<Payment>> getAllPayments() {
        List<Payment> paymentList = paymentRepository.findAll();
        if (paymentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(paymentList, HttpStatus.OK);
    }

    /**
     * Save a new payment.
     *
     * @param payment Payment object to save
     * @return ResponseEntity containing the saved payment
     */
    public ResponseEntity<Payment> savePayment(Payment payment) {
        try {
            Payment savedPayment = paymentRepository.save(payment);
            return new ResponseEntity<>(savedPayment, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update an existing payment.
     *
     * @param paymentID ID of the payment to update
     * @param payment Updated payment details
     * @return ResponseEntity containing the updated payment
     */
    public ResponseEntity<Payment> updatePayment(Long paymentID, Payment payment) {
        Optional<Payment> existingPayment = paymentRepository.findById(paymentID);

        if (existingPayment.isPresent()) {
            Payment updatedPayment = existingPayment.get();
            updatedPayment.setProcurement(payment.getProcurement());
            updatedPayment.setPaymentAccount(payment.getPaymentAccount());
            updatedPayment.setPaymentAmount(payment.getPaymentAmount());
            updatedPayment.setPaymentDate(payment.getPaymentDate());
            updatedPayment.setPaymentMethod(payment.getPaymentMethod()); // New Field
            updatedPayment.setTransactionId(payment.getTransactionId()); // New Field

            paymentRepository.save(updatedPayment);
            return new ResponseEntity<>(updatedPayment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Delete a payment by ID.
     *
     * @param paymentID ID of the payment to delete
     * @return ResponseEntity with a status code
     */
    public ResponseEntity<HttpStatus> deletePayment(Long paymentID) {
        try {
            if (paymentRepository.existsById(paymentID)) {
                paymentRepository.deleteById(paymentID);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
