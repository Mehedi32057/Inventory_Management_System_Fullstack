//package com.Mehedi.inventory.repository;
//
//import com.Mehedi.inventory.model.Payment;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//public interface PaymentRepository extends JpaRepository<Payment, Long> {
//
//    @Query("SELECT SUM(p.paymentAmount) FROM Payment p")
//    Double getTotalPaymentAmount();
//
//
//
//
//
//}

//=========== new code===============
package com.Mehedi.inventory.repository;

import com.Mehedi.inventory.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    /**
     * Get the total payment amount.
     *
     * @return The sum of all payment amounts.
     */
    @Query("SELECT SUM(p.paymentAmount) FROM Payment p")
    Double getTotalPaymentAmount();

    /**
     * Get payments by payment method.
     *
     * @param paymentMethod The payment method (e.g., 'Card', 'Bkash').
     * @return A list of payments matching the given method.
     */
    @Query("SELECT p FROM Payment p WHERE p.paymentMethod = :paymentMethod")
    List<Payment> findByPaymentMethod(@Param("paymentMethod") String paymentMethod);

    /**
     * Get payments by procurement ID.
     *
     * @param procurementId The ID of the procurement.
     * @return A list of payments for the given procurement ID.
     */
    @Query("SELECT p FROM Payment p WHERE p.procurement.id = :procurementId")
    List<Payment> findByProcurementId(@Param("procurementId") Long procurementId);

    /**
     * Get payments made within a specific date range.
     *
     * @param startDate The start date.
     * @param endDate   The end date.
     * @return A list of payments made in the specified range.
     */
    @Query("SELECT p FROM Payment p WHERE p.paymentDate BETWEEN :startDate AND :endDate")
    List<Payment> findByPaymentDateRange(@Param("startDate") String startDate, @Param("endDate") String endDate);
}
