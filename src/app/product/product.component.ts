import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    // Charger les produits via le service
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  viewDetails(productId: number): void {
    // Naviguer vers la page des détails du produit
    this.router.navigate(['/productdetail', productId]);
  }
}
