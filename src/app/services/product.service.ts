import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/data/product.json';  

  constructor(private http: HttpClient) {}

  // Récupérer tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Récupérer un produit par son ID
  getProductById(id: number): Observable<Product> {
    return new Observable<Product>((observer) => {
      this.http.get<Product[]>(this.apiUrl).subscribe(
        (products) => {
          const product = products.find(p => p.id === id); 
          if (product) {
            observer.next(product);
          } else {
            observer.error('Product not found');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
