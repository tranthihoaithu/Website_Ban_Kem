import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {App} from '../models/app';

const api =' http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private  http: HttpClient) { }

  listCategories(){
    return this.http.get(`${api}/category`);
  }
  listProducts(){
    return this.http.get(`${api}/peoduct`);
  }
}
