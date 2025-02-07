//package com.Mehedi.inventory.model;
//
//
//import jakarta.persistence.*;
//import lombok.Data;
//
//import java.sql.Date;
//
//
//@Data
//@Entity
//@Table(name = "payment")
//public class Payment {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "payment_id")
//    private Long paymentID;
//
//    @ManyToOne
//    @JoinColumn(name = "procurement_id")
//    private Procurement procurement;
//
//    @Column(name = "payment_account")
//    private String paymentAccount;
//
//    @Column(name = "payment_amount")
//    private double paymentAmount;
//
//    @Column(name = "payment_date")
//    private Date paymentDate;
//
//
////    @ManyToOne
////    @JoinColumn(name = "supplier_name")
////    private Supplier supplier;
//}

//============== new code==================

package com.Mehedi.inventory.model;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Date;

@Data
@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private Long paymentID;

    @ManyToOne
    @JoinColumn(name = "procurement_id")
    private Procurement procurement;

    @Column(name = "payment_account")
    private String paymentAccount;

    @Column(name = "payment_amount")
    private double paymentAmount;

    @Column(name = "payment_date")
    private Date paymentDate;

    @Column(name = "payment_method")
    private String paymentMethod; // New Field

    @Column(name = "transaction_id")
    private String transactionId; // New Field
}
