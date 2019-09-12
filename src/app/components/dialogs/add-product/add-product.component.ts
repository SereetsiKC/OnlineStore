import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from './../../../interfaces/idialod-data';
import { IBrands } from 'src/app/interfaces/ibrands';
import { LookupService } from 'src/app/services/lookup.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { ProductService } from './../../../services/product.service';
import { ResponseResult } from './../../../interfaces/response-result';
import { ICategory } from './../../../interfaces/icategory';
import { ISupplier } from './../../../interfaces/isupplier';
import { ITblProducts } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  Title: string;
  ProductForm: FormGroup;
  BrandOptions: Array<IBrands>;
  CategoryOptions: Array<ICategory>;
  SupplierOptions: Array<any>;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
    private productService: ProductService,
    private lookupService: LookupService,
    private supplierService: SupplierService,
  ) {
    this.Title = data.Title;
  }

  onSubmit(event) {
    event.stopPropagation();
    if (this.ProductForm.valid) {
      let _form = this.ProductForm.value;
      let oData = {
        Id: 0,
        Brand_Id: _form.Brand_Id,
        Category_Id: _form.Category_Id,
        Supplier_Id: _form.Supplier_Id,
        Product_Code: `PC${_form.Brand_Id}${_form.Category_Id}${_form.Supplier_Id}`,
        Stock_Count: _form.Stock_Count,
        Condition: _form.Condition,
        Product_Description: _form.Product_Description,
        Price: _form.Price,
        User_Id: 'System',
        Badge: '0x6E6F496D616765',
        Update_Date: new Date()
      }
      this.SaveProduct(oData)
        .then(
          x => {
            if (x) {
              this.Close(event);
            }
          }
        )
    } else {
      alert('Please fill all required fields');
    }
    console.log(this.ProductForm);
  }

  SaveProduct(Data: ITblProducts): Promise<boolean> {
    return new Promise((resolve) => {
      this.productService.SaveProduct(Data)
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {

            } else {
              console.log(data.errorMessage);
              resolve(false);
            }
            resolve(true);
          },
          (error: any) => {
            console.log(error);
            resolve(false);
          }
        );
    });
  }

  Close(event) {
    event.stopPropagation();
    this.dialogRef.close();
  }

  GetAllSuppliers(): Promise<boolean> {
    return new Promise((resolve) => {
      this.supplierService.GetAllSuppliers()
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {
              this.SupplierOptions = data.result as Array<ISupplier>;
            } else {
              console.log(data.errorMessage);
              resolve(false);
            }
            resolve(true);
          },
          (error: any) => {
            console.log(error);
            resolve(false);
          }
        );
    });
  }
  GetBrands(): Promise<boolean> {
    return new Promise((resolve) => {
      this.lookupService.GetAllBrands()
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {
              this.BrandOptions = data.result as Array<IBrands>;
            } else {
              console.log(data.errorMessage);
              resolve(false);
            }
            resolve(true);
          },
          (error: any) => {
            console.log(error);
            resolve(false);
          }
        );
    });
  }

  GetAllCategories(): Promise<boolean> {
    return new Promise((resolve) => {
      this.lookupService.GetAllCategories()
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {
              this.CategoryOptions = data.result as Array<ICategory>;
            } else {
              console.log(data.errorMessage);
              resolve(false);
            }
            resolve(true);
          },
          (error: any) => {
            console.log(error);
            resolve(false);
          }
        );
    });
  }

  async populateValidation() {
    let resp = await this.GetBrands();
    if (resp) {
      resp = await this.GetAllCategories();
      if (resp) {
        resp = await this.GetAllSuppliers();
      }
    }
  }

  buildForm() {
    this.ProductForm = this.fb.group({
      Brand_Id: [""],
      Category_Id: [""],
      Supplier_Id: [""],
      Stock_Count: [""],
      Condition: [""],
      Price: [""],
      Product_Description: [""]
    });
  }

  ngOnInit() {
    this.populateValidation();
    this.buildForm();
  }

}
