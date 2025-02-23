import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ShopService } from '../shop.service';
import { Shop } from '../shop';
import { Location } from '@angular/common';
//import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  shop: Shop | undefined;
  shopId!: number;
  shopdetail: any;
  selectedSize: string = '';
  no_of_items: number = 1;
  //cartItems1: { id: number; size: string; no_of_items: number }[] = [];
  cartItems: { id: number; imgPath: string, brand: string, size: string, description: string, price: number, no_of_items: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.shopId = Number(this.route.snapshot.paramMap.get('id'));

    this.shopService.getShopById(this.shopId).subscribe((shop) => {
      this.shopdetail = shop;
    });
    this.cartItems = this.shopService.getCart();
  }

  /*getShop(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shopService.getShop(id).subscribe(shop => this.shop = shop);
  }
 
  gotoShops(): void {
    this.router.navigate(['/shops']);
  }
 
  goBack(): void {
    this.location.back();
  }*/

  addToCart(id: number, imgPath: string, brand: string, size: string, description: string, price: number, no_of_items: number = 1) {
    if (!size) {
      console.warn("Please select a size before adding to cart.");
      return;
    }
    if (this.no_of_items <= 0) {
      console.warn("No. of items should be atleast '1'")
      return;
    }
    //debugger;
    this.shopService.addToCart({ id, imgPath, brand, size, description, price, no_of_items });
    this.cartItems = this.shopService.getCart();

    console.log("Cart Items:", this.cartItems);
    this.location.back();
  }

}
