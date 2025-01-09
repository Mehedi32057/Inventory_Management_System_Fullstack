// import { Component, OnInit } from '@angular/core';
// import { Products } from '../../model/products.model';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ProductsService } from '../../service/products.service';
//
// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.css'
// })
// export class ProductsComponent implements OnInit{
//
//   products: Products[] = [];
//   productForm: FormGroup;
//   selectedImage: File | null = null;
//
//   constructor(private productService: ProductsService, private fb: FormBuilder) {
//     this.productForm = this.fb.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required],
//       batchNumber: ['', Validators.required],
//       price: ['', [Validators.required, Validators.min(0)]]
//     });
//   }
//
//   ngOnInit(): void {
//     this.getAllProducts();
//
//   }
//
//   getAllProducts(): void {
//     this.productService.getAllProducts().subscribe({
//       next: (products) => {
//         this.products = products;
//       },
//       error: (error) => {
//         console.error('Error fetching products:', error);
//       }
//     });
//   }
//
//   onFileSelected(event: any): void {
//     this.selectedImage = event.target.files[0];
//   }
//
//   addProduct(): void {
//     if (this.productForm.valid) {
//       const formData = new FormData();
//       formData.append('name', this.productForm.value.name);
//       formData.append('description', this.productForm.value.description);
//       formData.append('batchNumber', this.productForm.value.batchNumber);
//       formData.append('price', String(this.productForm.value.price));
//       if (this.selectedImage) {
//         formData.append('image', this.selectedImage);
//       }
//       this.productService.addProduct(formData).subscribe({
//         next: (product) => {
//           console.log('Product added successfully:', product);
//           this.getAllProducts();
//           this.resetForm();
//         },
//         error: (error) => {
//           console.error('Error adding product:', error);
//         }
//       });
//     }
//   }
//
//   resetForm(): void {
//     this.productForm.reset();
//     this.selectedImage = null;
//   }
//
// }
// ==================== new code ======================

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  productForm: FormGroup;
  selectedImage: string | null = null; // This will store the image as a base64 string

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      batchNumber: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  // Handle file selection
  onFileSelected(event: any): void {
    const file: File = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onload = () => {
        // On load, set the image as a base64 string (data URL)
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(file); // Read the file as Data URL (base64)
    }
  }

  // Add product and display it in the list
  addProduct(): void {
    if (this.productForm.valid) {
      const newProduct = {
        id: this.products.length + 1, // Simple ID generation
        name: this.productForm.value.name,
        description: this.productForm.value.description,
        batchNumber: this.productForm.value.batchNumber,
        price: this.productForm.value.price,
        imageUrl: this.selectedImage // Store the base64 string as the image URL
      };
      this.products.push(newProduct); // Add product to the list
      this.resetForm(); // Reset the form after adding
    }
  }

  // Reset the form after adding the product
  resetForm(): void {
    this.productForm.reset();
    this.selectedImage = null; // Clear selected image
  }
}
