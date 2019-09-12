import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from './../../../interfaces/idialod-data';
import { SupplierService } from 'src/app/services/supplier.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISupplier } from 'src/app/interfaces/isupplier';
import { ResponseResult } from 'src/app/interfaces/response-result';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  Title: string;
  SupplierForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddSupplierComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
    private supplierService: SupplierService,
  ) {
    this.Title = data.Title;
  }

  onSubmit(event) {
    event.stopPropagation();
    if (this.SupplierForm.valid) {
      let _form = this.SupplierForm.value;
      let oData = {
        id: 0,
        name: String(_form.Name)
      }
      this.SaveSupplier(oData)
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
    console.log(this.SupplierForm);
  }

  SaveSupplier(Data: ISupplier): Promise<boolean> {
    return new Promise((resolve) => {
      this.supplierService.SaveProduct(Data)
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

  buildForm() {
    this.SupplierForm = this.fb.group({
      Name: [""]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

}
