import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shops/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { id: number; size: string; no_of_items: number }[] = [];
  cartItemDetails: { id: number; imgPath: string, brand: string, size: string, description: string, price: number, no_of_items: number }[] = [];
  i: number = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.cartItemDetails = this.shopService.getCart();
  }

  // Remove item from cart
  removeItem(index: number): void {
    if (index > -1) {
      this.cartItemDetails.splice(index, 1); // Remove item from array
      localStorage.setItem('cartItems', JSON.stringify(this.cartItemDetails)); // Update local storage
    }
  }
}
