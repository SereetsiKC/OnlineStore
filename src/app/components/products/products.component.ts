import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from "@angular/material";
import { OpendialogService } from './../../services/opendialog.service';
import { ProductService } from './../../services/product.service';
import { ResponseResult } from './../../interfaces/response-result';
import { IProduct } from './../../interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products = new Array<IProduct>();
  constructor(
    private open: OpendialogService,
    private productService: ProductService,
  ) { }


  AddProduct() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.maxWidth = "70vw";
    dialogConfig.width = "70%";

    // dialogConfig.position = {
    //   top: "30px"
    // };
    dialogConfig.data = {
      Title: `Add New Product`
    };
    this.open.AddProduct(dialogConfig).afterClosed()
      .subscribe(
        result => {
          this.ngOnInit();
        });
  }

  GetAllProducts() {
    return new Promise(resolve => {
      this.productService.GetAllProducts()
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {
              this.Products = data.result as Array<IProduct>;
              console.log(this.Products);
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
        )
    });
  }

  AddToCart(data: IProduct) {
    alert(`functionality -> under construction :Data=> ${data}`);
  }

  ViewProductDetails(data: IProduct){
    alert(`functionality -> under construction :Data=> ${data}`);
  }
  ngOnInit() {
    this.GetAllProducts();
  }

}
