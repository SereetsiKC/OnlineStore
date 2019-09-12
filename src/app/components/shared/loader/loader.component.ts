import { Component } from '@angular/core';
import { LoaderService } from './../../../services/loader.service';

@Component({
  selector: 'app-loader',
  template:
    `
  <div *ngIf="isLoading === true" class="overlay">
    <div class="spinner"></div>
  </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: boolean = false;
  constructor(
    private loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe(
      x => {
        this.isLoading = x;
      }
    );
  }

}
