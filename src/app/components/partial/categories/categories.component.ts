import { Component, OnInit } from '@angular/core';
import { LookupService } from './../../../services/lookup.service';
import { ICategoryBrands } from 'src/app/interfaces/icategory-brands';
import { ResponseResult } from './../../../interfaces/response-result';
import { IBrands } from 'src/app/interfaces/ibrands';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  CategoryBrands = new Array<ICategoryBrands>();
  constructor(
    private lookupService: LookupService,
  ) { }

  GetAllCategoryBrands(): Promise<boolean> {
    return new Promise(resolve => {
      this.lookupService.GetAllCategoryBrands()
        .subscribe(
          (data: ResponseResult) => {
            if (data.succeeded) {
              this.CategoryBrands = data.result as Array<ICategoryBrands>;
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

  SearchBy(category: ICategoryBrands, brand: IBrands) {
    alert(`functionality -> under construction :Data=> ${category}`);
  }

  ngOnInit() {
    this.GetAllCategoryBrands();
  }

}
