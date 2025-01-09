// import { Component, OnInit } from '@angular/core';
// import { Payment } from '../../model/payment.model';
// import { PaymentService } from '../../service/payment.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//
// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrl: './payment.component.css'
// })
// export class PaymentComponent implements OnInit{
//
//   paymentForm: FormGroup;
//   payments: Payment[] = [];
//   newPayment: Payment = new Payment();
//   searchedPayment: Payment | undefined;
//   searchForm: FormGroup;
//   searchPerformed: boolean = false;
//
//
//   constructor(private fb: FormBuilder, private paymentService: PaymentService) {
//     this.paymentForm = this.fb.group({
//       procurementId: ['', Validators.required],
//       paymentAccount: ['', Validators.required],
//       paymentAmount: ['', Validators.required],
//       paymentDate: ['', Validators.required],
//
//     });
//     this.searchForm = this.fb.group({
//       paymentId: ['', Validators.required]
//     });
//
//   }
//
//   ngOnInit(): void {
//     this.getAllPayments();
//   }
//
//   getAllPayments(): void {
//     this.paymentService.getAllPayments().subscribe({
//       next: (payments) => {
//         this.payments = payments;
//       },
//       error: (error) => {
//         console.error('Error fetching payments:', error);
//       }
//     });
//   }
//
//   addPayment(): void {
//     if (this.paymentForm.valid) {
//       const newPayment: Payment = this.paymentForm.value;
//       this.paymentService.savePayment(newPayment).subscribe({
//         next: (payment) => {
//           console.log('Payment added successfully:', payment);
//           this.getAllPayments();
//           this.paymentForm.reset();
//         },
//         error: (error) => {
//           console.error('Error adding payment:', error);
//         }
//       });
//     }
//   }
//
//   deletePayment(paymentId: number | undefined): void {
//     if (paymentId !== undefined) {
//     this.paymentService.deletePayment(paymentId).subscribe({
//       next: () => {
//         console.log('Payment deleted successfully');
//         this.getAllPayments();
//       },
//       error: (error) => {
//         console.error('Error deleting payment:', error);
//       }
//     });
//   }else{
//     console.error('Payment Id is undefined')
//   }
// }
//
// searchPayment(): void {
//   this.searchPerformed = false;
//   if (this.searchForm.valid) {
//     const paymentId = this.searchForm.get('paymentId')?.value;
//     this.paymentService.getPaymentById(paymentId).subscribe({
//       next: (payment) => {
//         this.searchedPayment = payment;
//         this.searchPerformed = true;
//         console.log('Searched Payment:', this.searchedPayment);
//       },
//       error: (error) => {
//         console.error('Error searching payment by ID:', error);
//         this.searchedPayment = undefined;
//         this.searchPerformed = true;
//       }
//     });
//   } else {
//     console.error('Invalid form');
//   }
// }
//
// }

