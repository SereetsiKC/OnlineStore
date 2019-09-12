import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { AddProductComponent } from './components/dialogs/add-product/add-product.component';

import { LookupService } from './services/lookup.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { OpendialogService } from './services/opendialog.service';
import { DialogContainerComponent } from './components/templates/dialog-container/dialog-container.component';
import { QuickFeatureItemsComponent } from './components/partial/quick-feature-items/quick-feature-items.component';
import { QuickViewComponent } from './components/partial/quick-view/quick-view.component';
import { BrandsComponent } from './components/partial/brands/brands.component';
import { CategoriesComponent } from './components/partial/categories/categories.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductService } from './services/product.service';
import { SupplierService } from './services/supplier.service';
import { SupplierComponent } from './components/supplier/supplier.component';
import { AddSupplierComponent } from './components/dialogs/add-supplier/add-supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    LoaderComponent,
    AddProductComponent,
    CategoriesComponent,
    BrandsComponent,
    QuickViewComponent,
    QuickFeatureItemsComponent,
    DialogContainerComponent,
    SupplierComponent,
    AddSupplierComponent,
  ],
  entryComponents: [
    AddProductComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [
    LookupService,
    LoaderService,
    OpendialogService,
    ProductService,
    SupplierService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
