import { Injectable } from '@angular/core';
import { PredictionRequest } from '../models/prediction.request';
import { PredictionResponse } from '../models/prediction.response';
import { Observable } from 'rxjs';
import { Paths } from '../paths';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    const url = Paths.baseAPIUrl + `/orders?uid=${sessionStorage.getItem('uid')}`;
    return this.http.post<any>(url, order).pipe(
      map( response => {
        if (response.success) {
          return response.entity;
        } else {
          alert(response.error);
        }
      })
    );
  }

  getOrderHistory(): Observable<Order[]> {
    const url = Paths.baseAPIUrl + `/orders`;
    return this.http.get<any>(url).pipe(
      map( response => {
        if (response.success) {
          return response.entityList;
        } else {
          alert(response.error);
        }
      })
    );
  }
}
