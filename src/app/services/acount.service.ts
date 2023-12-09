import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Acount } from '../models/acount';

const _api =' http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class AcountService {

  constructor(private  http: HttpClient) { }

  getAcount(): Observable<Array<Acount>>{
    return this.http.get<Array<Acount>>( _api + 'acount');
  }
}
