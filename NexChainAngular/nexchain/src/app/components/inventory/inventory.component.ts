// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Inventory } from '../../model/inventory.model';
// import { InventoryService } from '../../service/inventory.service';
// import { RawMaterial } from '../../model/rawmaterial.model';
// import { RawmaterialService } from '../../service/rawmaterial.service';
//
// @Component({
//   selector: 'app-inventory',
//   templateUrl: './inventory.component.html',
//   styleUrl: './inventory.component.css'
// })
// export class InventoryComponent implements OnInit{
//
//   inventoryForm: FormGroup;
//   inventoryList: Inventory[] = [];
//   rawMaterials: RawMaterial[] = [];
//
//
//   filteredInventoryList: Inventory[] = []; // Declare filtered inventory list
//
//   dateRangeForm!: FormGroup;
//
//   constructor(private formBuilder: FormBuilder, private inventoryService: InventoryService,  private rawMaterialService: RawmaterialService) {
//
//     this.inventoryForm = this.formBuilder.group({
//       rawMaterial: ['', Validators.required],
//       quantityInStock: ['', Validators.required],
//       unitPrice: ['', Validators.required],
//       lastStockUpdateDate: ['', Validators.required],
//       procurement: ['', Validators.required]
//     });
//
//   }
//
//   ngOnInit(): void {
//
//     this.loadInventoryDetails();
//     this.getAllRawMaterials();
//
//     this.dateRangeForm = this.formBuilder.group({
//       startDate: [''],
//       endDate: ['']
//     });
//
//   }
//
//
//   getAllRawMaterials() {
//     this.rawMaterialService.getAllRawMaterials().subscribe(rawMaterials => {
//       this.rawMaterials = rawMaterials;
//     });
//   }
//
//   loadInventoryDetails() {
//     this.inventoryService.getInventoryDetails().subscribe(data => {
//       this.inventoryList = data;
//      // Initialize filtered list with all items by default
//      this.filteredInventoryList = [...this.inventoryList];
//
//     });
//   }
//
//   saveInventory(): void {
//     if (this.inventoryForm.valid) {
//       // Get the selected raw material object
//       const selectedRawMaterial: RawMaterial | undefined = this.rawMaterials.find(material => material.materialName === this.inventoryForm.value.rawMaterial);
//
//       // Ensure the selected raw material is found
//       if (selectedRawMaterial) {
//         // Create a new Inventory object with selected raw material
//         const inventoryData: Inventory = {
//           rawMaterial: selectedRawMaterial,
//           quantityInStock: this.inventoryForm.value.quantityInStock,
//           unitPrice: this.inventoryForm.value.unitPrice,
//           lastStockUpdateDate: this.inventoryForm.value.lastStockUpdateDate,
//           procurement: this.inventoryForm.value.procurement
//         };
//
//         // Call the service to save inventory
//         this.inventoryService.saveInventory(inventoryData).subscribe(response => {
//           console.log(response); // Handle success or error
//           // Reload inventory details after saving
//           this.loadInventoryDetails();
//           // Reset form
//           this.inventoryForm.reset();
//         });
//       } else {
//         console.error('Selected raw material not found.');
//       }
//     }
//   }
//
//
//
//    // Filter inventory list based on the selected date range
//   filterInventoryList() {
//     const startDate = this.dateRangeForm.get('startDate')?.value;
//     const endDate = this.dateRangeForm.get('endDate')?.value;
//
//     if (startDate && endDate) {
//       this.filteredInventoryList = this.inventoryList.filter(
//         inventory =>
//           inventory.lastStockUpdateDate &&
//           inventory.lastStockUpdateDate >= startDate &&
//           inventory.lastStockUpdateDate <= endDate
//       );
//     } else {
//       // If either start or end date is not selected, show the entire inventory list
//       this.filteredInventoryList = [...this.inventoryList];
//     }
//   }
//
//   // Handle form submission
//   onSubmit() {
//     this.filterInventoryList(); // Apply filtering based on date range
//   }
// }
//
//
//





