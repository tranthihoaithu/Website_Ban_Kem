import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Category } from '../models/category';

const _api =' http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 

  constructor(private  http: HttpClient) { }

  getCategory(): Observable<Array<Category>>{
    return this.http.get<Array<Category>>( _api + 'category');
  }
}
