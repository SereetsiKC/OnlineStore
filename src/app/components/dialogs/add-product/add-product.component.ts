import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './../../../interfaces/idialod-data';
import { IBrands } from 'src/app/interfaces/ibrands';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  Title: string;
  ProductForm: FormGroup;
  BrandOptions: Array<IBrands>;
  CategoryOptions: Array<any>;
  SupplierOptions: Array<any>;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
  ) { }

  onSubmit(event) {
    event.stopPropagation();
  }

  Close(event) {
    event.stopPropagation();
    this.dialogRef.close();
  }
  populateValidation(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  buildForm() {
    this.ProductForm = this.fb.group({
      Brand_Id: [""],
      Category_Id: [""],
      Supplier_Id: [""],
      Product_Code: [""],
      Badge: [""],
      Stock_Count: [""],
      Condition: [""],
      Product_Description: [""],
      Price: [""],
    });
  }

  ngOnInit() {
  }

}
