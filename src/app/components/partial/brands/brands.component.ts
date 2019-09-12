import { Component, OnInit } from '@angular/core';
import { LookupService } from './../../../services/lookup.service';
import { IBrandProduct } from './../../../interfaces/ibrand-product';
import { ResponseResult } from './../../../interfaces/response-result';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  ProductBrands = new Array<IBrandProduct>();
  constructor(
    private lookupService: LookupService,
  ) { }

  SearchBy(data: IBrandProduct) {
    alert(`functionality -> under construction :Data=> ${data}`);
  }
  GetBrandsProducts(): Promise<boolean> {
    return new Promise(resolve => {
      this.lookupService.GetAllBrandsProducts()
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {
              this.ProductBrands = data.result as Array<IBrandProduct>;
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

  ngOnInit() {
    this.GetBrandsProducts();
  }

}
