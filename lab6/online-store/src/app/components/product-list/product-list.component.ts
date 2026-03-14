import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.models';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  localProducts: Product[] = [];

  @Input()
  set products(value: Product[]) {
    this.localProducts = [...(value ?? [])];
  }

  removeProduct(id: number) {
    this.localProducts = this.localProducts.filter((p) => p.id !== id);
  }
}