import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './../../../interfaces/iproduct';
import { ResponseResult } from './../../../interfaces/response-result';

@Component({
  selector: 'app-quick-feature-items',
  templateUrl: './quick-feature-items.component.html',
  styleUrls: ['./quick-feature-items.component.scss']
})
export class QuickFeatureItemsComponent implements OnInit {
  Products = new Array<IProduct>();
  constructor(
    private productService: ProductService
  ) { }

  GetQuickViewProduct() {
    return new Promise(resolve => {
      this.productService.GetQuickViewProduct()
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
    this.GetQuickViewProduct();
  }

}
