import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  productList() {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }
}
