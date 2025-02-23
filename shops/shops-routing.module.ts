import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';

const shopRoutes: Routes = [
  { path: 'shops', component: ShopListComponent },
  { path: 'shop/:id', component: ShopDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