// ============= new code ==================
//
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../../service/payment.service';
// import { ProcurementService } from '../../service/procurement.service';
// import { Payment } from '../../model/payment.model';
// import { Procurement } from '../../model/procurement.model';
//
// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentForm: FormGroup;
//   payments: Payment[] = [];
//   procurements: Procurement[] = [];
//
//   constructor(
//     private fb: FormBuilder,
//     private paymentService: PaymentService,
//     private procurementService: ProcurementService
//   ) {
//     this.paymentForm = this.fb.group({
//       procurementId: ['', Validators.required],
//       paymentAccount: ['', Validators.required],
//       paymentAmount: ['', Validators.required],
//       paymentDate: ['', Validators.required]
//     });
//   }
//
//   ngOnInit(): void {
//     this.getAllPayments();
//     this.getAllProcurements(); // Fetch procurements when the component loads
//   }
//
//   getAllPayments(): void {
//     this.paymentService.getAllPayments().subscribe({
//       next: (payments) => {
//         this.payments = payments;
//       },
//       error: (error) => {
//         console.error('Error fetching payments:', error);
//       }
//     });
//   }
//
//   getAllProcurements(): void {
//     this.procurementService.getAllProcurements().subscribe({
//       next: (procurements) => {
//         this.procurements = procurements;
//       },
//       error: (error) => {
//         console.error('Error fetching procurements:', error);
//       }
//     });
//   }
//
//   addPayment(): void {
//     if (this.paymentForm.valid) {
//       const newPayment: Payment = this.paymentForm.value;
//       this.paymentService.savePayment(newPayment).subscribe({
//         next: (payment) => {
//           console.log('Payment added successfully:', payment);
//           this.getAllPayments(); // Refresh the payment list
//           this.paymentForm.reset(); // Reset the form
//         },
//         error: (error) => {
//           console.error('Error adding payment:', error);
//         }
//       });
//     }
//   }
//
//   deletePayment(paymentId: number | undefined): void {
//     if (paymentId !== undefined) {
//       this.paymentService.deletePayment(paymentId).subscribe({
//         next: () => {
//           console.log('Payment deleted successfully');
//           this.getAllPayments(); // Refresh the payment list
//         },
//         error: (error) => {
//           console.error('Error deleting payment:', error);
//         }
//       });
//     }
//   }
// }
//
//
// ==============again new ==========

//
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../../service/payment.service';
// import { ProcurementService } from '../../service/procurement.service';
// import { Payment } from '../../model/payment.model';
// import { Procurement } from '../../model/procurement.model';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   paymentForm: FormGroup;
//   searchForm: FormGroup;
//   payments: Payment[] = [];
//   procurements: Procurement[] = [];
//   searchedPayment: Payment | null = null;  // Store searched payment details
//
//   constructor(
//     private fb: FormBuilder,
//     private paymentService: PaymentService,
//     private procurementService: ProcurementService
//   ) {
//     this.paymentForm = this.fb.group({
//       procurementId: ['', Validators.required],
//       paymentAccount: ['', Validators.required],
//       paymentAmount: ['', Validators.required],
//       paymentDate: ['', Validators.required]
//     });
//
//     this.searchForm = this.fb.group({
//       paymentId: ['', Validators.required]  // Form group for searching payment
//     });
//   }
//
//   ngOnInit(): void {
//     this.getAllPayments();
//     this.getAllProcurements(); // Fetch procurements when the component loads
//   }
//
//   getAllPayments(): void {
//     this.paymentService.getAllPayments().subscribe({
//       next: (payments) => {
//         this.payments = payments;
//       },
//       error: (error) => {
//         console.error('Error fetching payments:', error);
//       }
//     });
//   }
//
//   getAllProcurements(): void {
//     this.procurementService.getAllProcurements().subscribe({
//       next: (procurements) => {
//         this.procurements = procurements;
//       },
//       error: (error) => {
//         console.error('Error fetching procurements:', error);
//       }
//     });
//   }
//
//   addPayment(): void {
//     if (this.paymentForm.valid) {
//       const newPayment: Payment = this.paymentForm.value;
//       this.paymentService.savePayment(newPayment).subscribe({
//         next: (payment) => {
//           console.log('Payment added successfully:', payment);
//           this.getAllPayments(); // Refresh the payment list
//           this.paymentForm.reset(); // Reset the form
//         },
//         error: (error) => {
//           console.error('Error adding payment:', error);
//         }
//       });
//     }
//   }
//
//   deletePayment(paymentId: number | undefined): void {
//     if (paymentId !== undefined) {
//       this.paymentService.deletePayment(paymentId).subscribe({
//         next: () => {
//           console.log('Payment deleted successfully');
//           this.getAllPayments(); // Refresh the payment list
//         },
//         error: (error) => {
//           console.error('Error deleting payment:', error);
//         }
//       });
//     }
//   }
//
//   searchPayment(): void {
//     if (this.searchForm.valid) {
//       const paymentId = this.searchForm.get('paymentId')?.value;
//       this.paymentService.getPaymentById(paymentId).subscribe({
//         next: (payment) => {
//           this.searchedPayment = payment;  // Store the payment details to display
//         },
//         error: (error) => {
//           console.error('Error searching payment by ID:', error);
//           this.searchedPayment = null;  // Clear previous search result
//         }
//       });
//     }
//   }
// }



