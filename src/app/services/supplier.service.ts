import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseResult } from '../interfaces/response-result';
import { ISupplier } from '../interfaces/isupplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private _url = environment.Url.SupplierServiceUrl;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  GetAllSuppliers(): Observable<ResponseResult> {
    return this.http.get<ResponseResult>(this._url.concat(`GetAllSuppliers`),{ headers: this.httpHeaders });
  }

  SaveProduct(PData:ISupplier):Observable<ResponseResult>{
    return this.http.post<any>(this._url.concat(`SaveSupplier`), PData, { headers: this.httpHeaders });
  }
}
