// import { Procurement } from "./procurement.model";
//
// export class Payment {
//     paymentID?: number;
//     procurement?: Procurement;
//     paymentAccount?: string;
//     paymentAmount?: number;
//     paymentDate?: Date;
//   }

// =new code==========
import { Procurement } from "./procurement.model";

export class Payment {
  paymentID?: number;
  procurement?: Procurement;
  paymentAccount?: string;
  paymentAmount?: number;
  paymentDate?: Date;
  paymentMethod?: string;  // New field
  transactionId?: string; // New field
}
