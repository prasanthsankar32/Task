import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import {ActivatedRoute} from "@angular/router";
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HttpDataComponent } from './http-data/http-data.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
  path:'about',
  component:AboutComponent
  },
  {
    path:'blog/:id',
    component:BlogComponent
  },
  {
    path:'about/category',
    component:CategoryComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'http-data',
    component : HttpDataComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
