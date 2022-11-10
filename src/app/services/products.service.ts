import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRequest } from '../utils/interface';
import { IProducts } from '../components/products/products.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProducts(params = {}): Observable<IRequest<IProducts[]>> {
    const query = new URLSearchParams(params);
    return this.http.get<IRequest<IProducts[]>>(
      `${this.apiUrl}/products?${query}`
    );
  }
}
