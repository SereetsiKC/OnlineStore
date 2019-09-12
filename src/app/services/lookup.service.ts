import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseResult } from '../interfaces/response-result';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  private _url = environment.Url.LookupServiceUrl;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  GetAllBrands(): Observable<ResponseResult> {
    return this.http.get<ResponseResult>(this._url.concat(`GetAllBrands`),{ headers: this.httpHeaders });
  }

  GetAllBrandsProducts(): Observable<ResponseResult> {
    return this.http.get<ResponseResult>(this._url.concat(`GetAllBrandsProducts`),{ headers: this.httpHeaders });
  }

  GetAllCategoryBrands(): Observable<ResponseResult> {
    return this.http.get<ResponseResult>(this._url.concat(`GetAllCategoryBrands`),{ headers: this.httpHeaders });
  }

  GetAllCategories(): Observable<ResponseResult> {
    return this.http.get<ResponseResult>(this._url.concat(`GetAllCategories`),{ headers: this.httpHeaders });
  }

}
