import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShopsRoutingModule } from './shops-routing.module';

//debugger;
@NgModule({
  declarations: [
    ShopListComponent,
    ShopDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopsRoutingModule
  ]
})
export class ShopsModule { }