// ================= new code ===================



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { PaymentService } from '../../service/payment.service';
// import { ProcurementService } from '../../service/procurement.service';
// import { Payment } from '../../model/payment.model';
// import { Procurement } from '../../model/procurement.model';
//
//
// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css'],
// })
// export class PaymentComponent implements OnInit {
//   paymentForm: FormGroup;
//   searchForm: FormGroup;
//   payments: Payment[] = [];
//   procurements: Procurement[] = [];
//   searchedPayment: Payment | null = null;
//
//   constructor(
//     private fb: FormBuilder,
//     private paymentService: PaymentService,
//     private procurementService: ProcurementService
//   ) {
//     this.paymentForm = this.fb.group({
//       procurementId: ['', Validators.required],
//       paymentAccount: ['', Validators.required],
//       paymentAmount: ['', Validators.required],
//       paymentDate: ['', Validators.required],
//       paymentMethod: ['', Validators.required], // New field
//       transactionId: ['', Validators.required], // New field
//     });
//
//     this.searchForm = this.fb.group({
//       paymentId: ['', Validators.required],
//     });
//   }
//
//   ngOnInit(): void {
//     this.getAllPayments();
//     this.getAllProcurements();
//   }
//
//   getAllPayments(): void {
//     this.paymentService.getAllPayments().subscribe({
//       next: (payments) => {
//         this.payments = payments;
//       },
//       error: (error) => {
//         console.error('Error fetching payments:', error);
//       },
//     });
//   }
//
//   getAllProcurements(): void {
//     this.procurementService.getAllProcurements().subscribe({
//       next: (procurements) => {
//         this.procurements = procurements;
//       },
//       error: (error) => {
//         console.error('Error fetching procurements:', error);
//       },
//     });
//   }
//
//   addPayment(): void {
//     if (this.paymentForm.valid) {
//       const newPayment: Payment = this.paymentForm.value;
//       this.paymentService.savePayment(newPayment).subscribe({
//         next: (payment) => {
//           console.log('Payment added successfully:', payment);
//           this.getAllPayments();
//           this.paymentForm.reset();
//         },
//         error: (error) => {
//           console.error('Error adding payment:', error);
//         },
//       });
//     }
//   }
//
//   deletePayment(paymentId: number | undefined): void {
//     if (paymentId !== undefined) {
//       this.paymentService.deletePayment(paymentId).subscribe({
//         next: () => {
//           console.log('Payment deleted successfully');
//           this.getAllPayments();
//         },
//         error: (error) => {
//           console.error('Error deleting payment:', error);
//         },
//       });
//     }
//   }
//
//   searchPayment(): void {
//     if (this.searchForm.valid) {
//       const paymentId = this.searchForm.get('paymentId')?.value;
//       this.paymentService.getPaymentById(paymentId).subscribe({
//         next: (payment) => {
//           this.searchedPayment = payment;
//         },
//         error: (error) => {
//           console.error('Error searching payment by ID:', error);
//           this.searchedPayment = null;
//         },
//       });
//     }
//   }
// }


