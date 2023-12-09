import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Product } from '../models/product';

const _api =' http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  http: HttpClient) { }

  getProducts(_limit:number =8, search_key: any=null): Observable<Array<Product>>{
    let url=  _api + 'product/?_limit='+ _limit +'&_sort=id&_order=desc'
    if(search_key != null){
      url += '&name_like=' +search_key;
    }
    return this.http.get<Array<Product>>(url );
  }
  create(data: any): Observable<any>{
    return this.http.post<any>( _api + 'product', data);
  }

  getOne(id: number): Observable<Product>{
    return this.http.get<Product>( _api + 'product/' +id);
  }

  update(id:number,data: any): Observable<any>{
    return this.http.put<any>( _api + 'product/'+id, data);
  }

  delete(id: number): Observable<any>{
    return this.http.delete<any>( ' http://localhost:3000/product/'+ id);
  }


}