// ===============new code=============================

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Inventory } from '../../model/inventory.model';
// import { InventoryService } from '../../service/inventory.service';
// import { RawMaterial } from '../../model/rawmaterial.model';
// import { RawmaterialService } from '../../service/rawmaterial.service';
// import { Procurement } from '../../model/procurement.model';
// import { ProcurementService } from '../../service/procurement.service';
//
// @Component({
//   selector: 'app-inventory',
//   templateUrl: './inventory.component.html',
//   styleUrls: ['./inventory.component.css']
// })
// export class InventoryComponent implements OnInit {
//
//   inventoryForm: FormGroup;
//   inventoryList: Inventory[] = [];
//   rawMaterials: RawMaterial[] = [];
//   procurements: Procurement[] = [];  // Add procurements array
//   filteredInventoryList: Inventory[] = [];  // Declare filtered inventory list
//   dateRangeForm!: FormGroup;
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private inventoryService: InventoryService,
//     private rawMaterialService: RawmaterialService,
//     private procurementService: ProcurementService  // Add procurement service
//   ) {
//     this.inventoryForm = this.formBuilder.group({
//       rawMaterial: ['', Validators.required],
//       quantityInStock: ['', Validators.required],
//       unitPrice: ['', Validators.required],
//       lastStockUpdateDate: ['', Validators.required],
//       procurement: ['', Validators.required]
//     });
//   }
//
//   ngOnInit(): void {
//     this.loadInventoryDetails();
//     this.getAllRawMaterials();
//     this.getAllProcurements();  // Load procurements
//     this.dateRangeForm = this.formBuilder.group({
//       startDate: [''],
//       endDate: ['']
//     });
//   }
//
//   getAllRawMaterials() {
//     this.rawMaterialService.getAllRawMaterials().subscribe(rawMaterials => {
//       this.rawMaterials = rawMaterials;
//     });
//   }
//
//   getAllProcurements() {
//     this.procurementService.getAllProcurements().subscribe(procurements => {
//       this.procurements = procurements;
//     });
//   }
//
//   loadInventoryDetails() {
//     this.inventoryService.getInventoryDetails().subscribe(data => {
//       this.inventoryList = data;
//       this.filteredInventoryList = [...this.inventoryList];  // Initialize filtered list
//     });
//   }
//
//   saveInventory(): void {
//     if (this.inventoryForm.valid) {
//       const selectedRawMaterial = this.inventoryForm.value.rawMaterial;
//       const selectedProcurement = this.inventoryForm.value.procurement;
//
//       const inventoryData: Inventory = {
//         rawMaterial: selectedRawMaterial,
//         quantityInStock: this.inventoryForm.value.quantityInStock,
//         unitPrice: this.inventoryForm.value.unitPrice,
//         lastStockUpdateDate: this.inventoryForm.value.lastStockUpdateDate,
//         procurement: selectedProcurement
//       };
//
//       this.inventoryService.saveInventory(inventoryData).subscribe(response => {
//         console.log(response);
//         this.loadInventoryDetails();
//         this.inventoryForm.reset();
//       }, error => {
//         console.error(error);
//       });
//     }
//   }
//
//   filterInventoryList() {
//     const startDate = this.dateRangeForm.get('startDate')?.value;
//     const endDate = this.dateRangeForm.get('endDate')?.value;
//
//     // Convert date strings to Date objects for comparison
//     const startDateObj = startDate ? new Date(startDate) : null;
//     const endDateObj = endDate ? new Date(endDate) : null;
//
//     if (startDateObj && endDateObj) {
//       this.filteredInventoryList = this.inventoryList.filter(inventory => {
//         // Check if lastStockUpdateDate is not undefined or null before converting it to Date
//         const lastStockUpdateDate = inventory.lastStockUpdateDate;
//         const lastStockDate = lastStockUpdateDate ? new Date(lastStockUpdateDate) : null;
//
//         // If lastStockDate is invalid, return false to exclude this item from the filter
//         if (!lastStockDate || isNaN(lastStockDate.getTime())) {
//           console.error('Invalid or missing lastStockUpdateDate:', lastStockUpdateDate);
//           return false;
//         }
//
//         return lastStockDate >= startDateObj && lastStockDate <= endDateObj;
//       });
//     } else {
//       this.filteredInventoryList = [...this.inventoryList]; // If no date range is provided, show all
//     }
//   }
//
//
//   onSubmit() {
//     this.filterInventoryList();  // Apply date filtering
//   }
// }


