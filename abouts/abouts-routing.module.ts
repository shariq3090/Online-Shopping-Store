import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './abouts.component';

const aboutsRoutes: Routes = [
  { path: 'abouts',  component: AboutsComponent}      
];

@NgModule({
  imports: [RouterModule.forChild(aboutsRoutes)],
  exports: [RouterModule]
})
export class AboutsRoutingModule { }
