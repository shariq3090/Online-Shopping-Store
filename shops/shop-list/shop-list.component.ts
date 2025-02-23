import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  selectedShop?: Shop;

  shops: Shop[] = [];
  shopList: any;

  constructor(private shopService: ShopService, private messageService: MessageService) { }

  ngOnInit(): void {
    //this.getShops();
    this.shopService.getShops().subscribe(shops => {
      this.shopList = shops
    });
  }

  onSelect(shop: Shop): void {
    this.selectedShop = shop;
    this.messageService.add(`ShopComponent : Selected shop id=${shop.id}`);
  }

  getShops(): void {
    this.shopService.getShops().subscribe(shops => {
      this.shopList = shops
    });
  }
}
