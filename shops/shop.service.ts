import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shop } from './shop';
import { SHOPS } from './mock-shops';
import { MessageService } from '../message.service';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private messageService: MessageService/*, private httpClient : HttpClient*/) { }

  //private cartItems1: { id: number; size: string; no_of_items: number }[] = [];
  private cartItems: { id: number; imgPath: string, brand: string, size: string, description: string, price: number, no_of_items: number }[] = [];

  getShop(id: number): Observable<Shop> {
    const shop = SHOPS.find(h => h.id === id)!;
    this.messageService.add(`ShopService: fetched shop id=${id}`);
    return of(shop);
  }

  getShops(): Observable<Shop[]> {
    const shops = of(SHOPS);
    //this.messageService.add(`ShopService : fetched shops`)
    return shops;
  }

  getShopById(id: number): Observable<Shop> {
    const shop = SHOPS.find(h => h.id === id)!;
    //this.messageService.add(`ShopService: fetched shop id=${id}`);
    return of(shop);
  }

  addToCart(item: { id: number; imgPath: string, brand: string, size: string, description: string, price: number, no_of_items: number }) {
    debugger;
    this.cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); // Store in localStorage
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  /*public getShopsAPI(){
    return this.httpClient.get('http://localhost:28047/Shops');
  }*/
}
