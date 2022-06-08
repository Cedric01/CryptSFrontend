import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from '../models/rootobject';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getExchangesRates()  {

    return this.http.get<RootObject>(this.baseUrl + '/ExChangeRate')
  }
}
