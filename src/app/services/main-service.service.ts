import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http : HttpClient) { }

  getCurrentCurrency(): Observable<any>{
    return this.http.get("https://api.exchangerate.host/latest?symbols=USD,EUR,UAH&base=UAH");
  }
}
