import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AboutsComponent } from './abouts.component';
import { AboutsRoutingModule } from './abouts-routing.module';

@NgModule({
  declarations: [
    AboutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AboutsRoutingModule
  ]
})
export class AboutsModule { }
