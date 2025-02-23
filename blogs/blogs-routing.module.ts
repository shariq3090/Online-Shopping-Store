import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const blogsRoutes: Routes = [
    { path: 'blogs',  component: BlogsComponent}      
  ];

//  const blogsRoutes: Routes = [
//    { path: 'blogs', loadChildren: () => import('./blogs.module').then(m => m.BlogsModule) }
//  ];

@NgModule({
  imports: [RouterModule.forChild(blogsRoutes)],  
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
