import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseResult } from '../interfaces/response-result';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = environment.Url.ProductServiceUrl;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  GetQuickViewProduct(): Observable<ResponseResult> {
    return this.http.get<ResponseResult>(this._url.concat(`GetQuickViewProduct`),{ headers: this.httpHeaders });
  }

  GetAllProducts(): Observable<ResponseResult> {
    return this.http.get<ResponseResult>(this._url.concat(`GetAllProducts`),{ headers: this.httpHeaders });
  }
}
