import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import {PRODUCTS} from './mock-products'
import { MessageService } from '../message.service';
import { UOMS } from '../uoms/mock-uoms';
import { Uom } from '../uoms/uom';
import { UomService } from '../uoms/uom.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  getProduct(id: number): Observable<Product>{
    const product = PRODUCTS.find(h => h.id === id)!;    
    this.messageService.add(`ProductService: fetched product id=${id}`);
    return of(product);
  }

  getProducts(): Observable<Product[]>{
    const products = of(PRODUCTS);
    this.messageService.add(`ProductService : fetched products`)
    return products;
  }

  getUoms(): Observable<Uom[]> {
    const uoms = of(UOMS);
    this.messageService.add(`UomService : fetched uoms`)
    return uoms;
  }

  public getProductsAPI(){
    return this.httpClient.get('http://localhost:28047/Products');
  }
}
