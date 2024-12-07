import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { HttpErrorResponse } from '@angular/common/http'; // Importer HttpErrorResponse si vous utilisez des requêtes HTTP

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // On récupère les produits du panier
    this.cartItems = this.cartService.getCartItems();
    console.log('Panier récupéré:', this.cartItems); // Vérifier dans la console si les produits sont présents
    this.calculateTotal();
  }

  // Calculer le total du panier
  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
    console.log('Total calculé:', this.total); // Vérifier le total dans la console
  }

  // Vider le panier
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }

  // Exemple d'erreur dans le cas où des requêtes HTTP sont utilisées
  handleError(error: HttpErrorResponse): void {
    console.error('Une erreur est survenue:', error.message);
  }
}
