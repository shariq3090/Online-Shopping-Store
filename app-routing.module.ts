import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopListComponent } from './shops/shop-list/shop-list.component';
import { ShopDetailComponent } from './shops/shop-detail/shop-detail.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AboutsComponent } from './abouts/abouts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop-lists', component: ShopListComponent },
  { path: 'shop-details/:id', component: ShopDetailComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'abouts', component: AboutsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
