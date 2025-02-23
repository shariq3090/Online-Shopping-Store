import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogsComponent } from './blogs.component';
import { BlogsRoutingModule } from './blogs-routing.module';

@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
