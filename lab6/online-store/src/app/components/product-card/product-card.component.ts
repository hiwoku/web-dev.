import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() removed = new EventEmitter<number>();

  currentImage = '';

  ngOnChanges() {
    this.currentImage = this.product?.image || '';
  }

  selectImage(img: string) {
    this.currentImage = img;
  }

  like() {
  if (this.product.likes === 0) {
    this.product.likes = 1;
  } else {
    this.product.likes = 0;
  }
}

  onRemove() {
    this.removed.emit(this.product.id);
  }

  shareWhatsapp() {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}