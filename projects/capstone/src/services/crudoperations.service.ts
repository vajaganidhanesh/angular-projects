import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productData } from '../contract/data';

@Injectable()
export class crudOperation {
  public url = 'http://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  public GetMethod(): Observable<productData[]> {
    return this.http.get<productData[]>(this.url);
  }

  public deleteMethod(id: number): Observable<productData[]> {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.delete<productData[]>(url);
  }
}
