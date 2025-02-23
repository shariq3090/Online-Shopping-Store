import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
