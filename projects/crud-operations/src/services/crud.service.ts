import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../contracts/product';

@Injectable({
  providedIn: 'root',
})
export class crudService {
  private apiURL: any = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}`);
  }

  addItem(data: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.apiURL, data);
  }

  delete(Id: any): Observable<ProductType> {
    const deleteUrl = `${this.apiURL}/${Id}`;
    return this.http.delete<ProductType>(deleteUrl);
  }
}