// ============== new code ========================



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../service/payment.service';
import { ProcurementService } from '../../service/procurement.service';
import { Payment } from '../../model/payment.model';
import { Procurement } from '../../model/procurement.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  searchForm: FormGroup;
  payments: Payment[] = [];
  procurements: Procurement[] = [];
  searchedPayment: Payment | null = null;
  isEditMode: boolean = false;
  selectedPaymentId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private procurementService: ProcurementService
  ) {
    this.paymentForm = this.fb.group({
      procurementId: ['', Validators.required],
      paymentAccount: ['', Validators.required],
      paymentAmount: ['', Validators.required],
      paymentDate: ['', Validators.required],
      paymentMethod: ['', Validators.required], // New field
      transactionId: ['', Validators.required], // New field
    });

    this.searchForm = this.fb.group({
      paymentId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllPayments();
    this.getAllProcurements();
  }

  getAllPayments(): void {
    this.paymentService.getAllPayments().subscribe({
      next: (payments) => {
        this.payments = payments;
      },
      error: (error) => {
        console.error('Error fetching payments:', error);
      },
    });
  }

  getAllProcurements(): void {
    this.procurementService.getAllProcurements().subscribe({
      next: (procurements) => {
        this.procurements = procurements;
      },
      error: (error) => {
        console.error('Error fetching procurements:', error);
      },
    });
  }

  addOrUpdatePayment(): void {
    if (this.paymentForm.valid) {
      const payment: Payment = this.paymentForm.value;

      if (this.isEditMode && this.selectedPaymentId !== null) {
        // Update payment
        this.paymentService.updatePayment(this.selectedPaymentId, payment).subscribe({
          next: (updatedPayment) => {
            console.log('Payment updated successfully:', updatedPayment);
            this.getAllPayments();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error updating payment:', error);
          },
        });
      } else {
        // Add new payment
        this.paymentService.savePayment(payment).subscribe({
          next: (newPayment) => {
            console.log('Payment added successfully:', newPayment);
            this.getAllPayments();
            this.resetForm();
          },
          error: (error) => {
            console.error('Error adding payment:', error);
          },
        });
      }
    }
  }

  deletePayment(paymentId: number | undefined): void {
    if (paymentId !== undefined) {
      this.paymentService.deletePayment(paymentId).subscribe({
        next: () => {
          console.log('Payment deleted successfully');
          this.getAllPayments();
        },
        error: (error) => {
          console.error('Error deleting payment:', error);
        },
      });
    }
  }

  // editPayment(payment: Payment): void {
  //   this.isEditMode = true;
  //   this.selectedPaymentId = payment.paymentID || null;
  //   this.paymentForm.patchValue({
  //     procurementId: payment.procurement?.id,
  //     paymentAccount: payment.paymentAccount,
  //     paymentAmount: payment.paymentAmount,
  //     paymentDate: payment.paymentDate,
  //     paymentMethod: payment.paymentMethod,
  //     transactionId: payment.transactionId,
  //   });
  // }

  editPayment(payment: Payment): void {
    this.isEditMode = true;
    this.selectedPaymentId = payment.paymentID || null;
    this.paymentForm.patchValue({
      procurementId: payment.procurement?.procurementID, // Ensure this is the correct field
      paymentAccount: payment.paymentAccount,
      paymentAmount: payment.paymentAmount,
      paymentDate: new Date(payment.paymentDate!), // Convert to Date object if necessary
      paymentMethod: payment.paymentMethod,
      transactionId: payment.transactionId,
    });
  }


  resetForm(): void {
    this.isEditMode = false;
    this.selectedPaymentId = null;
    this.paymentForm.reset();
  }

  printPayment(payment: Payment): void {
    const printContent = `
      <div>
        <h1>Payment Receipt</h1>
        <p><strong>Payment ID:</strong> ${payment.paymentID}</p>
        <p><strong>Procurement ID:</strong> ${payment.procurement?.procurementID}</p>
        <p><strong>Payment Account:</strong> ${payment.paymentAccount}</p>
        <p><strong>Payment Amount:</strong> ${payment.paymentAmount}</p>
        <p><strong>Payment Date:</strong> ${payment.paymentDate}</p>
        <p><strong>Payment Method:</strong> ${payment.paymentMethod}</p>
        <p><strong>Transaction ID:</strong> ${payment.transactionId}</p>
      </div>
    `;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  }
}




