import { Component, OnInit } from '@angular/core';
import { ISupplier } from './../../interfaces/isupplier';
import { SupplierService } from './../../services/supplier.service';
import { ResponseResult } from './../../interfaces/response-result';
import { OpendialogService } from './../../services/opendialog.service';
import { MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  Supplier = new Array<ISupplier>();
  constructor(
    private supplierService: SupplierService,
    private open: OpendialogService
  ) { }

  GetAllSuppliers(): Promise<boolean> {
    return new Promise((resolve) => {
      this.supplierService.GetAllSuppliers()
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {
              this.Supplier = data.result as Array<ISupplier>;
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

  AddSupplier() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.maxWidth = "50vw";
    dialogConfig.width = "50%";
    // dialogConfig.position = {
    //   top: "30px"
    // };
    dialogConfig.data = {
      Title: `Add New Supplier`
    };
    this.open.AddSupplier(dialogConfig).afterClosed()
      .subscribe(
        result => {
          this.ngOnInit();
        });
  }

  ngOnInit() {
    this.GetAllSuppliers();
  }

}
