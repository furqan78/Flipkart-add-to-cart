import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public _url = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>(this._url)
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
