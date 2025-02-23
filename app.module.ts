import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { ShopsModule } from './shops/shops.module';
import { BlogsModule } from './blogs/blogs.module';
import { ContactsModule } from './contacts/contacts.module';
import { AboutsModule } from './abouts/abouts.module';
//import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    PageNotFoundComponent,
    //CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ShopsModule,
    BlogsModule,
    AboutsModule,
    ContactsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
