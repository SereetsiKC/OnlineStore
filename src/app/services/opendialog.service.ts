import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { AddProductComponent } from './../components/dialogs/add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class OpendialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  AddProduct(settings: MatDialogConfig): MatDialogRef<AddProductComponent, any> {
    let dialogRef = this.dialog.open(AddProductComponent, settings);
    dialogRef.afterClosed().subscribe(result => {
      dialogRef = null;
    });
    return dialogRef;
  }
}