// ================== another new code==================

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inventory } from '../../model/inventory.model';
import { InventoryService } from '../../service/inventory.service';
import { RawMaterial } from '../../model/rawmaterial.model';
import { RawmaterialService } from '../../service/rawmaterial.service';
import { Procurement } from '../../model/procurement.model';
import { ProcurementService } from '../../service/procurement.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryForm: FormGroup;
  inventoryList: Inventory[] = [];
  rawMaterials: RawMaterial[] = [];
  procurements: Procurement[] = [];
  filteredInventoryList: Inventory[] = [];
  dateRangeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private inventoryService: InventoryService,
    private rawMaterialService: RawmaterialService,
    private procurementService: ProcurementService
  ) {
    this.inventoryForm = this.formBuilder.group({
      rawMaterial: ['', Validators.required],
      quantityInStock: ['', Validators.required],
      unitPrice: ['', Validators.required],
      lastStockUpdateDate: ['', Validators.required],
      procurement: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadInventoryDetails();
    this.getAllRawMaterials();
    this.getAllProcurements();
    this.dateRangeForm = this.formBuilder.group({
      startDate: [''],
      endDate: ['']
    });
  }

  getAllRawMaterials() {
    this.rawMaterialService.getAllRawMaterials().subscribe(
      rawMaterials => {
        this.rawMaterials = rawMaterials;
      },
      error => {
        console.error('Error fetching raw materials:', error);
      }
    );
  }

  getAllProcurements() {
    this.procurementService.getAllProcurements().subscribe(
      procurements => {
        this.procurements = procurements;
      },
      error => {
        console.error('Error fetching procurements:', error);
      }
    );
  }

  loadInventoryDetails() {
    this.inventoryService.getInventoryDetails().subscribe(
      data => {
        this.inventoryList = data;
        this.filteredInventoryList = [...this.inventoryList];
      },
      error => {
        console.error('Error fetching inventory details:', error);
      }
    );
  }

  saveInventory(): void {
    if (this.inventoryForm.valid) {
      const selectedRawMaterial = this.inventoryForm.value.rawMaterial;
      const selectedProcurement = this.inventoryForm.value.procurement;

      const inventoryData: Inventory = {
        rawMaterial: selectedRawMaterial,
        quantityInStock: this.inventoryForm.value.quantityInStock,
        unitPrice: this.inventoryForm.value.unitPrice,
        lastStockUpdateDate: this.inventoryForm.value.lastStockUpdateDate,
        procurement: selectedProcurement
      };

      console.log('Saving inventory data:', inventoryData);

      this.inventoryService.saveInventory(inventoryData).subscribe(
        response => {
          console.log('Inventory saved:', response);
          this.loadInventoryDetails();
          this.inventoryForm.reset();
        },
        error => {
          console.error('Error occurred while saving inventory:', error);
          if (error.status === 409) {
            alert('Conflict detected: ' + error.error);
          } else {
            console.error('Unexpected error:', error);
          }
        }
      );
    } else {
      console.warn('Inventory form is invalid:', this.inventoryForm.value);
    }
  }

  filterInventoryList() {
    const startDate = this.dateRangeForm.get('startDate')?.value;
    const endDate = this.dateRangeForm.get('endDate')?.value;

    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;

    if (startDateObj && endDateObj) {
      this.filteredInventoryList = this.inventoryList.filter(inventory => {
        const lastStockUpdateDate = inventory.lastStockUpdateDate;
        const lastStockDate = lastStockUpdateDate ? new Date(lastStockUpdateDate) : null;

        if (!lastStockDate || isNaN(lastStockDate.getTime())) {
          console.error('Invalid or missing lastStockUpdateDate:', lastStockUpdateDate);
          return false;
        }

        return lastStockDate >= startDateObj && lastStockDate <= endDateObj;
      });
    } else {
      this.filteredInventoryList = [...this.inventoryList];
    }
  }

  onSubmit() {
    this.filterInventoryList();
  }
}








