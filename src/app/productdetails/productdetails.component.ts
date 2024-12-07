import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service'; // Importez le CartService

@Component({
  selector: 'app-product-details',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // Injectez le CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      const productIdNumber = +productId;
      if (!isNaN(productIdNumber)) {
        this.productService.getProductById(productIdNumber).subscribe(
          (product) => {
            this.product = product;
          },
          (error) => {
            console.error('Error fetching product details:', error);
          }
        );
      } else {
        console.error('Invalid product ID');
      }
    }
  }

  // Ajoutez le produit au panier
  addToCart(product: Product): void {
    console.log('Product added to cart:', product);
    this.cartService.addToCart(product); // Utilisez CartService pour ajouter au panier
  }
}
