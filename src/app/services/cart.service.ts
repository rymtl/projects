import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {}

  // Ajouter un produit au panier
  addToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartItemCount.next(this.cartItems.length);
  }

  // Récupérer le nombre d'articles dans le panier
  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  // Obtenir tous les articles du panier
  getCartItems() {
    return this.cartItems;
  }

  // Vider le panier
  clearCart() {
    this.cartItems = [];
    this.cartItemCount.next(0);
  }
}
